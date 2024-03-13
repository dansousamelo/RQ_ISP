import { AS_PER, INCOMPLETE, NON_COMPILANT, NOT_APPLICABLE } from "../constants/constants"

export function translateItemSituation(itemSituation: string) {
    if(itemSituation === AS_PER) {
      return "Conforme"
    } else if(itemSituation === INCOMPLETE) {
      return "Incompleto"
    } else if(itemSituation === NON_COMPILANT) {
      return "Não conforme"
    } else if(itemSituation === NOT_APPLICABLE) {
      return "Não se aplica"
    } else {
      throw new Error ("Tipo de situação inválido")
    }
  }