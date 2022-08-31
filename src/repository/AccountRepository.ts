import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../database/prismaClient";
import { IAccountCreate } from "../interface/IAccount";

export class AccountRepository {

  private prisma: PrismaClient

  constructor() {
    this.prisma = prismaClient
  }

  async index() {

  }

  async create({ current_balance, financial_institution, account_color, account_type, description, user_id }: IAccountCreate) {

    const account = await this.prisma.account.create({
      data: {
        current_balance,
        financial_institution,
        description,
        account_type,
        account_color,
        user_id,
      }
    })

    return account
  }
}