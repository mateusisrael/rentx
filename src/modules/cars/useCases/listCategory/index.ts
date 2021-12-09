import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCateogryUseCase";

export default (): ListCategoryController => {
  const repository = new CategoryRepository();
  const useCase = new ListCategoryUseCase(repository);
  const controller = new ListCategoryController(useCase);
  return controller;
};
