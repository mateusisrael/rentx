import { CategoryRepository } from "../../repositories/CategoryRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {
  const repository = new CategoryRepository();
  const useCase = new CreateCategoryUseCase(repository);
  const controller = new CreateCategoryController(useCase);

  return controller;
};
