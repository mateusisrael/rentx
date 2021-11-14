import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const repository = new SpecificationRepository();
const useCase = new CreateSpecificationUseCase(repository);

export { useCase };
