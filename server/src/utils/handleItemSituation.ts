import { AS_PER, INCOMPLETE, NON_COMPILANT, NOT_APPLICABLE } from "../constants/constants";

export function translateItemSituation(situation: string) {
    if(situation === AS_PER) {
        return "Conforme"
    } else if (situation === INCOMPLETE) {
        return "Imcompleto"
    } else if (situation === NON_COMPILANT) {
        return "Não conforme"
    } else if (situation === NOT_APPLICABLE) {
        return "Não se aplica"
    } else {
        throw new Error("Situação de item inválida!")
    }
}