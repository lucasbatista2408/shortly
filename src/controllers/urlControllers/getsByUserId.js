import client from "../../../database/database.js";


export default async function getsByUserId(req,res){

  
  const userId = req.userId;
  console.log(userId)

  const values = [userId]
  console.log(values)

  const query = `SELECT
  json_build_object(
  'id', users.id, 
  'name',users.name, 
  'visitCount',(SELECT SUM("visitCount") 
 FROM "shortUrl" 
 JOIN users u ON u.id = "shortUrl"."userId"
 GROUP BY "shortUrl"."userId", u.id) ,
  'shortenedUrls', json_agg(   
   json_build_object(  
   'id',"shortUrl".id,
   'shortUrl',"shortUrl"."shortUrl",
   'url', "shortUrl".url,
   'visitCount', "shortUrl"."visitCount"
  )
  )
 )
 FROM "shortUrl"
 JOIN users  on "shortUrl"."userId" = users.id
 WHERE users.id = $1
 GROUP BY users.id`


    const {rows: teste} = await client.query(query, values)

    const new_list = []
    
    for(const v of teste){
      new_list.push(v.json_build_object)
    }
    res.send(new_list)

}