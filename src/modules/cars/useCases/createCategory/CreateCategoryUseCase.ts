import { ICategoryRepository } from "../../repositories/implementations/ICategoryRepository";

interface IRegister {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  private categories: ICategoryRepository;

  constructor(categories: ICategoryRepository) {
    this.categories = categories;
  }

  async execute({ name, description }: IRegister): Promise<void | Error> {
    // Inversão de depêndecias retiramos o category repository de dentro
    // da nossa classe create category service e colocamos na
    // entidade que "chama" esta classe, de forma que, ao instânciarmos
    // ela, passamos o categories no constructor.
    // const categories = new CategoryRepository();
    const categoryAlreadyExists = await this.categories.findByName(name);
    if (categoryAlreadyExists) {
      const error = "Category already exists";
      throw error;
    }
    this.categories.create({ name, description });
  }
}

export { CreateCategoryUseCase };
