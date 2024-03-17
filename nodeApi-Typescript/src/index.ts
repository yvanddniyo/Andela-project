import express from "express"
import  http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"
import * as dotenv from "dotenv"
import mongoose from "mongoose"
import router from "./router"


dotenv.config() 
const app = express()

app.use(cors({
    credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
    
})

let mongo = process.env.MONGO_URL
if (!mongo) {
    throw new Error("mongo not available");
}
mongoose.Promise = Promise
mongoose.connect(mongo).then(() => {
    console.log("mongo is successfully connected")
})
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/api', router())