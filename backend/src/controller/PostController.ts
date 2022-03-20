import {Request, Response, NextFunction} from 'express'
import { UploadFiles } from '../types/rest/UploadFiles.type'
import { ICreatePost } from '../types/rest/post/CreatePost.type'
import { Post } from '../model/Post'
import { IPost } from '../types/post/Post.type'
import { GridFile } from 'multer-gridfs-storage'
import mongoose from 'mongoose'
const createPost = async (req : Request, res : Response, next : NextFunction) : Promise<Response> => {
    const uploads = req.files as UploadFiles
    const {title, description, contact, status} = req.body as ICreatePost
    const post : IPost = {
        title,
        description,
        contact,
        status,
        file: new mongoose.Types.ObjectId(uploads?.file?.[0].id),
        images: uploads.images.map((file : GridFile) => {
            return new mongoose.Types.ObjectId(file.id)
        })
    }
    const result = await Post.create(post)
    return res.status(201).send(result)
}

export { createPost }