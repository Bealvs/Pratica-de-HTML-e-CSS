import express from "express"
import dotenv from "dotenv"
import router from "./controller/animes-controller.js"

dotenv.config()

const app = express()
app.use(express.json()) 
app.use(router) 
const PORTServer = process.env.PORT_SERVER
app.listen(PORTServer,()=>{console.log(`O servidor está rodando na porta: ${PORTServer}`)})