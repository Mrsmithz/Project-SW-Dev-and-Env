import http from 'http'
import { app } from './App'

const PORT = process.env.PORT || 8000

const httpServer : http.Server = http.createServer(app)

httpServer.listen(PORT, () : void => {
    console.log(`http server started at port ${PORT}`)
})

export { httpServer }
export default httpServer