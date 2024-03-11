import { prisma } from "../db/prismaClient";

import { inspectionTemplates } from "./populateInspectionItemsService";

import { formatDataWithHours, formatDate } from "../utils/formatDatetime";

import { Inspection, InspectionStatus } from "../interfaces/types";
import {
  InspectionsResult,
  ItemsResult,
  DocumentResult,
  InspectionAttributesResult,
  InspectionType,
} from "./interfaces/types";
import {
  isArrayEmpty,
  isArrayNotEmpty,
  isString,
} from "../interfaces/typeGuards";
import { createOrUpdateTextTrail } from "./trailServices";
import { CONCLUDED } from "../constants/constants";
import { error } from "console";

export async function findInspectionById(
  inspectionId: string
): Promise<string | null> {
  try {
    const inspection = await prisma.inspection.findFirst({
      where: {
        id: inspectionId,
      },
    });

    if (!inspection) {
      return null;
    }

    return inspection.id || null;
  } catch (error) {
    throw new Error("Não foi possível fazer a consulta de inspeções");
  }
}

export async function findInspectionsListByUserId(
  userId: string
): Promise<InspectionsResult[] | null> {
  try {
    const inspections: Inspection[] = await prisma.inspection.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    const inspectionsExists: InspectionsResult[] = inspections.map(
      (inspection: Inspection) => ({
        id: inspection.id,
        name: inspection.name,
        createdAt: formatDate(inspection.createdAt),
        type: inspection.type,
        status: inspection.status,
      })
    );

    return inspectionsExists || null;
  } catch (error) {
    throw new Error("Não foi possível fazer a consulta de inspeções");
  }
}

async function findTrailByItemIndex(
  inspectionId: string,
  itemIndex: string
): Promise<any | null> {
  const textTrail = await prisma.textTrail.findFirst({
    where: {
      inspectionId,
      itemIndex,
    },
  });

  if (textTrail) {
    return textTrail.text;
  }

  const documentTrails = await prisma.documentTrail.findMany({
    where: {
      inspectionId,
      itemIndex,
    },
    include: {
      documentTrailPostion: true,
    },
  });

  if (isArrayNotEmpty(documentTrails)) {
    return documentTrails.map((documentTrail: any) => ({
      id: documentTrail.id,
      text: documentTrail.text,
      pageNumber: documentTrail.documentTrailPostion.pageNumber,
    }));
  }

  return null;
}

export async function findInspectionItemsByInspectionId(
  inspectionId: string
): Promise<ItemsResult[] | null> {
  try {
    const inspection = await prisma.inspection.findFirst({
      where: {
        id: inspectionId,
      },
      include: {
        item: true,
      },
    });
    if (!inspection) {
      return null;
    }

    const itemsExists: ItemsResult[] = await Promise.all(
      inspection.item.map(async (item: any) => {
        const itemTrails = await findTrailByItemIndex(
          inspectionId,
          item.itemIndex
        );

        return {
          itemIndex: item.itemIndex,
          situation: item.situation,
          category: item.category,
          description: item.description,
          observations: item.observations,
          trail: itemTrails,
        };
      })
    );

    itemsExists.sort((a, b) => parseInt(a.itemIndex) - parseInt(b.itemIndex));

    return itemsExists || null;
  } catch (error) {
    throw new Error("Não foi possível fazer a consulta de inspeções!");
  }
}

export async function findInspectionAttributes(
  inspectionId: string
): Promise<InspectionAttributesResult | null> {
  try {
    const inspection = await prisma.inspection.findFirst({
      where: {
        id: inspectionId,
      },
      include: {
        document: true,
      },
    });

    if (!inspection) {
      return null;
    }

    const documentsExists: DocumentResult[] = inspection.document.map(
      (document: DocumentResult) => ({
        id: document.id,
        name: document.name,
        url: document.url,
        type: document.type,
      })
    );

    return {
      name: inspection.name,
      responsible: inspection.responsible,
      type: inspection.type,
      recordingUrl: inspection.recordingUrl,
      participants: inspection.participants,
      responsibleEmail: inspection.responsibleEmail,
      documents: documentsExists,
      status: inspection.status,
      updatedAt: formatDataWithHours(inspection.updatedAt),
    };
  } catch (error) {
    throw new Error("Não foi possível fazer a consulta de inspeções");
  }
}

export async function createInspection(
  userId: string,
  inspectionName: string,
  inspectionResponsible: string,
  inspectionType: InspectionType,
  inspectionRecordingUrl: string,
  inspectionParticipants: string,
  inspectionResponsibleEmail: string
): Promise<Inspection> {
  try {
    const inspection = await prisma.inspection.create({
      data: {
        userId: userId,
        name: inspectionName,
        responsible: inspectionResponsible,
        type: inspectionType,
        recordingUrl: inspectionRecordingUrl,
        participants: inspectionParticipants,
        responsibleEmail: inspectionResponsibleEmail,
      },
    });

    if (!inspection) {
      throw new Error("Não foi possível criar uma inspeção!");
    }

    return inspection;
  } catch (error) {
    throw new Error("Não foi possível criar uma inspeção!");
  }
}

export async function createInspectionItems(
  inspectionId: string,
  inspectionType: string
) {
  try {
    const inspectionItemsData = inspectionTemplates(inspectionType);

    const items = await Promise.all(
      inspectionItemsData.inspectionItems.map(async (item) => {
        const createdItem = await prisma.item.create({
          data: {
            inspectionId: inspectionId,
            itemIndex: item.itemIndex,
            description: item.description,
            situation: item.situation,
            observations: item.observations,
            category: item.category,
          },
        });
        return createdItem;
      })
    );

    return items;
  } catch (error) {
    throw new Error("Não foi possível inserir itens em uma inspeção!");
  }
}

export async function updateInspectionAttributes(
  inspectionId: string,
  name: string,
  responsible: string,
  recordingUrl: string,
  participants: string,
  responsibleEmail: string
) {
  try {
    const inspection = await prisma.inspection.update({
      where: {
        id: inspectionId,
      },
      data: {
        name: name,
        responsible: responsible,
        recordingUrl: recordingUrl,
        participants: participants,
        responsibleEmail: responsibleEmail,
      },
    });

    if (!inspection) {
      return null;
    }

    return {
      id: inspection.id,
      name: inspection.name,
      responsibleEmail: inspection.responsibleEmail,
      responsible: inspection.responsible,
      recordingUrl: inspection.recordingUrl,
      participants: inspection.participants,
    };
  } catch (error) {
    throw error;
  }
}

async function deleteTrailOnSavingInspection(
  inspectionId: string,
  itemIndex: string
) {
  try {
    const existingDocumentTrails = await prisma.documentTrail.findMany({
      where: {
        inspectionId,
        itemIndex,
      },
    });
    
    if (isArrayNotEmpty(existingDocumentTrails)) {
      await prisma.documentTrail.deleteMany({
        where: {
          id: {
            in: existingDocumentTrails.map((trail) => trail.id),
          },
        },
      });
    }

    const existingTextTrail = await prisma.textTrail.findFirst({
      where: {
        inspectionId,
        itemIndex,
      },
    });

    if (existingTextTrail) {
      await prisma.textTrail.delete({
        where: {
          id: existingTextTrail.id,
        },
      });
    }
  } catch (error) {
    throw error;
  }
}

async function updateInspectionStatus(inspectionId: string, inspectionStatus: InspectionStatus) {
  try {
    if(inspectionStatus === CONCLUDED) {
      const actualDate = new Date().toISOString()
      await prisma.inspection.update({
        where: {
          id: inspectionId,
        },
        data: {
          status: inspectionStatus,
          finishedAt: actualDate,
        }
      })
    } else {
      await prisma.inspection.update({
        where: {
          id: inspectionId,
        },
        data: {
          status: inspectionStatus,
        }
    }) 
  }
  } catch (error) {
    throw error;
  }
}

export async function updateInspectionItems(
  itemsData: any[],
  inspectionStatus: InspectionStatus,
  inspectionId: string
) {
  try {
    const existingInspection = await prisma.inspection.findUnique({
      where: {
        id: inspectionId,
      },
    });

    if (!existingInspection) {
      throw new Error("Inspeção não encontrada.");
    }

    await updateInspectionStatus(inspectionId, inspectionStatus);
    
    await Promise.all(
      itemsData.map(async (item) => {
        const existingItem = await prisma.item.findFirst({
          where: {
            inspectionId,
            itemIndex: item.itemIndex,
          },
        });

        if (!existingItem) {
          throw new Error(
            `Item com itemIndex ${item.itemIndex} não encontrado.`
          );
        }

        await prisma.item.update({
          where: {
            id: existingItem.id,
          },
          data: {
            situation: item.situation,
            observations: item.observations,
          },
        });


        if (item.trail === null) {
          await deleteTrailOnSavingInspection(inspectionId, item.itemIndex);
        }

        if (isString(item.trail)) {
          const a = await createOrUpdateTextTrail(
            inspectionId,
            item.itemIndex,
            item.trail
          );
        }
      })
    );

    return "Itens da inspeção atualizados com sucesso.";
  } catch (error) {
    throw error;
  }
}

export async function destroiInspection(inspectionId: string) {
  try {
    await prisma.inspection.delete({
      where: {
        id: inspectionId,
      },
    });
  } catch (error) {
    throw new Error("Não foi possível excluir uma inspeção uma inspeção!");
  }
}
