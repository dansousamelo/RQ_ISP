import { CONCLUDED } from "../constants/constants";
import { prisma } from "../db/prismaClient";
import { Item } from "../interfaces/types";
import { formatDate } from "../utils/formatDatetime";
import { translateCategory } from "../utils/handleItemCategory";

export async function findItemsCategoriesByInspectionId(inspectionId: string) {
  try {
    const items = await prisma.item.findMany({
        where: {
            inspectionId: inspectionId
        }
    });

    if (!items) {
        throw new Error("Não foi possível encontrar itens com este id de inspeção");
    }

    const translatedCategories = items.reduce((acc: { [key: string]: string }, item) => {
        if (item.category !== null && !(item.category in acc)) {
            acc[item.category] = translateCategory(item.category);
        }
        return acc;
    }, {});

    translatedCategories['general'] = "Geral";

    const categories = Object.keys(translatedCategories)
        .map((key) => ({
            value: key,
            label: translatedCategories[key]
        }))
        .sort((a, b) => {
            if (a.value === 'general') return -1;
            return a.label.localeCompare(b.label);
        });

    return categories;
  } catch (error) {
      throw error;
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

export async function findInspectionStatisticsAndAttributesByInspectionId(inspectionId: string) {
    try {
        const inspection = await prisma.inspection.findUnique({
            where: {
                id: inspectionId
            },
            include: {
                item: true
            }
        });

        if (!inspection) {
            throw new Error("Não foi possível encontrar uma inspeção com este id!");
        }

        if (!inspection.finishedAt) {
            throw new Error("Essa inspeção não está concluída, conclua para que seja possível gerar as estatísticas!");
        }

        const inspectionAttributes = {
            id: inspection.id,
            name: inspection.name,
            resposible: inspection.responsible,
            responsibleEmail: inspection.responsibleEmail,
            participants: inspection.participants,
            recordingUrl: inspection.recordingUrl,
            createdAt: formatDate(inspection.createdAt),
            finishedAt: formatDate(inspection.finishedAt),
            type: inspection.type,
            status: inspection.status
        };

        const situationOptions = [
            { value: 'as_per', label: 'Conforme' },
            { value: 'incomplete', label: 'Incompleto' },
            { value: 'non_compilant', label: 'Não conforme' },
            { value: 'not_applicable', label: 'Não se aplica' },
        ];

        const labels = situationOptions.map(option => option.value);
        const labelsTranslated = situationOptions.map(option => option.label)

        let categories: any[] = [];

        if (inspection.item.length > 0) {
            const categoryMap = new Map<string, number[]>();

            inspection.item.forEach((item: any) => {
                if (!item.situation) return;

                const values = Array(labels.length).fill(0);

                item.situation.split(',').forEach((situation: string) => {
                    const index = labels.findIndex(label => label === situation.trim());
                    if (index !== -1) {
                        values[index]++;
                    }
                });

                const categoryName = item.category || "Geral";

                if (!categoryMap.has(categoryName)) {
                    categoryMap.set(categoryName, values);
                } else {
                    const existingValues = categoryMap.get(categoryName);
                    if (existingValues) {
                        existingValues.forEach((value, index) => {
                            existingValues[index] += values[index];
                        });
                        categoryMap.set(categoryName, existingValues);
                    }
                }
            });

            const geralValues = Array(labels.length).fill(0);
            categoryMap.forEach((values: number[]) => {
                values.forEach((value, index) => {
                    geralValues[index] += value;
                });
            });
            categories.push({ name: "Geral", values: geralValues });

            categories = categories.concat(Array.from(categoryMap.entries()).map(([name, values]) => ({
                name,
                values
            })));
        } else {
            const values = Array(labels.length).fill(0);
            categories.push({ name: "Geral", values });
        }

        categories = categories.map(category => ({
            ...category,
            name: translateCategory(category.name)
        }));

        return { inspectionAttributes, labels: labelsTranslated, categories };
    } catch (error) {
        throw error;
    }
}