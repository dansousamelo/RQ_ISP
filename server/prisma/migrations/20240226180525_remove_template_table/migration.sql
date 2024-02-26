/*
  Warnings:

  - You are about to drop the column `template_id` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the `Template` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `inspection_id` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_template_id_fkey";

-- DropForeignKey
ALTER TABLE "Template" DROP CONSTRAINT "Template_inspection_id_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "template_id",
ADD COLUMN     "inspection_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "Template";

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_inspection_id_fkey" FOREIGN KEY ("inspection_id") REFERENCES "Inspection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
