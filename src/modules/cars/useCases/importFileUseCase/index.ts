import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ImportFileController } from "./ImportFileController";
import { ImportFileUseCase } from "./ImportFileUseCase";

export default (): ImportFileController => {
  const repository = new CategoryRepository();
  const useCase = new ImportFileUseCase(repository);
  const controller = new ImportFileController(useCase);
  return controller;
};
