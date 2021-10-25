import { CategoryRepository } from "../repositories/categoryRepository";

interface IRegister {
  name: string;
  description: string;
}

class CreateCategoryService {
  private categories: CategoryRepository;

  constructor(categories: CategoryRepository) {
    this.categories = categories;
  }

  execute({ name, description }: IRegister): void | Error {
    // Inversão de depêndecias retiramos o category repository de dentro
    // da nossa classe create category service e colocamos na
    // entidade que "chama" esta classe, de forma que, ao instânciarmos
    // ela, passamos o categories no constructor.
    // const categories = new CategoryRepository();
    const categoryAlreadyExists = this.categories.findByName(name);
    if (categoryAlreadyExists) {
      const error = "Category already exists";
      throw error;
    }
    this.categories.create({ name, description });
  }
}

export { CreateCategoryService };