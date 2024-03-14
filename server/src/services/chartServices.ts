import { CONCLUDED, GENERAL } from "../constants/constants";
import { prisma } from "../db/prismaClient";

function translateCategory(category: string): string {
    const translations: Record<string, string> = {
      "accountabilityAndLegalReporting": "Responsabilização e prestação de contas",
      "needs": "Necessidades",
      "purpose": "Finalidade",
      "openAcess": "Livre acesso",
      "dataQuality": "Qualidade de Dados",
      "transparency": "Transparência",
      "adequacy": "Adequação",
      "security": "Segurança",
      "prevention": "Prevenção",
      "nonDiscrimination": "Não Discriminação"
    };
  
    return translations[category] || category;
  }

export async function findItemsCategoriesByInspectionId(inspectionId: string) {
    try {
      const items = await prisma.item.findMany({
        where: {
          inspectionId: inspectionId
        }
      })
  
      if(!items) {
        throw new Error ("Não foi possível encontrar itens com este id de inspeção")
      }
  
      const translatedCategories = items.reduce((acc: { [key: string]: string }, item) => {
        if (item.category !== null && !(item.category in acc)) {
          acc[item.category] = translateCategory(item.category);
        }
        return acc;
      }, {});
      
      // category to display all of them
      translatedCategories['general'] = "Geral"

      const categories = Object.keys(translatedCategories).map((key) => ({
        value: key,
        label: translatedCategories[key]
      }));
      
      return categories;
    } catch (error) {
      throw error
    }
}

export async function findItemsSituationStatisticsByInspectionId(inspectionId: string, category: string) {
  try {
    const inspection = await prisma.inspection.findUnique({
      where: {
          id: inspectionId,
      },
      include: {
          item: {
              where: category !== 'general' ? { category } : undefined,
          },
      },
  });

  if (!inspection) {
      throw new Error("Não foi possível encontrar uma inspeção com este id!");
  }

  if(inspection.status !== CONCLUDED) {
    throw new Error("Essa inspeção não está concluída, conclua para que seja possível gerar as estatísticas!")
  }

  const situationOptions = [
      { value: 'as_per', label: 'Conforme' },
      { value: 'incomplete', label: 'Incompleto' },
      { value: 'non_compilant', label: 'Não conforme' },
      { value: 'not_applicable', label: 'Não se aplica' },
  ];

  const initialStatistics = Object.fromEntries(situationOptions.map(option => [option.value, 0]));

  const allSituations = inspection.item.flatMap(item => item.situation);

  const statistics = allSituations.reduce((acc, situation) => {
      if (situation && situation in acc) {
          acc[situation]++;
      }
      return acc;
  }, { ...initialStatistics });

  const result = situationOptions.map(option => ({
      ...option,
      value: statistics[option.value],
  }));

  return result;
  } catch (error) {
    throw error
  }
}