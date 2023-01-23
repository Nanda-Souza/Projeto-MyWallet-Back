import {
    getName
} from "../controller/User.js"
import { Router } from 'express'
import { tokenValidation } from "../middleware/AuthToken.js"

const userRouter = Router()

userRouter.use(tokenValidation)
userRouter.get("/name", getName)



export default userRouter