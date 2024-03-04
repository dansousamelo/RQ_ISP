/*
  Warnings:

  - You are about to drop the column `page_number` on the `DocumentTrailPositionRect` table. All the data in the column will be lost.
  - Added the required column `pageNumber` to the `DocumentTrailPositionRect` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DocumentTrailPositionRect" DROP COLUMN "page_number",
ADD COLUMN     "pageNumber" INTEGER NOT NULL;
