import {
  IUserDTO,
  IUserRepository,
} from "../../repositories/implementations/IUserRepository";

class CreateUserUseCase {
  constructor(public repository: IUserRepository) {
    this.repository = repository;
  }

  async execute(user: IUserDTO): Promise<void | Error> {
    const userExist = await this.repository.findByName(user.username);
    if (userExist) {
      const error = "User already exists";
      throw error;
    } else {
      this.repository.create(user);
    }
  }
}

export { CreateUserUseCase };
