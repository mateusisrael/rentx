import { CategoryRepository } from "../../repositories/CategoryRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const repository = CategoryRepository.getInstance();
const useCase = new CreateCategoryUseCase(repository);

export { useCase };
