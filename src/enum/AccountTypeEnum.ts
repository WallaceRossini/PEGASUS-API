export enum AccountTypeEnum {
  CHECKING_ACCOUNT="CHECKING_ACCOUNT",
  MONEY="MONEY",
  SAVINGS="SAVINGS",
  INVESTMENTS="INVESTMENTS",
  OTHERS="OTHERS"
}

export function getAccountTyle(value: string) {

  const indexOfS = Object.values(AccountTypeEnum).indexOf(value as unknown as AccountTypeEnum);


  const key = Object.keys(AccountTypeEnum)[indexOfS];

  return key;
}