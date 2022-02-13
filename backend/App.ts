import express, {Request, Response, NextFunction, Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import { handlePDFUpload } from './src/controller/FileUploadController'
import { DocumentProcessor } from './src/controller/OCRController'

dotenv.config()

const app : Application = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.all('*', (req : Request, res : Response, next : NextFunction) : Response => {
    if (req.headers.authorization !== process.env.API_KEY){
        return res.sendStatus(401)
    }
    next()
})
app.get('/api/health', (req : Request, res : Response, next : NextFunction) : Response => {
    return res.json({
        status:'UP'
    })
})

app.post('/api/upload', handlePDFUpload, DocumentProcessor)

export { app }