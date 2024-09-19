import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    //throw new Error('Lancei um erro sem tratar')
    return res.json('Tudo certo!')
})

app.listen(3000)