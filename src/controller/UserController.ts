import { Request, Response } from 'express'
import { IRegister } from '../interface/IAuth'
import { UserService } from '../service/UserService'

const userService = new UserService()

export class UserController {

  async register(request: Request, response: Response) {
    const body: IRegister = request.body

    const user = await userService.register(body)

    return response.status(201).json(user)
  }
}
