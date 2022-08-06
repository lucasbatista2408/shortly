import client from "../../../database/database.js";
import { redirectByIdQuery, updateCountQuery } from "../../../Queries/urlQueries.js";


export default async function redirectById(req,res){

  const {shortUrl} = req.params;

  const values = [shortUrl]

  try {
    const {rows: data, rowCount} = await client.query(redirectByIdQuery, values);

    if(rowCount === 0) return res.sendStatus(404)
  
    const {url, id, visitCount} = data[0];
    
    const updateValues = [id]

    await client.query(updateCountQuery, updateValues)
  
    res.redirect(url)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }

}