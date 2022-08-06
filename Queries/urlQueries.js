export const checkTokenQuery = 'SELECT*FROM sessions WHERE session=$1;'

export const postUrlQuery = 'INSERT INTO "shortUrl" ("userId", url, "shortUrl") VALUES ($1, $2, $3);'

export const getByIdQuery = 'SELECT*FROM "shortUrl" WHERE id=$1;'

export const redirectByIdQuery = 'SELECT*FROM "shortUrl" WHERE "shortUrl"=$1'

export  const updateCountQuery = 'UPDATE "shortUrl" SET "visitCount"=$2  WHERE id=$1;'