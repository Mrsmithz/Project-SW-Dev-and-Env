import express, {Request, Response, NextFunction, Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import PostRouter from './src/router/post.router'

dotenv.config({path: `.env.${process.env.NODE_ENV}`})

declare global {
    namespace Express {
      interface Request {
        document?: Object,
        documentFile?: File
      }
    }
  }


const ContextPath : String = '/api/v1';
const app : Application = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

// app.all('*', (req : Request, res : Response, next : NextFunction) : Response => {
//     if (req.headers.authorization !== process.env.API_KEY){
//         return res.sendStatus(401)
//     }
//     next()
// })

app.use(`${ContextPath}/posts`, PostRouter)

app.get(`${ContextPath}/health`, (req : Request, res : Response, next : NextFunction) : Response => {
    return res.json({
        status:'UP'
    })
})

// app.post(`${ContextPath}/upload`, handlePDFUpload, DocumentProcessor)

export { app }