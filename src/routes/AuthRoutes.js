import { Router } from 'express'
import { UserValSchema as validateSchema} from "../middleware/UserValSchema.js"
import { userSchema } from '../schemas/AuthSchema.js'
import { signUp } from "../controller/Auth.js"

const authRouter = Router()

// method to manage the authentication routes and schema validation via middleware
authRouter.post("/sign-up", validateSchema(userSchema), signUp)


export default authRouter