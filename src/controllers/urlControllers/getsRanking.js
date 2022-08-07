import client from "../../../database/database.js";
import { rankingQuery } from "../../../Queries/urlQueries.js";


export default async function getsRanking(req,res){

  try {
    const {rows: ranking} = await client.query(rankingQuery)
    res.status(200).send(ranking)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }

}