/*
  Warnings:

  - Added the required column `name` to the `Inspection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Inspection" ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "recording_url" DROP NOT NULL,
ALTER COLUMN "participants" DROP NOT NULL,
ALTER COLUMN "participants" SET DATA TYPE TEXT;
