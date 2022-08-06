CREATE TABLE "shortUrl"(
  "id" BIGSERIAL PRIMARY KEY,
  "userId" INTEGER REFERENCES "users"("id"),
  "url" TEXT NOT NULL,
  "shortUrl" TEXT NOT NULL,
  "visitCount" INTEGER
);