import supertest, { SuperAgentTest} from 'supertest'
import { app } from '../../../App'
import path from 'path'
import { connectDB, disconnectDB, clearDB} from '../../../src/utils/db'
import { connectGridFS, closeGridFSConnection} from '../../../src/utils/uploadsBucket'
import { Status } from '../../../src/types/post/Status.enum'
import { ICreatePost } from '../../../src/types/rest/post/CreatePost.type'
import { MongoMemoryServer } from 'mongodb-memory-server'
const isArrayOfString = (arr : []) => {
    return arr.every(el => typeof el === 'string')
}
let mongo : MongoMemoryServer = null

describe('Post API Endpoints', () => {
    jest.setTimeout(20000)

    beforeAll(async () : Promise<void> => {
        mongo = await MongoMemoryServer.create()
        const uri = mongo.getUri()
        await connectDB(uri)
        await connectGridFS(uri)
    })
    afterAll(async () : Promise<void> => {
        await disconnectDB()
        await closeGridFSConnection()
        await mongo.stop()
    })
    afterEach(async () : Promise<void> => {
        await clearDB()
    })
    it('Should Create Post', async () => {
        const post : ICreatePost = {
            title: 'test create post',
            status: Status.PRIVATE
        }
        const response = await supertest(app)
        .post('/api/v1/posts/create')
        .attach('file', path.join(__dirname, '/test-pdf.pdf'))
        .attach('images', path.join(__dirname, '/test-image.png'))
        .field('title', post.title)
        .field('status', post.status)
        const { body, statusCode} = response
        expect(statusCode).toBe(201)
        expect(body.title).toEqual(post.title)
        expect(body.status).toEqual(post.status)
        expect(typeof body.file).toBe('string')
        expect(isArrayOfString(body.images)).toBe(true)
    })
})