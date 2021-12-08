import { Specification } from "../../../../entitie/Specification";
import { ISpecificationRepository } from "../../repositories/implementations/ISpecificationRepository";

class ListSpecificationUseCase {
  private repository: ISpecificationRepository;

  constructor(repository: ISpecificationRepository) {
    this.repository = repository;
  }

  execute(): Specification[] {
    return this.repository.list();
  }
}

export { ListSpecificationUseCase };
