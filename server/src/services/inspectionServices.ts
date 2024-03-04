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
import { isArrayEmpty, isArrayNotEmpty, isNotUndefined } from "../interfaces/typeGuards";

export async function findInspection(
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

function getTrailData(trails: any[]) {
  if (!trails || isArrayEmpty(trails)) {
    return null;
  }

  return trails.map((trail: any) => {
    if (trail.documentTrailPostion && trail.documentTrailPostion.pageNumber) {
      return {
        id: trail.id,
        text: trail.text,
        pageNumber: trail.documentTrailPostion.pageNumber,
      };
    } else {
      return {
        trail: trail.text,
      };
    }
  });
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
        textTrail: true,
        documentTrail: {
          include: {
            documentTrailPostion: true,
          },
        },
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
    const dataToUpdate: Record<string, any> = {};
    
    if (isNotUndefined(name)) dataToUpdate.name = name;
    if (isNotUndefined(responsibleEmail)) dataToUpdate.responsibleEmail = responsibleEmail;
    if (isNotUndefined(responsible)) dataToUpdate.responsible = responsible;
    if (isNotUndefined(recordingUrl)) dataToUpdate.recordingUrl = recordingUrl;
    if (isNotUndefined(participants)) dataToUpdate.participants = participants;

    const inspection = await prisma.inspection.update({
      where: {
        id: inspectionId,
      },
      data: dataToUpdate,
    });

    if (!inspection) {
      return null;
    }

    return {
      name: inspection.name,
      responsibleEmail: inspection.responsibleEmail,
      responsible: inspection.responsible,
      recordingUrl: inspection.recordingUrl,
      participants: inspection.participants,
    }

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
