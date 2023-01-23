import {
    getName,
    expense
} from "../controller/User.js"
import { Router } from 'express'
import { tokenValidation } from "../middleware/AuthToken.js"
import { UserValSchema as validateSchema} from "../middleware/UserValSchema.js"
import { tranSchema } from "../schemas/TransactionSchema.js"

const userRouter = Router()

userRouter.use(tokenValidation)
userRouter.get("/name", getName)
userRouter.post("/expense", validateSchema(tranSchema), expense)



export default userRouter