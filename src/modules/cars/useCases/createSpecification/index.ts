import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export default (): CreateSpecificationController => {
  const repository = new SpecificationRepository();
  const useCase = new CreateSpecificationUseCase(repository);
  const controller = new CreateSpecificationController(useCase);

  return controller;
};
