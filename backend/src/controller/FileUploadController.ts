import {Request, Response, NextFunction} from 'express'
import formidable, { File, Fields, Files} from 'formidable'


declare global {
    namespace Express {
      interface Request {
        file: File
      }
    }
  }

const handlePDFUpload = async (req : Request, res : Response, next : NextFunction) : Promise<any> => {
    try{
        const form = formidable({multiples : true})
        form.parse(req, (err, fields, files : Files) => {
            const file : File = files.file as File
            req.file = file
            next()
        })
    }
    catch(err){
        console.log(err)
    }
}

export { handlePDFUpload }