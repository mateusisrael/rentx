import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ListCategoryUseCase } from "./ListCateogryUseCase";

const repository = new CategoryRepository();
const useCase = new ListCategoryUseCase(repository);

export { useCase };
