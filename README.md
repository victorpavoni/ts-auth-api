# Api de Autentição

Api de autenticação feito em typescript

---

## **Rotas**

> **POST** /users
> **JSON** `{ "email": "victor@gmail.com", "password": 123" }`

**Response**
`{ "email": "victor@gmail.com", "password": "545WXhF27...", "id": "e5460f42..." }`

> **POST** /auth
> **JSON** `{ "email": "victor@gmail.com", "password": "123" }`

**Response**
`{ "user": { "id": "e5460f42...", "email": "victor@gmail.com" }, "token": "eyJhbGc..." }`

> **GET** /users
> **Header** `{ Authorization: "Bearer eyJhbGci..." }`

**Response**
`{ "id": "4c054913..." }`
