import db from '../config/Database.js'

export async function getName(req, res) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", '')
      

  try {
    const userSession = await db.collection("sessions").findOne({ token })

    const userName = await db.collection("users").findOne({ _id: userSession.userId })

    return res.send(userName.name)

  } catch (error) {
    res.status(500).send(error)
  }
}