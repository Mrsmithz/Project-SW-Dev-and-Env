import { NextFunction, Router, Request, Response, } from "express"
import { graphqlHTTP } from "express-graphql"
import PostSchema from '../model/Post'
const router : Router = Router()

router.post('/create', async (req : Request, res : Response, next : NextFunction) : Promise<Response> => {
    return res.json({
        msg:'Hello'
    })
})

router.use('/', graphqlHTTP({
    schema:PostSchema,
    graphiql:true
}))

export default router