import express, {Request, Response, NextFunction, Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app : Application = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())


app.get('/health', (req : Request, res : Response, next : NextFunction) : Response => {
    return res.json({
        status:'UP'
    })
})

export { app }