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

  async execute({ name, description }: IRegister): Promise<void | Error> {
    const specifictaionAlreadyExists = await this.repository.findByName(name);
    if (specifictaionAlreadyExists) {
      const error = "Specification already exists";
      throw error;
    }
    this.repository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
