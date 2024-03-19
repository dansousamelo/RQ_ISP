/*
  Warnings:

  - You are about to drop the column `finishedAt` on the `Inspection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Inspection" DROP COLUMN "finishedAt",
ADD COLUMN     "finishedAte" TIMESTAMP(3);
