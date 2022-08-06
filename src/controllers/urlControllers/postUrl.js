import client from "../../../database/database.js";
import { postUrlQuery } from "../../../Queries/urlQueries.js";
import { nanoid } from 'nanoid'
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config();


export default async function postUrl(req,res){

  const userId = req.userId
  const {url} = req.body;
  const shortUrl = nanoid(10);

  const values = [userId, url, shortUrl]

  try {
    await client.query(postUrlQuery, values)
    res.send({shortUrl}).status(201)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }

}