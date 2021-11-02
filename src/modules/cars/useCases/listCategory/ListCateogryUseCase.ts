import { Category } from "../../../../model/Category";
import { CategoryRepository } from "../../repositories/CategoryRepository";

class ListCategoryUseCase {
  private repository: CategoryRepository;

  constructor(repository: CategoryRepository) {
    this.repository = repository;
  }

  execute() {
    return this.repository.list();
  }
}

export { ListCategoryUseCase };
