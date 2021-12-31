import { Specification } from "../../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

// Seguindo o LSP criamos a interface para implementa-lá nas classes de repositório
interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  list(): Promise<Specification[]>;
  findByName(name: string): Promise<Specification | undefined>;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
