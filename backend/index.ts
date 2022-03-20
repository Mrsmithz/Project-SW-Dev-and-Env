import http from 'http'
import { app } from './App'
import { connectDB } from './src/utils/db'

connectDB(process.env.MONGODB_URI).then(() => console.log('connect success'))
const PORT = process.env.PORT || 8000

const httpServer : http.Server = http.createServer(app)

httpServer.listen(PORT, () : void => {
    console.log(`http server started at port ${PORT}`)
})

export { httpServer }
export default httpServer