import { v1 } from '@google-cloud/documentai'
import fsPromises from 'fs/promises'

import dotenv from 'dotenv'
dotenv.config({path: __dirname+'/../../.env'})
import {Request, Response, NextFunction } from 'express'
const projectId = process.env.PROJECT_ID
const location = process.env.PROJECT_LOCATION
const processorId = process.env.PROCESSOR_ID

const DocumentProcessor : any = async (req : Request, res : Response, next : NextFunction) : Promise<any> => {
    try{
        const client : v1.DocumentProcessorServiceClient = new v1.DocumentProcessorServiceClient()
        const name = `projects/${projectId}/locations/${location}/processors/${processorId}`

        const imageFile = await fsPromises.readFile('test')
        const encodedImage = Buffer.from(imageFile).toString('base64')

        const request = {
            name,
            rawDocument: {
                content: encodedImage,
                mimeType: req.file.mimetype,
            }
        }
        const [result] = await client.processDocument(request)
        const { document } = result
        res.send({
            text:document.text
        })
    }
    catch(err){
        console.log(err)
        res.sendStatus(401)
        // throw new Error('OCR Failed')
    }
}

export { DocumentProcessor }