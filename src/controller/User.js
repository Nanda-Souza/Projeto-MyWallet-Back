import db from '../config/Database.js'
import dayjs from 'dayjs'

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

export async function expense(req, res) {
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", '')
    
    const { value, description, type } = req.body
  
    try {

      const userSession = await db.collection("sessions").findOne({ token })
      
      const tokenUserId = await db.collection("users").findOne({ _id: userSession.userId })
  
      await db.collection("transactions").insertOne({ 
        userId: tokenUserId._id,
        value,
        description,
        type,
        date: dayjs().format("DD/MM")        
    })
  
      res.status(200).send("Transaction added!")
  
    } catch (error) {
      res.status(500).send(error.message)
    }
  }