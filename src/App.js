import express from "express";
import cors from "cors"
import authRouter from "./routes/AuthRoutes.js";
import userRouter from "./routes/UserRoutes.js";


const server = express()

server.use(cors())

server.use(express.json());

//Setting routes for MSC model
server.use(authRouter, userRouter)


const PORT = 5001

server.listen(PORT, () => console.log(`Server is up on port ${PORT}!!!`))