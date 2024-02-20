/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('privacyRequirement', 'userStory');

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "access_code" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inspection" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "responsible" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "recording_url" TEXT NOT NULL,
    "participants" INTEGER NOT NULL,
    "responsible_email" TEXT NOT NULL,

    CONSTRAINT "Inspection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "inspection_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_access_code_key" ON "User"("access_code");

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_inspection_id_fkey" FOREIGN KEY ("inspection_id") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
