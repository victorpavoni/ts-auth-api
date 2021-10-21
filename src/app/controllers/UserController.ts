import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class UserController {
    index(req: Request, res: Response) {
        return res.json({ id: req.userId });
    }

    async store(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body;

        const userExists = repository.findOne({ where: { email }});
        if (await userExists) { return res.sendStatus(409) }

        const user = repository.create({ email, password });
        await repository.save(user);

        return res.json(user);
    }
}

export default new UserController();
