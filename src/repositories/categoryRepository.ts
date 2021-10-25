import { Category } from "../model/Category";

// DTO = Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
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
