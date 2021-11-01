import { Category } from "../../../model/Category";

// DTO = Data Transfer Object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// Seguindo o LSP criamos a interface para implementa-lá nas calsses de repositório
interface ICategoryRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Category[];
  findByName(name: string): Category | undefined;
}

export { ICreateCategoryDTO, ICategoryRepository };
