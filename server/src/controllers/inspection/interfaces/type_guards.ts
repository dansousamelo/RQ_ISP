import { DocumentItems } from "../../../interfaces/types";

function isValidInspectionType(inspection_type: string) {
  if (inspection_type !== "privacyRequirement" && inspection_type !== "userStory") {
    throw new Error("O tipo de inspeção não é válido!");
  }

  return inspection_type;
}

function isValidInspectionEmail(email: string) {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!emailRegex.test(email)) {
        throw new Error("O email fornecido não é válido!")
    }

    return email;
}

function isValidInspectionDocument(obj: any): obj is DocumentItems {
  return (
      obj &&
      typeof obj.fileName === 'string' &&
      typeof obj.fileUrl === 'string' &&
      typeof obj.fileType === 'string'
  );
}

export { isValidInspectionType, isValidInspectionEmail, isValidInspectionDocument };