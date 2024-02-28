/*
  Warnings:

  - Changed the type of `page_number` on the `Bouding_Rect` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `page_number` on the `Trail_Rects` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Bouding_Rect" DROP COLUMN "page_number",
ADD COLUMN     "page_number" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Trail_Rects" DROP COLUMN "page_number",
ADD COLUMN     "page_number" INTEGER NOT NULL;
