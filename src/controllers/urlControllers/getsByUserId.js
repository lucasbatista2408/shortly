import client from "../../../database/database.js";
import { getsByUserIdQuery } from "../../../Queries/urlQueries.js";


export default async function getsByUserId(req,res){

  const userId = req.userId;
  console.log(userId)

  const values = [userId]
  console.log(values)

  try {
    const {rows: data} = await client.query(getsByUserIdQuery, values)

    const new_list = [] //removes json_build_object
      
    for(const v of data){
      new_list.push(v.json_build_object)
    }
      
    const final_data = new_list[0] // sets data out the array
    res.send(final_data)
    
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }

}