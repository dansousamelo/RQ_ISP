-- DropForeignKey
ALTER TABLE "Inspection" DROP CONSTRAINT "Inspection_user_id_fkey";

-- AddForeignKey
ALTER TABLE "Inspection" ADD CONSTRAINT "Inspection_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
