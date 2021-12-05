import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

const repository = SpecificationRepository.getInstance();
const useCase = new ListSpecificationUseCase(repository);

export { useCase };
