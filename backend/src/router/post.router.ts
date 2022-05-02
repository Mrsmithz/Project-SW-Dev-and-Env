import { NextFunction, Router, Request, Response, } from "express"
import { graphqlHTTP } from "express-graphql"
import PostSchema from '../model/Post'
import { MulterError } from "multer"
import { createPost } from '../controller/PostController'
import { DocumentProcessor } from '../controller/OCRController'
import multer from 'multer'
import { memoryStorage } from "multer"
const router : Router = Router()
const uploadLocal = multer({ dest: 'uploads/' })
const uploadLocalFields = uploadLocal.fields([
    {
        name:'file',
        maxCount:1
    },
    {
        name:'images',
        maxCount:3
    }
])
router.post('/create', uploadLocalFields, DocumentProcessor, createPost)

router.use('/', graphqlHTTP({
    schema:PostSchema,
    graphiql:true
}))

export default router