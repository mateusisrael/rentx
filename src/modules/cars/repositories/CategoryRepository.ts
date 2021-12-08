import { Category } from "../../../entitie/Category";
import {
  ICreateCategoryDTO,
  ICategoryRepository,
} from "./implementations/ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
  private categories: Category[];

  // SINGLETON PATTERN
  private static INSTANCE: CategoryRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }
    return CategoryRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    return this.categories.find((currentCategory) => {
      return currentCategory.name === name;
    });
  }
}

export { CategoryRepository };
