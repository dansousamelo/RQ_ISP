/*
  Warnings:

  - Changed the type of `height` on the `Bouding_Rect` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `height` on the `Trail_Rects` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Bouding_Rect" DROP COLUMN "height",
ADD COLUMN     "height" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Trail_Rects" DROP COLUMN "height",
ADD COLUMN     "height" INTEGER NOT NULL;
