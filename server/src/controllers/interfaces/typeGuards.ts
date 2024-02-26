import { USER_STORY, PRIVACY_REQUIREMENT } from "../../constants/constants";

import { isString } from "../../interfaces/typeGuards";
import { DocumentItems } from "../../interfaces/types";

function isValidInspectionName(inspectionName: string) {
  if (!isString(inspectionName)) {
    throw new Error("O nome da inspeção não é válido");
  }

  return inspectionName;
}

function isValidInspectionResponsible(inspectionResponsible: string) {
  if (!isString(inspectionResponsible)) {
    throw new Error("O responsável da inspeção não é valido!");
  }

  return inspectionResponsible;
}

function isValidInspectionType(inspectionType: string) {
  if (inspectionType !== PRIVACY_REQUIREMENT && inspectionType !== USER_STORY) {
    throw new Error("O tipo de inspeção não é válido!");
  }

  return inspectionType;
}

function isValidInspectionEmail(email: string) {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    throw new Error("O email fornecido não é válido!");
  }

  return email;
}

function isValidInspectionDocument(obj: any): obj is DocumentItems {
  return (
    obj &&
    typeof obj.fileName === "string" &&
    typeof obj.fileUrl === "string" &&
    typeof obj.fileType === "string"
  );
}

export {
  isValidInspectionName,
  isValidInspectionResponsible,
  isValidInspectionType,
  isValidInspectionEmail,
  isValidInspectionDocument,
};
