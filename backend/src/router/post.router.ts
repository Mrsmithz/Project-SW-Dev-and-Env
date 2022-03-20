import { NextFunction, Router, Request, Response, } from "express"
import { graphqlHTTP } from "express-graphql"
import PostSchema from '../model/Post'
import { upload } from '../utils/GridFsStorage'
import { MulterError } from "multer"
import { createPost } from '../controller/PostController'

const router : Router = Router()
const filesUpload = upload.fields([
    {
        name:'file',
        maxCount:1
    },
    {
        name:'images',
        maxCount:3
    }
])
router.post('/create', (req : Request, res : Response, next : NextFunction) => {
    filesUpload(req, res, (err) => {
        if (err instanceof MulterError){
            console.log(err)
            res.status(400).json({
                error:err.code
            }).end()
        }
        else{
            next()
        }
    })
}, createPost)

router.use('/', graphqlHTTP({
    schema:PostSchema,
    graphiql:true
}))

export default router