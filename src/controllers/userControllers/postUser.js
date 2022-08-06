import client from "../../../database/database.js";
import { postUserQuery } from "../../../Queries/userQueries.js";
import bcrypt from 'bcrypt';


export default async function postUser(req, res){

  const {name, email, password} = req.body;
  console.log(req.body)

  const encrypted_password = bcrypt.hashSync(password, 10)

  try{
    
    const values = [name, email, encrypted_password]

    await client.query(postUserQuery, values)
    res.sendStatus(201)

  }catch(err){
    console.error(err)
  }

}