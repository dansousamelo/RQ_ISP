/*
  Warnings:

  - You are about to drop the column `finishedAte` on the `Inspection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Inspection" DROP COLUMN "finishedAte",
ADD COLUMN     "finishedAt" TIMESTAMP(3);
