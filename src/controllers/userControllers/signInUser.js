import client from "../../../database/database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { signInUserQuery } from "../../../Queries/userQueries.js";

dotenv.config();


export default async function signInUser(req,res){

  const {email, password} = req.body;

  const values = [email]
  console.log(email)

  const {rows: user} = await client.query(signInUserQuery, values)

  try {
    if(user && bcrypt.compareSync(password, user[0].password)) {

      const access_key = process.env.ACCESS_TOKEN_KEY

      const token = jwt.sign(user[0].id, access_key)

      res.status(200).send(token)
    }else {
      return res.sendStatus(401)
    }

  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }

}