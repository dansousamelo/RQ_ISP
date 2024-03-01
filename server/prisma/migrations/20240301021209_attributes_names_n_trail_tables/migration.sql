/*
  Warnings:

  - You are about to drop the column `created_at` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `inspection_id` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Inspection` table. All the data in the column will be lost.
  - You are about to drop the column `recording_url` on the `Inspection` table. All the data in the column will be lost.
  - You are about to drop the column `responsible_email` on the `Inspection` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Inspection` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Inspection` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `inspection_id` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `item_index` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `access_code` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Bouding_Rect` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Trail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Trail_Rects` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `inspectionId` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsibleEmail` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Inspection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inspectionId` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemIndex` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accessCode` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bouding_Rect" DROP CONSTRAINT "Bouding_Rect_trail_id_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_inspection_id_fkey";

-- DropForeignKey
ALTER TABLE "Inspection" DROP CONSTRAINT "Inspection_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_inspection_id_fkey";

-- DropForeignKey
ALTER TABLE "Trail" DROP CONSTRAINT "Trail_inspection_id_fkey";

-- DropForeignKey
ALTER TABLE "Trail_Rects" DROP CONSTRAINT "Trail_Rects_trail_id_fkey";

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "created_at",
DROP COLUMN "inspection_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "inspectionId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Inspection" DROP COLUMN "created_at",
DROP COLUMN "recording_url",
DROP COLUMN "responsible_email",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "recordingUrl" TEXT,
ADD COLUMN     "responsibleEmail" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "created_at",
DROP COLUMN "inspection_id",
DROP COLUMN "item_index",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "inspectionId" TEXT NOT NULL,
ADD COLUMN     "itemIndex" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "access_code",
DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "accessCode" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Bouding_Rect";

-- DropTable
DROP TABLE "Trail";

-- DropTable
DROP TABLE "Trail_Rects";

-- CreateTable
CREATE TABLE "TextTrail" (
    "id" TEXT NOT NULL,
    "inspectionId" TEXT NOT NULL,
    "itemIndex" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TextTrail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentTrail" (
    "id" TEXT NOT NULL,
    "inspectionId" TEXT NOT NULL,
    "itemIndex" TEXT NOT NULL,
    "documentId" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DocumentTrail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentTrailPosition" (
    "id" TEXT NOT NULL,
    "documentTrailId" TEXT NOT NULL,
    "pageNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DocumentTrailPosition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentTrailPositionBoudingRect" (
    "id" TEXT NOT NULL,
    "documentTrailPositionId" TEXT NOT NULL,
    "x1" TEXT NOT NULL,
    "x2" TEXT NOT NULL,
    "y1" TEXT NOT NULL,
    "y2" TEXT NOT NULL,
    "width" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "pageNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DocumentTrailPositionBoudingRect_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentTrailPositionRect" (
    "id" TEXT NOT NULL,
    "documentTrailPositionId" TEXT NOT NULL,
    "x1" TEXT NOT NULL,
    "x2" TEXT NOT NULL,
    "y1" TEXT NOT NULL,
    "y2" TEXT NOT NULL,
    "width" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "page_number" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DocumentTrailPositionRect_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DocumentTrailPosition_documentTrailId_key" ON "DocumentTrailPosition"("documentTrailId");

-- CreateIndex
CREATE UNIQUE INDEX "DocumentTrailPositionBoudingRect_documentTrailPositionId_key" ON "DocumentTrailPositionBoudingRect"("documentTrailPositionId");

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TextTrail" ADD CONSTRAINT "TextTrail_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentTrail" ADD CONSTRAINT "DocumentTrail_inspectionId_fkey" FOREIGN KEY ("inspectionId") REFERENCES "Inspection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentTrailPosition" ADD CONSTRAINT "DocumentTrailPosition_documentTrailId_fkey" FOREIGN KEY ("documentTrailId") REFERENCES "DocumentTrail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentTrailPositionBoudingRect" ADD CONSTRAINT "DocumentTrailPositionBoudingRect_documentTrailPositionId_fkey" FOREIGN KEY ("documentTrailPositionId") REFERENCES "DocumentTrailPosition"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentTrailPositionRect" ADD CONSTRAINT "DocumentTrailPositionRect_documentTrailPositionId_fkey" FOREIGN KEY ("documentTrailPositionId") REFERENCES "DocumentTrailPosition"("id") ON DELETE CASCADE ON UPDATE CASCADE;
