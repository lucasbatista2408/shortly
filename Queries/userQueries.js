export const postUserQuery = "INSERT INTO users (name, email, password) VALUES ($1,$2,$3);"

export const existsUserQuery = "SELECT * FROM users WHERE email=$1;" 

export const signInUserQuery = "SELECT*FROM users WHERE email=$1"

