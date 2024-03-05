import { ZERO } from "../constants/constants";

export function isString(value: unknown): value is string {
  return typeof value === "string" && value !== "";
}

export function isNull(value: unknown): value is null {
  return typeof value === null;
}

export function isNotUndefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

export function isArray(value: any): value is any[] {
  return Array.isArray(value);
}

export function isArrayNotEmpty<T>(arr: T[] | undefined | null): boolean {
  return arr !== undefined && arr !== null && arr.length > ZERO;
}

export function isArrayEmpty<T>(arr: T[] | undefined | null): boolean {
  return arr !== undefined && arr !== null && arr.length === ZERO;
}

export function isMulterFilesArray(
  files: any
): files is globalThis.Express.Multer.File[] {
  return (
    Array.isArray(files) &&
    files.every((file) => typeof file === "object" && "fieldname" in file)
  );
}
