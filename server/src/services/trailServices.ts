import { prisma } from "../db/prismaClient";
import { isArrayEmpty } from "../interfaces/typeGuards";
import { getErrorMessage } from "../utils/errorMessage";
import { translateItemSituation } from "../utils/translateItemSituationName";

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

function mapDocumentTrail(docTrail: any) {
  const documentTrailRects =
    docTrail.documentTrailPostion.documentTrailPositionRect.map(
      mapDocumentTrailRect
    );

  return {
    id: docTrail.id,
    content: {
      text: docTrail.text,
    },
    comment: {
      text: docTrail.itemIndex,
      emoji: "",
    },
    position: {
      boundingRect: mapBoundingRect(
        docTrail.documentTrailPostion.documentTrailPositionBoudingRect
      ),
      rects: documentTrailRects,
      pageNumber: docTrail.documentTrailPostion.pageNumber,
    },
  };
}

function mapBoundingRect(docTrailBoundingRect: any) {
  return {
    x1: parseFloat(docTrailBoundingRect.x1),
    y1: parseFloat(docTrailBoundingRect.y1),
    x2: parseFloat(docTrailBoundingRect.x2),
    y2: parseFloat(docTrailBoundingRect.y2),
    width: parseFloat(docTrailBoundingRect.width),
    height: parseFloat(docTrailBoundingRect.height),
    pageNumber: docTrailBoundingRect.pageNumber,
  };
}

function mapDocumentTrailRect(docTrailRects: any) {
  return {
    x1: parseFloat(docTrailRects.x1),
    y1: parseFloat(docTrailRects.y1),
    x2: parseFloat(docTrailRects.x2),
    y2: parseFloat(docTrailRects.y2),
    width: parseFloat(docTrailRects.width),
    height: parseFloat(docTrailRects.height),
    pageNumber: docTrailRects.pageNumber,
  };
}

export async function findDocumentTrails(documentId: string) {
  try {
    const documentTrails = await prisma.documentTrail.findMany({
      where: {
        documentId,
      },
      include: {
        documentTrailPostion: {
          include: {
            documentTrailPositionBoudingRect: true,
            documentTrailPositionRect: true,
          },
        },
      },
    });

    if (!documentTrails || isArrayEmpty(documentTrails)) {
      return null;
    }

    return documentTrails.map(mapDocumentTrail);
  } catch (error) {
    throw error;
  }
}

export async function findDocumentTrailById(trailId: string) {
  try {
    const documentTrail = await prisma.documentTrail.findFirst({
      where: {
        id: trailId,
      },
    });

    if (!documentTrail) {
      return null;
    }

    return documentTrail;
  } catch (error) {
    throw error;
  }
}

export async function createOrUpdateTextTrail(
  inspectionId: string,
  itemIndex: string,
  trailData: string
) {
  try {
    const existingTextTrail = await prisma.textTrail.findFirst({
      where: {
        inspectionId: inspectionId,
        itemIndex: itemIndex,
      },
    });

    if (existingTextTrail) {
      const updatedTextTrail = await prisma.textTrail.update({
        where: {
          id: existingTextTrail.id,
        },
        data: {
          text: trailData,
        },
      });

      return updatedTextTrail.id;
    } else {
      const newTextTrail = await prisma.textTrail.create({
        data: {
          inspectionId: inspectionId,
          itemIndex: itemIndex,
          text: trailData,
        },
      });

      return newTextTrail.id;
    }
  } catch (error) {
    throw error;
  }
}

export async function createDocumentTrail(
  inspectionId: string,
  documentId: string,
  trailData: TrailData
) {
  try {
    const itemIndex = trailData.comment.text;
    const findedTextTrail = await findTextTrail(inspectionId, itemIndex);

    if (findedTextTrail) {
      await destroiTextTrail(findedTextTrail);
    }

    const item = await prisma.item.findFirst({
      where:{
        inspectionId: inspectionId,
        itemIndex: itemIndex,
      }
    })

    if(!item){
      throw new Error("Não foi possível encontrar este item")
    }

    if(item.situation === "non_compilant" || item.situation === "not_applicable"){
      const itemSituationTranslated = translateItemSituation(item.situation);
      throw new Error(`Não foi possível marcar neste item pois a situação dele é "${itemSituationTranslated}"`)
    }

    const documentTrail = await createDocumentTrailInstance(
      inspectionId,
      documentId,
      itemIndex,
      trailData.content.text
    );

    const documentTrailPosition = await createDocumentTrailPosition(
      documentTrail.id,
      trailData.position.pageNumber
    );

    await Promise.all([
      createTrailBoundingRect(
        documentTrailPosition.id,
        trailData.position.boundingRect
      ),
      createTrailRects(documentTrailPosition.id, trailData.position.rects),
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
  text: string
) {
  const cleanedText = text.replace(/\u0000/g, '');
  try {
    const createdTrail = await prisma.documentTrail.create({
      data: {
        inspectionId: inspectionId,
        documentId: documentId,
        itemIndex: itemIndex,
        text: cleanedText, 
      },
    });

    return createdTrail;
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

    return createdDocumentTrailPosition;
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

export async function destroiDocumentTrail(documentTrailId: string) {
  try {
    await prisma.documentTrail.delete({
      where: {
        id: documentTrailId,
      },
    });
  } catch (error) {
    throw error;
  }
}

export async function destroiManyDocumentTrail(documentId: string){
  try {
    await prisma.documentTrail.deleteMany({
      where:{
        documentId: documentId
      }
    })
  } catch (error) {
    throw error
  }
}
