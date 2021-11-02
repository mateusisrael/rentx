import { SpecificationRepository } from "../repositories/SpecificationRepository";

class CreateSpecificationService {
  repository: SpecificationRepository;

  constructor(repository: SpecificationRepository) {
    this.repository = repository;
  }

  execute({ name, description }): void {
    this.repository.create({ name, description });
  }
}

export { CreateSpecificationService };
