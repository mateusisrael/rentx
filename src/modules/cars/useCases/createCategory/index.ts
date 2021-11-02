import { CategoryRepository } from "../../repositories/CategoryRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const repository = new CategoryRepository();
const useCase = new CreateCategoryUseCase(repository);

export { useCase };
