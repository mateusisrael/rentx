import { UserRepository } from "../../repositories/UserRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUseCase } from "./createUserUseCase";

export default (): CreateUserController => {
  const repository = new UserRepository();
  const useCase = new CreateUserUseCase(repository);
  const controller = new CreateUserController(useCase);

  return controller;
};
