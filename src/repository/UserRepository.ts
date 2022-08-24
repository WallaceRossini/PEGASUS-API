import { PrismaClient, User } from '@prisma/client'
import { prismaClient } from '../database/prismaClient'
import { AppError } from '../error/AppError'
import { IRegister } from '../interface/IAuth'

export class UserRepository {
  private prisma: PrismaClient

  constructor() { 
    this.prisma = prismaClient
  }

  async index() {

  }

  async show(email: string): Promise<User | AppError> {

    const existUser = await this.prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!existUser) {
      throw new AppError('Not found user')
    }

    return existUser

  }

  async register({ full_name, email, password }: IRegister) {
    const user = await this.prisma.user.create({
      data: {
        full_name,
        email,
        password
      }
    })

    return user
  }
}
