import dotenv from 'dotenv'

dotenv.config()

const {
  PORT,
  SECRET_JWT,
  EXPIRES_JWT
} = process.env

const config = {
  PORT: Number(PORT),
  SECRET_JWT: String(SECRET_JWT),
  EXPIRES_JWT: String(EXPIRES_JWT)
}

export default config
