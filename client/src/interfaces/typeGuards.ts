import { DESKTOP, MOBILE, ZERO_NUMBER } from '../constants'

export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

export function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined'
}
export function isNotUndefined(value: unknown): value is undefined {
  return typeof value !== 'undefined'
}

export function isNull(value: unknown): value is null {
  return value === null
}

export function isMobileDevice(value: unknown): value is 'mobile' {
  return value === MOBILE
}

export function isDesktopDevice(value: unknown): value is 'desktop' {
  return value === DESKTOP
}

export function isArrayNotEmpty<T>(arr: T[] | undefined | null): boolean {
  return arr !== undefined && arr !== null && arr.length > ZERO_NUMBER
}
export function isArrayEmpty<T>(arr: T[] | undefined | null): boolean {
  return arr !== undefined && arr !== null && arr.length === ZERO_NUMBER
}

export function isErrorInstance(value: unknown): value is Error {
  return value instanceof Error
}

export function hasObjectValidKeys(obj: object): boolean {
  return Object.keys(obj).length > 0
}

export function isJSXElement(element: unknown): element is JSX.Element {
  return element !== null && typeof element === 'object' && 'props' in element
}

export function isNotZeroNumber(value: unknown): value is number {
  return typeof value === 'number' && value !== 0
}
export function isZeroNumber(value: unknown): value is number {
  return typeof value === 'number' && value === 0
}

export function areNumbersEqual(
  num1: number,
  num2: number,
): num1 is typeof num2 {
  return num1 === num2
}
interface PlatformOS {
  family: string
  version: string
}

export function isAndroid(
  os: PlatformOS,
): os is { family: 'Android'; version: string } {
  return os.family === 'Android'
}

export function isIOS(
  os: PlatformOS,
): os is { family: 'iOS'; version: string } {
  return os.family === 'iOS'
}

export function isPortugueseLanguage(
  language: unknown,
): language is 'pt' | 'pt-BR' {
  return (
    typeof language === 'string' && (language === 'pt' || language === 'pt-BR')
  )
}

export function isArray(value: any): value is any[] {
  return Array.isArray(value)
}

export function isDocumetType(value: any): value is string {
  return value === 'document'
}
