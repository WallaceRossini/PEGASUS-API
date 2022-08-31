-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('CHECKING_ACCOUNT', 'MONEY', 'SAVINGS', 'INVESTMENTS', 'OTHERS');

-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('HOUSE', 'CELL', 'OVERDRAFT', 'EDUCATION', 'ELECTRONICS', 'INTERNET', 'LEISURE', 'OTHERS', 'RESTAURANT', 'HEALTH', 'SERVICES', 'SUPERMARKET', 'TRANSPORT', 'CLOTHING', 'TRAVEL', 'CREDIT', 'INVESTMENT', 'AWARD', 'GIFT', 'WAGE');

-- CreateEnum
CREATE TYPE "Coin" AS ENUM ('BRL', 'USD');

-- CreateEnum
CREATE TYPE "Flag" AS ENUM ('VISA', 'MASTERCARD', 'ELO', 'OTHERS');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHERS');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('PT_BR', 'EN_US');

-- CreateEnum
CREATE TYPE "Theme" AS ENUM ('DARK', 'LIGHT');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('EXPENSE', 'INCOME');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "current_balance" DECIMAL(7,2) NOT NULL,
    "financial_institution" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "account_type" "AccountType" NOT NULL DEFAULT 'CHECKING_ACCOUNT',
    "account_color" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreditCard" (
    "id" TEXT NOT NULL,
    "limit" DECIMAL(7,2) NOT NULL,
    "flag" "Flag" NOT NULL,
    "accountId" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "closing_day" TIMESTAMP(3) NOT NULL,
    "expiration_day" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "CreditCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "CategoryType" NOT NULL DEFAULT 'CREDIT',
    "credit_card_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "amount" DECIMAL(7,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "CategoryType" NOT NULL,
    "account_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "was_paid" BOOLEAN NOT NULL DEFAULT false,
    "amount" DECIMAL(7,2) NOT NULL,
    "transaction_type" "TransactionType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,
    "photo" TEXT,
    "nickname" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT,
    "zip" INTEGER,
    "state" TEXT,
    "city" TEXT,
    "birthday" TIMESTAMP(3),
    "gender" "Gender" NOT NULL DEFAULT 'OTHERS',
    "nationality" TEXT,
    "cpf" INTEGER,
    "language" "Language" NOT NULL DEFAULT 'PT_BR',
    "coin" "Coin" NOT NULL DEFAULT 'BRL',
    "theme" "Theme" NOT NULL DEFAULT 'DARK',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditCard" ADD CONSTRAINT "CreditCard_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditCard" ADD CONSTRAINT "CreditCard_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_credit_card_id_fkey" FOREIGN KEY ("credit_card_id") REFERENCES "CreditCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
