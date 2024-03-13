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