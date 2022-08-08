import client from "../../../database/database.js";
import { getByIdQuery } from "../../../Queries/urlQueries.js";


export default async function getById(req,res){

  const {id} = parseInt(req.params);
  console.log(typeof id)

  const values = [id]

  if(typeof id !== 'number') return res.sendStatus(400)

  if(!id) return res.sendStatus(400)

  try {
    const {rows: data, rowCount} = await client.query(getByIdQuery, values)

    if(rowCount === 0){
      return res.sendStatus(404)
    }

    const {id, shortUrl, url} = data[0];

    const response = {
      id,
      shortUrl,
      url
    }

    res.send(response).status(200)

  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }

}