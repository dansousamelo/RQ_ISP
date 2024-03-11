import {
  CONCLUDED,
  INITIATED,
  ONE_HUNDRED,
  UNINITIATED,
  ZERO,
} from "../constants/constants";
import { InspectionStatus } from "../interfaces/types";

export function handleInspectionStatus(status: string): InspectionStatus {
  const parsedStatus = parseInt(status);
  if (parsedStatus === ZERO) {
    return UNINITIATED;
  } else if (parsedStatus === ONE_HUNDRED) {
    return CONCLUDED;
  } else if(parsedStatus > ZERO && parsedStatus < ONE_HUNDRED){
    return INITIATED;
  }
  else{
    throw new Error("Status de inspeção inválido")
  }
}
