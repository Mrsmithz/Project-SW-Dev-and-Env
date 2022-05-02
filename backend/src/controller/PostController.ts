import {Request, Response, NextFunction} from 'express'
import { UploadFiles } from '../types/rest/UploadFiles.type'
import { ICreatePost } from '../types/rest/post/CreatePost.type'
import { Post } from '../model/Post'
import { IPost } from '../types/post/Post.type'
import joi from 'joi'
import { fileUpload, imageUpload } from '../utils/fileUpload'

const createPost = async (req : Request, res : Response, next : NextFunction) : Promise<Response> => {
    const uploads = req.files as UploadFiles
    const {title, description, contact, status} = req.body as ICreatePost
    const file =  uploads.file?.[0]
    const result = await fileUpload(file)
    const imageResult = await imageUpload(uploads.images)
    if (result instanceof Error || imageResult instanceof Error){
        return res.status(400).send({
            msg:result
        })
    }
    if (imageResult instanceof Error){
        return res.status(400).send({
            msg:imageResult
        })
    }
    const post : IPost = {
        title,
        description,
        contact,
        status,
        file: result,
        images: imageResult,
        document:req.document
    }
    const created = await Post.create(post)
    return res.status(201).send(post)


}

export { createPost }