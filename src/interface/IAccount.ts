import { AccountColorEnum } from "../enum/AccountColorEnum"
import { AccountTypeEnum } from "../enum/AccountTypeEnum"

export interface IAccount {
  id: string
  current_balance: number
  financial_institution: string
  description: string
  account_type: AccountTypeEnum
  account_color: AccountColorEnum
  user_id: string
}

export interface IAccountCreate  {
  current_balance: number
  financial_institution: string
  description: string
  account_type: AccountTypeEnum
  account_color: AccountColorEnum
  user_id: string
}