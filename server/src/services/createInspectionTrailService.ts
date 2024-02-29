import { prisma } from "../db/prismaClient";
import { getErrorMessage } from "../utils/errorMessage";

import { PositionRect, TrailData } from "./interfaces/types";

export async function createInspectionTrail(
  inspectionId: string,
  trailData: TrailData
) {
  try {
    const trail = await createTrailInstance(inspectionId, trailData);

    await Promise.all([
      createTrailBoundingRect(trail.id, trailData.position.boundingRect),
      createTrailRects(trail.id, trailData.position.rects),
    ]);

    return trail.id;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

async function createTrailInstance(inspectionId: string, trail: TrailData) {
  try {
    const { comment, content } = trail;
    const { pageNumber } = trail.position;

    const createdTrail = await prisma.trail.create({
      data: {
        inspection_id: inspectionId,
        text: content.text,
        item_id: comment.text,
        page_number: pageNumber,
      },
    });

    return createdTrail;
  } catch (error) {
    throw new Error("Não foi possível inserir um objeto na tabela marcação!");
  }
}

async function createTrailBoundingRect(
  trailId: string,
  boundingRect: PositionRect
) {
  try {
    const createdBoundingRect = await prisma.bouding_Rect.create({
      data: {
        trail_id: trailId,
        x1: boundingRect.x1.toString(),
        x2: boundingRect.x2.toString(),
        y1: boundingRect.y1.toString(),
        y2: boundingRect.y2.toString(),
        width: boundingRect.width.toString(),
        height: boundingRect.height.toString() as unknown as number,
        page_number: boundingRect.pageNumber,
      },
    });

    return createdBoundingRect;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

async function createTrailRects(trailId: string, rects: PositionRect[]) {
  try {
    const createRectPromises = rects.map((rect: PositionRect) => {
      return prisma.trail_Rects.create({
        data: {
          trail_id: trailId,
          x1: rect.x1.toString(),
          x2: rect.x2.toString(),
          y1: rect.y1.toString(),
          y2: rect.y2.toString(),
          width: rect.width.toString(),
          height: rect.height.toString() as unknown as number,
          page_number: rect.pageNumber,
        },
      });
    });

    const createdRects = await Promise.all(createRectPromises);

    return createdRects;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}
