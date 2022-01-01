import { getRepository, Repository } from "typeorm";

import { Category } from "../entities/Category";
import {
  ICreateCategoryDTO,
  ICategoryRepository,
} from "./implementations/ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    try {
      const category = this.repository.create({ name, description });
      await this.repository.save(category);
    } catch (error) {
      const errorStatus = 500;
      throw errorStatus;
    }
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoryRepository };
