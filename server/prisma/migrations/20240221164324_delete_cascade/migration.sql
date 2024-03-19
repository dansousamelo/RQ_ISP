-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_inspection_id_fkey";

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_inspection_id_fkey" FOREIGN KEY ("inspection_id") REFERENCES "Inspection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
