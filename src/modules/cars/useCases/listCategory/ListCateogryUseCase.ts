import { Category } from "../../../../entitie/Category";
import { CategoryRepository } from "../../repositories/CategoryRepository";

class ListCategoryUseCase {
  private repository: CategoryRepository;

  constructor(repository: CategoryRepository) {
    this.repository = repository;
  }

  execute(): Promise<Category[]> {
    return this.repository.list();
  }
}

export { ListCategoryUseCase };
