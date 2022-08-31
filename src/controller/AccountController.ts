import { AccountService } from "../service/AccountService";
import { Request, Response } from 'express'
import { IAccountCreate } from "../interface/IAccount";
import { AccountColorEnum, getKeyByValue } from "../enum/AccountColorEnum";

const accountService = new AccountService()

export class AccountController {

  async create(request: Request, response: Response) {
    const body: IAccountCreate = request.body
    const user_id = request.user_id

    const account = await accountService.create({ ...body, user_id })

    return response.status(200).json(account)
  }

}