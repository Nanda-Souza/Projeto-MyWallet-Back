import { Router } from 'express'
import { UserValSchema as validateSchema} from "../middleware/UserValSchema.js"
import { userSchema, loginSchema } from '../schemas/AuthSchema.js'
import { signUp, signIn } from "../controller/Auth.js"

const authRouter = Router()

// method to manage the authentication routes and schema validation via middleware
authRouter.post("/sign-up", validateSchema(userSchema), signUp)
authRouter.post("/sign-in", validateSchema(loginSchema), signIn)


export default authRouter