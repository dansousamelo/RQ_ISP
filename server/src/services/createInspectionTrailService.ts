import { prisma } from "../db/prismaClient";
import { getErrorMessage } from "../utils/errorMessage";

import { PositionRect, TrailData } from "./interfaces/types";

async function findTextTrail(inspectionId: string, itemIndex: string) {
  try {
    const findedTextTrail = await prisma.textTrail.findFirst({
      where: {
        inspectionId: inspectionId,
        itemIndex: itemIndex,
      },
    });

    if (!findedTextTrail) {
      return null;
    }

    return findedTextTrail.id;
  } catch (error) {
    throw error;
  }
}

export async function createTextTrail(inspectionId: string, itemIndex: string, trailData: string) {
  try {
    const trail = await prisma.textTrail.create({
      data: {
        inspectionId: inspectionId,
        itemIndex: itemIndex,
        text: trailData,
      },
    });

    return trail.id;
  } catch (error) {
    throw error;
  }
}

export async function createDocumentTrail(inspectionId: string,documentId: string, trailData: TrailData) {
  try {
    const itemIndex = trailData.comment.text;
    const findedTextTrail = await findTextTrail(inspectionId, itemIndex);

    if (findedTextTrail) {
      await destroiTextTrail(findedTextTrail);
    }

    const documentTrail = await createDocumentTrailInstance(inspectionId, documentId,itemIndex, trailData.content.text);

    const documentTrailPosition = await createDocumentTrailPosition(documentTrail,trailData.position.pageNumber);

    await Promise.all([
      createTrailBoundingRect(
        documentTrailPosition,
        trailData.position.boundingRect
      ),
      createTrailRects(documentTrailPosition, trailData.position.rects),
    ]);

    return documentTrail;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

async function createDocumentTrailInstance(
  inspectionId: string,
  documentId: string,
  itemIndex: string,
  text: string,
) {
  try {

    const createdTrail = await prisma.documentTrail.create({
      data: {
        inspectionId: inspectionId,
        documentId: documentId,
        itemIndex: itemIndex,
        text: text,
      },
    });

    return createdTrail.id;
  } catch (error) {
    throw new Error("Não foi possível inserir um objeto na tabela marcação!");
  }
}

async function createDocumentTrailPosition(
  documentTrailId: string,
  pageNumber: number
) {
  try {
    const createdDocumentTrailPosition =
      await prisma.documentTrailPosition.create({
        data: {
          documentTrailId: documentTrailId,
          pageNumber: pageNumber,
        },
      });

    return createdDocumentTrailPosition.id;
  } catch (error) {
    throw error;
  }
}

async function createTrailBoundingRect(
  trailId: string,
  boundingRect: PositionRect
) {
  try {
    const createdBoundingRect =
      await prisma.documentTrailPositionBoudingRect.create({
        data: {
          documentTrailPositionId: trailId,
          x1: boundingRect.x1.toString(),
          x2: boundingRect.x2.toString(),
          y1: boundingRect.y1.toString(),
          y2: boundingRect.y2.toString(),
          width: boundingRect.width.toString(),
          height: boundingRect.height.toString(),
          pageNumber: boundingRect.pageNumber,
        },
      });

    return createdBoundingRect;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

async function createTrailRects(trailId: string, rects: PositionRect[]) {
  try {
    const createdRects = await Promise.all(
      rects.map((rect: PositionRect) => {
        return prisma.documentTrailPositionRect.create({
          data: {
            documentTrailPositionId: trailId,
            x1: rect.x1.toString(),
            x2: rect.x2.toString(),
            y1: rect.y1.toString(),
            y2: rect.y2.toString(),
            width: rect.width.toString(),
            height: rect.height.toString(),
            pageNumber: rect.pageNumber,
          },
        });
      })
    );

    return createdRects;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

async function destroiTextTrail(textTrailId: string) {
  try {
    await prisma.textTrail.delete({
      where: {
        id: textTrailId,
      },
    });
  } catch (error) {
    throw error;
  }
}
