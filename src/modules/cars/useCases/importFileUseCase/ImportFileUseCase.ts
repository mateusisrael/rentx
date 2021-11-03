class ImportFileUseCase {
  execute(file: Express.Multer.File): void {
    console.log(file);
  }
}

export { ImportFileUseCase };
