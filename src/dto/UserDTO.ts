import { IUser } from "../interface/IUser"

interface Props {
  id: string
  full_name: string
  email: string
  language: string
  coin: string
  theme: string
  token: string
}

export class SignInDTO {
  id: string
  full_name: string
  email: string
  language: string
  coin: string
  theme: string
  token: string


  constructor({ id, full_name, email, language, coin, theme, token }: Props){
    this.id = id
    this.full_name = full_name
    this.email = email
    this.language = language
    this.coin = coin
    this.theme = theme 
    this.token = `Bearer ${token}`
  }

}

