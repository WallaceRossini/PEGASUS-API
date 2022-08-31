import { PrismaClient, User } from '@prisma/client'
import { prismaClient } from '../database/prismaClient'
import { AppError } from '../error/AppError'
import { IRegister, ISignIn } from '../interface/IAuth'
import { compare, hash } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import config from '../config'
import { IUser } from '../interface/IUser'
import { SignInDTO } from '../dto/UserDTO'

const { TOKEN } = config
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

  async sign_in({ email, password }: ISignIn) {


    const existUser = await this.prisma.user.findUnique({
      where: {
        email
      }
    })

    if (!existUser) {
      throw new AppError('Invalid email and/or password')
    }

    const password_match = await compare(password, existUser.password);

    if (!password_match)
      return new AppError('Invalid email and/or password');

    const token = sign({ ...existUser }, TOKEN)

    let user = new SignInDTO({ ...existUser, token })
    
    return user
  }

  async register({ full_name, email, password }: IRegister) {

    password = await hash(password, 10)

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
