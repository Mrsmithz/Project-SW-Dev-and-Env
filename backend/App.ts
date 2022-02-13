import express, {Request, Response, NextFunction} from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())


app.get('/', (req : Request, res : Response, next : NextFunction) : Response => {
    return res.send('Hello !')
})

export { app }