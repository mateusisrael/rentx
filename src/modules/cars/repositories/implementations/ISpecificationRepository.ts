import { Specification } from "../../../../entitie/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

// Seguindo o LSP criamos a interface para implementa-lá nas classes de repositório
interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  list(): Specification[] | [];
  // findByName(): Specification | undefined;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
