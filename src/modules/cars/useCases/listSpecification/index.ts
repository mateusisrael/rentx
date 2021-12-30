import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

export default (): ListSpecificationController => {
  const repository = new SpecificationRepository();
  const useCase = new ListSpecificationUseCase(repository);
  const controller = new ListSpecificationController(useCase);
  return controller;
};
