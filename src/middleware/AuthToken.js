import db from '../config/Database.js'

export async function tokenValidation(req, res, next) {
  const { authorization } = req.headers
  const token = authorization?.replace("Bearer ", '')

  if (!token) 
    return res.status(422).send("Inform token!")

  try {
    const checkSession = await db.collection("sessions").findOne({ token })

    if (!checkSession) 
        return res.status(401).send("Unauthorized Access!")

    //res.locals.sessao = checkSession

    next()

  } catch (error) {
        res.status(500).send(error)
  }
}