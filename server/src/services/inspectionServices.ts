import { prisma } from "../db/prismaClient";

import { inspectionTemplates } from "./populateInspectionItemsService";

import { formatDataWithHours, formatDate } from "../utils/formatDatetime";

import { isArrayEmpty } from "../interfaces/typeGuards";
import { DocumentItems, Inspection } from "../interfaces/types";
import {
  InspectionsResult,
  ItemsResult,
  DocumentResult,
  InspectionAttributesResult,
  InspectionType,
  TrailResult,
} from "./interfaces/types";

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
        user_id: userId,
      },
      orderBy: {
        updated_at: "desc",
      },
    });

    const inspectionsExists: InspectionsResult[] = inspections.map(
      (inspection: Inspection) => ({
        id: inspection.id,
        name: inspection.name,
        created_at: formatDate(inspection.created_at),
        type: inspection.type,
        status: inspection.status,
      })
    );

    return inspectionsExists || null;
  } catch (error) {
    throw new Error("Não foi possível fazer a consulta de inspeções");
  }
}

// function getTrailData(trails: TrailResult) {
//   if (!trails || isArrayEmpty(trails)) {
//     return null;
//   }

//   return trails.map((trail) => {
//     const trailData: any = {
//       trail_id: trail.id,
//       text: trail.text,
//     };

//     if (trail.page_number) {
//       trailData.page_number = trail.page_number;
//     }

//     return trailData;
//   });
// }

export async function findInspectionItemsByInspectionId(
  inspectionId: string
): Promise<ItemsResult[] | null> {
  try {
    const inspection = await prisma.inspection.findFirst({
      where: {
        id: inspectionId,
      },
      include: {
        Item: true,
        Trail: true,
      },
    });

    if (!inspection) {
      return null;
    }

    const itemsExists: ItemsResult[] = inspection.Item.map((item: any) => {
      return {
        item_index: item.item_index,
        situation: item.situation,
        category: item.category,
        description: item.description,
        observations: item.observations,
        trail: inspection.Trail.filter(
          (trail) => trail.item_id === item.item_index
        ).map((trail) => trail.text),
      };
    });

    itemsExists.sort((a, b) => parseInt(a.item_index) - parseInt(b.item_index));

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
        Document: true,
      },
    });

    if (!inspection) {
      return null;
    }

    const documentsExists: DocumentResult[] = inspection.Document.map(
      (document: DocumentResult) => ({
        name: document.name,
        url: document.url,
        type: document.type,
      })
    );

    return {
      name: inspection.name,
      responsible: inspection.responsible,
      type: inspection.type,
      recording_url: inspection.recording_url,
      participants: inspection.participants,
      responsible_email: inspection.responsible_email,
      documents: documentsExists,
      status: inspection.status,
      updated_at: formatDataWithHours(inspection.updated_at),
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
        user_id: userId,
        name: inspectionName,
        responsible: inspectionResponsible,
        type: inspectionType,
        recording_url: inspectionRecordingUrl,
        participants: inspectionParticipants,
        responsible_email: inspectionResponsibleEmail,
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
            inspection_id: inspectionId,
            item_index: item.item_index,
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
