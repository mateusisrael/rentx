import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ListCategoryUseCase } from "./ListCateogryUseCase";

const repository = CategoryRepository.getInstance();
const useCase = new ListCategoryUseCase(repository);

export { useCase };
