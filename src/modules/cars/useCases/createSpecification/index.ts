import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const repository = SpecificationRepository.getInstance();
const useCase = new CreateSpecificationUseCase(repository);

export { useCase };
