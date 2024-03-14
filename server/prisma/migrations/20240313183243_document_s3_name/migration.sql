/*
  Warnings:

  - Added the required column `s3Name` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "s3Name" TEXT NOT NULL;
