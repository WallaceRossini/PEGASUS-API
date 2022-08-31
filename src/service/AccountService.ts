import { AccountRepository } from '../repository/AccountRepository'
import { IAccountCreate } from '../interface/IAccount'

export class AccountService {
  private accountRepository: AccountRepository

  constructor() {
    this.accountRepository = new AccountRepository()
  }

  async create(account: IAccountCreate) {

    const result = await this.accountRepository.create(account)

    return result
  }

}