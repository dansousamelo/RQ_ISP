-- DropForeignKey
ALTER TABLE "DocumentTrail" DROP CONSTRAINT "DocumentTrail_inspectionId_fkey";

-- AddForeignKey
ALTER TABLE "DocumentTrail" ADD CONSTRAINT "DocumentTrail_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;
