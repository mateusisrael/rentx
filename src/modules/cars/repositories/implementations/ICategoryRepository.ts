import { Category } from "../../../../entitie/Category";

// DTO = Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// Seguindo o LSP criamos a interface para implementa-lá nas classes de repositório
interface ICategoryRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  list(): Promise<Category[]>;
  findByName(name: string): Promise<Category | undefined>;
}

export { ICreateCategoryDTO, ICategoryRepository };
