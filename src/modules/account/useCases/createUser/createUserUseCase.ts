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
      throw Error("User already exists");
    }
    this.repository.create(user);
  }
}

export { CreateUserUseCase };
