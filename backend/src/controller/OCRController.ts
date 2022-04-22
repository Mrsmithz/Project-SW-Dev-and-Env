import { v1 } from '@google-cloud/documentai'
import fsPromises from 'fs/promises'
import { UploadFiles } from '../types/rest/UploadFiles.type'
import dotenv from 'dotenv'
import {Request, Response, NextFunction } from 'express'
dotenv.config()
const projectId = process.env.PROJECT_ID
const location = process.env.PROJECT_LOCATION
const processorId = process.env.PROCESSOR_ID

const DocumentProcessor : any = async (req : Request, res : Response, next : NextFunction) : Promise<any> => {
    try{
        const uploads = req.files as UploadFiles
        const file =  uploads.file?.[0]
        const client : v1.DocumentProcessorServiceClient = new v1.DocumentProcessorServiceClient()
        const name = `projects/${projectId}/locations/${location}/processors/${processorId}`
        const imageFile = await fsPromises.readFile(file.path)
        const encodedImage = Buffer.from(imageFile).toString('base64')

        const request = {
            name,
            rawDocument: {
            content: encodedImage,
            mimeType: file.mimetype,
            }
        }
        const [result] = await client.processDocument(request)
        const { document } = result
        const filteredTitle = document.text.match(/.+/g)
        const title = filteredTitle.slice(0, 10)
        req.document = {
            text:document.text,
            title
        }
        next()

    }
    catch(err){
        console.log(err)
        res.sendStatus(401)
        // throw new Error('OCR Failed')
    }
}

export { DocumentProcessor }