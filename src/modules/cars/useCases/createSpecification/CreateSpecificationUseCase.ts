import { ISpecificationRepository } from "../../repositories/implementations/ISpecificationRepository";

interface IRegister {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  private repository: ISpecificationRepository;
  constructor(repository: ISpecificationRepository) {
    this.repository = repository;
  }

  execute({ name, description }: IRegister): void {
    this.repository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
