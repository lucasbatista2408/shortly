export const postUrlQuery = 'INSERT INTO "shortUrl" ("userId", url, "shortUrl") VALUES ($1, $2, $3);'

export const getByIdQuery = 'SELECT*FROM "shortUrl" WHERE id=$1;'

export const redirectByIdQuery = 'SELECT*FROM "shortUrl" WHERE "shortUrl"=$1'

export  const updateCountQuery = 'UPDATE "shortUrl" SET "visitCount"="visitCount"+1 WHERE id=$1;'
