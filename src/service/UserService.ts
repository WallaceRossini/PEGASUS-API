import { IRegister } from "../interface/IAuth";
import { UserRepository } from "../repository/UserRepository";

export class UserService {
  private userRepository: UserRepository

  constructor() { 
    this.userRepository = new UserRepository()
  }

  async register({ full_name, email, password }: IRegister) {

    const user = await this.userRepository.register({ full_name, email, password })

    return user
  }

}