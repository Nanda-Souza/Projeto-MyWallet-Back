import bcrypt from 'bcrypt'
//import { v4 as uuidV4 } from 'uuid'
import db from '../config/Database.js'

export async function signUp(req, res) {
  const { name, email, password } = req.body

  const passwordHashed = bcrypt.hashSync(password, 10)

  try {

    //check if username or email is already in use
    const alreadyExists = await db.collection('users').findOne({
      $or: [
        {name},
        {email}
      ]
    })
    //If name or email is already in use return 409
    if(alreadyExists)
      return res.status(409).send("Name or email already exists!")

    await db.collection("users").insertOne({ name, email, password: passwordHashed })
    res.status(201).send("User created successfully!")

  } catch (error) {
    res.status(500).send(error.message)
  }
}

