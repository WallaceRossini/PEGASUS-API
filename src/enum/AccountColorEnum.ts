export enum AccountColorEnum {
  NUBANK = '#612F74',
  BRADESCO = "#CC092F",
  NEXT = "#00ff5f",
  NEON = "#00a5f0",
  ITAU = "#EC7000",
  INTER = "#FF7A00",
  MERCADO_PAGO = "#009ee3"
}

export function getKeyByValue(value: string) {

  const indexOfS = Object.values(AccountColorEnum).indexOf(value as unknown as AccountColorEnum);


  const key = Object.keys(AccountColorEnum)[indexOfS];

  return String(key);
}

