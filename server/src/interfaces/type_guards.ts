export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isMulterFilesArray(files: any): files is globalThis.Express.Multer.File[] {
  return Array.isArray(files) && files.every(file => typeof file === 'object' && 'fieldname' in file);
}
