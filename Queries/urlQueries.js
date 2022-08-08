export const postUrlQuery = 'INSERT INTO "shortUrl" ("userId", url, "shortUrl") VALUES ($1, $2, $3);'

export const getByIdQuery = 'SELECT*FROM "shortUrl" WHERE id=$1;'

export const redirectByIdQuery = 'SELECT*FROM "shortUrl" WHERE "shortUrl"=$1'

export  const updateCountQuery = 'UPDATE "shortUrl" SET "visitCount"="visitCount"+1 WHERE id=$1;'

export const rankingQuery = `SELECT 
users.id, 
users.name, 
CAST (COUNT("shortUrl"."shortUrl") AS INT) AS "linksCount", 
CAST (SUM("shortUrl"."visitCount") AS INT) AS "viewCount" 
FROM users JOIN "shortUrl" 
ON "shortUrl"."userId"=users.id
GROUP BY users.id
ORDER BY "viewCount" DESC
LIMIT 10;`;

export const getsByUserIdQuery = `SELECT
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