import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import { AppError } from './error/AppError'
import { router } from './router'

const app = express()

app.use(express.json())

app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message })
  }
  return response.status(500).json({
    message: `Internal server error ${err.message}`
  })
})

export { app }
