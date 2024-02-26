export function isString(value: unknown): value is string {
  return typeof value === "string" && value !== "";
}

export function isArray(value: any): value is any[] {
  return Array.isArray(value)
}

export function isArrayNotEmpty<T>(arr: T[] | undefined | null): boolean {
  return arr !== undefined && arr !== null && arr.length > 0
}

export function isMulterFilesArray(files: any): files is globalThis.Express.Multer.File[] {
  return Array.isArray(files) && files.every(file => typeof file === 'object' && 'fieldname' in file);
}