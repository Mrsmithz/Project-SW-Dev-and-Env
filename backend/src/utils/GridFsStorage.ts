import multer from 'multer'
import { GridFsStorage } from 'multer-gridfs-storage'
import dotenv from 'dotenv'
import crypto from 'crypto'
import path from 'path'
import {Request, Response} from 'express'

dotenv.config()

interface File {
    fieldname:string,
    originalname:string,
    encoding:string,
    mimetype:string
}

const storage = new GridFsStorage({
    url:process.env.MONGODB_URI,
    file:(req : Request, file : File) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buff) => {
                if (err){
                    reject(err)
                }
                const fileName = buff.toString('hex') + path.extname(file.originalname)
                const fileInfo = {
                    fileName,
                    bucketName: 'uploads'
                }
                resolve(fileInfo)
            })
        })
    }
})
const upload = multer({ storage })
export default upload