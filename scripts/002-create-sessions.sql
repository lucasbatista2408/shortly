CREATE TABLE "sessions"(
  "id" BIGSERIAL PRIMARY KEY,
  "userId" INTEGER NOT NULL REFERENCES "users"("id"),
  "session" TEXT NOT NULL
)