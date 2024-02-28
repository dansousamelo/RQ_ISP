/*
  Warnings:

  - Added the required column `inspection_id` to the `Trail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Trail" DROP CONSTRAINT "Trail_item_id_fkey";

-- AlterTable
ALTER TABLE "Trail" ADD COLUMN     "inspection_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Trail" ADD CONSTRAINT "Trail_inspection_id_fkey" FOREIGN KEY ("inspection_id") REFERENCES "Inspection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
