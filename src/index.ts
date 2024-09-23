// classe personalizada de erro

import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { ApiError } from './ApiError'
import { BadRequestError } from './BadRequestError'
import { NotFoundtError } from './BadRequestError copy'

const app = express()

app.use(express.json())

app.get('/', async (req: Request, res: Response) => {
    const { nome, idade } = req.body

    if (!nome) {
        throw new BadRequestError('O campo nome é obrigatório')
    }

    if (!idade) {
        throw new NotFoundtError('Idade não econtrada')
    }

    return res.json(`Tudo certo, ${nome}`)
})

// catch all
app.use((err: Error & Partial<ApiError>, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode ?? 500
    //console.log(err);
    return res.status(statusCode).json({ message: err.message });
})

app.listen(3000)
