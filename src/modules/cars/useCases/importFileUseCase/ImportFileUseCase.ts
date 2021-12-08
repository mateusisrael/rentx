import csv from "csv-parser";
import fs from "fs";

import { Category } from "../../../../entitie/Category";
import { CategoryRepository } from "../../repositories/CategoryRepository";
import { ICreateCategoryDTO } from "../../repositories/implementations/ICategoryRepository";

class ImportFileUseCase {
  private repository: CategoryRepository;
  constructor(repository: CategoryRepository) {
    this.repository = repository;
  }

  loadData(file: Express.Multer.File): Promise<Category[]> {
    const transformedFile = [];
    return new Promise((resolve, reject) => {
      fs.createReadStream(file.path)
        .pipe(csv())
        .on("data", (chunck) => transformedFile.push(chunck))
        .on("end", () => {
          fs.promises.unlink(file.path);
          return resolve(transformedFile);
        })
        .on("error", (err) => reject(err));
    });
  }

  private handleItem(category: ICreateCategoryDTO): void {
    const exists = this.repository.findByName(category.name);
    if (exists) return;
    this.repository.create({
      name: category.name,
      description: category.description,
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const data = await this.loadData(file);

    data.map((category) => {
      // A gambiarra abaixo é simplesmente para o eslint não reclamar da falta
      // de retorno no map.
      return this.handleItem(category);
    });
  }
}

export { ImportFileUseCase };
