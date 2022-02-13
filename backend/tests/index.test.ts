import httpServer from '../index'
import supertest, { SuperAgentTest} from 'supertest'


describe('Server Endpoints', () : void => {
    afterAll(() : void => {
        httpServer.close()
    })
    it('GET /health should response with status and 200', async ()  => {
        const response  = await supertest(httpServer)
            .get('/health')
        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveProperty('status')
        expect(response.body.status).toEqual('UP')
    })
})
