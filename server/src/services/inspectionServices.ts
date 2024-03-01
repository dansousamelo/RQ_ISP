import { prisma } from "../db/prismaClient";

import { inspectionTemplates } from "./populateInspectionItemsService";

import { formatDataWithHours, formatDate } from "../utils/formatDatetime";

import { Inspection } from "../interfaces/types";
import {
  InspectionsResult,
  ItemsResult,
  DocumentResult,
  InspectionAttributesResult,
  InspectionType,
} from "./interfaces/types";
import { isArrayEmpty, isArrayNotEmpty } from "../interfaces/typeGuards";

export async function findInspection(
  inspectionId: string,
  userId: string
): Promise<string | null> {
  try {
    const inspection = await prisma.inspection.findFirst({
      where: {
        id: inspectionId,
        userId: userId,
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

function getTrailData(trails: any) {
  if (!trails || isArrayEmpty(trails)) {
    return null;
  }

  if (trails[0]?.documentId) {
    return trails.map((trail: any) => ({
      id: trail.id,
      text: trail.text,
      pageNumber: trail.pageNumber,
    }));
  } else {
    return trails.map((trail: any) => ({
      trail: trail.text,
    }));
  }
}

export async function findInspectionItemsByInspectionId(
  inspectionId: string,
  userId: string
): Promise<ItemsResult[] | null> {
  try {
    const inspection = await prisma.inspection.findFirst({
      where: {
        id: inspectionId,
        userId: userId,
      },
      include: {
        item: true,
        textTrail: true,
        documentTrail: true,
      },
    });

    if (!inspection) {
      return null;
    }

    const trails = isArrayNotEmpty(inspection.textTrail)
      ? inspection.textTrail
      : inspection.documentTrail;

    const itemsExists: ItemsResult[] = inspection.item.map((item: any) => {
      const itemTrails = getTrailData(
        trails.filter((trail: any) => trail.itemIndex === item.itemIndex)
      );

      return {
        itemIndex: item.itemIndex,
        situation: item.situation,
        category: item.category,
        description: item.description,
        observations: item.observations,
        trail: itemTrails,
      };
    });

    itemsExists.sort((a, b) => parseInt(a.itemIndex) - parseInt(b.itemIndex));

    return itemsExists || null;
  } catch (error) {
    throw new Error("Não foi possível fazer a consulta de inspeções!");
  }
}

export async function findInspectionAttributes(
  inspectionId: string,
  userId: string
): Promise<InspectionAttributesResult | null> {
  try {
    const inspection = await prisma.inspection.findFirst({
      where: {
        id: inspectionId,
        userId: userId,
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

export async function findDocumentTrail(documentId: string, inspectionId: string, userId: string) {
  try {
    const documentTrail = await prisma.documentTrail.findFirst({
      where: {
        id: documentId,
        inspection: {
          id: inspectionId,
          userId: userId,
        },
      },
    });

    if (!documentTrail) {
      return null;
    }

    return documentTrail.id;
  } catch (error) {
    throw error;
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

export async function destroiDocumentTrail(documentTrailId: string) {
  try {
    await prisma.documentTrail.delete({
      where: {
        id: documentTrailId,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
