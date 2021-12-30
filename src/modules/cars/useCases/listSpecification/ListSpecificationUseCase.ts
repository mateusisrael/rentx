import { Specification } from "../../../../entitie/Specification";
import { ISpecificationRepository } from "../../repositories/implementations/ISpecificationRepository";

class ListSpecificationUseCase {
  private repository: ISpecificationRepository;

  constructor(repository: ISpecificationRepository) {
    this.repository = repository;
  }

  async execute(): Promise<Specification[]> {
    const specifications = await this.repository.list();
    return specifications;
  }
}

export { ListSpecificationUseCase };
