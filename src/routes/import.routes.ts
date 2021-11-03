import { Router } from "express";
import multer from "multer";

const importRoutes = Router();
const upload = multer({ dest: "./tmp" });

// o "file" abaixo é o campo que passamos na nossa request
importRoutes.post("/", upload.single("file"), (req, res) => {
  const { file } = req;
  console.log(file);
  res.status(200).send();
});

export { importRoutes };
