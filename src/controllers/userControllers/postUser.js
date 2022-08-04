import client from "../../../database/database.js";
import { postUserQuery } from "../../../Queries/userQueries.js";


export default async function postUser(req, res){

  const {name, email, password} = req.body;
  console.log(req.body)

  try{
    
    const values = [name, email, password]

    await client.query(postUserQuery, values) // get categories of products
    res.sendStatus(201)

  }catch(err){
    console.error(err)
  }

}