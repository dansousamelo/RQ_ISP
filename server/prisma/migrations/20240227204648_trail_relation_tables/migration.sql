/*
  Warnings:

  - You are about to drop the `TrailRects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TrailRects" DROP CONSTRAINT "TrailRects_trail_id_fkey";

-- DropTable
DROP TABLE "TrailRects";

-- CreateTable
CREATE TABLE "Trail_Rects" (
    "id" TEXT NOT NULL,
    "trail_id" TEXT NOT NULL,
    "x1" TEXT NOT NULL,
    "x2" TEXT NOT NULL,
    "y1" TEXT NOT NULL,
    "y2" TEXT NOT NULL,
    "width" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "page_number" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Trail_Rects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trail_Rects" ADD CONSTRAINT "Trail_Rects_trail_id_fkey" FOREIGN KEY ("trail_id") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
