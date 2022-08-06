import client from "../../../database/database.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from 'uuid';

import { signInUserQuery, sessionQuery } from "../../../Queries/userQueries.js";


export default async function signInUser(req,res){

  const {email, password} = req.body;

  const values = [email]
  console.log(email)

  const {rows: user} = await client.query(signInUserQuery, values)

  try {
    if(user && bcrypt.compareSync(password, user[0].password)) {
      const session = uuid();

      const valueSession = [user[0].id, session]
      
      try {
        await client.query(sessionQuery, valueSession)

        res.status(200).send(session)
      } catch (error) {
        console.error(error)
        res.sendStatus(500)
      }
    }else {
      return res.sendStatus(401)
    }

  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }

}