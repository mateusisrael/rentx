import { Router } from "express";
import multer from "multer";

import { useCase } from "../modules/cars/useCases/importFileUseCase";
import { ImportFileController } from "../modules/cars/useCases/importFileUseCase/ImportFileController";

const importRoutes = Router();
const upload = multer({ dest: "./tmp" });

// o "file" abaixo é o campo que passamos na nossa request
importRoutes.post("/", upload.single("file"), (req, res) => {
  new ImportFileController(useCase).handle(req, res);
});

export { importRoutes };
