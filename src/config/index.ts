import dotenv from 'dotenv'

dotenv.config()

const {
  PORT
} = process.env

const config = {
  PORT: Number(PORT)
}

export default config
