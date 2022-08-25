import dotenv from 'dotenv'

dotenv.config()

const {
  PORT,
  TOKEN
} = process.env

const config = {
  PORT: Number(PORT),
  TOKEN: String(TOKEN)
}

export default config
