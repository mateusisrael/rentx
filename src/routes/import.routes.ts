import { Router } from "express";
import multer from "multer";

import importFileController from "../modules/cars/useCases/importFileUseCase";

const importRoutes = Router();
const upload = multer({ dest: "./tmp" });

// o "file" abaixo é o campo que passamos na nossa request
importRoutes.post("/", upload.single("file"), (req, res) => {
  importFileController().handle(req, res);
});

export { importRoutes };
