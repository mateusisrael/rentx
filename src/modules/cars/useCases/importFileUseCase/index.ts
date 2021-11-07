import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ImportFileUseCase } from "./ImportFileUseCase";

const repository = CategoryRepository.getInstance();
const useCase = new ImportFileUseCase(repository);

export { useCase };
