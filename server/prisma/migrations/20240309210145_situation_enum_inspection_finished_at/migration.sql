/*
  Warnings:

  - The `situation` column on the `Item` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Situation" AS ENUM ('as_per', 'incomplete', 'non_compilant', 'not_applicable');

-- AlterTable
ALTER TABLE "Inspection" ADD COLUMN     "finishedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "situation",
ADD COLUMN     "situation" "Situation";
