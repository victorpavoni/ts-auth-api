import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

class AuthController {

    
    async authenticate(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body;

        const user = await repository.findOne({ where: { email }});

        if (!user) {
            return res.sendStatus(401);
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.sendStatus(401);
        }
        
        const token = jwt.sign({ id: user.id }, '8e4b1b8660affef0966d15139ed2a09b', { expiresIn: '1d'});
            
        delete user.password;

        res.json({ user, token });
    }
}

export default new AuthController();
