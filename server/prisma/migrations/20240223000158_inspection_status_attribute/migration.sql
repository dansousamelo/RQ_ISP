-- CreateEnum
CREATE TYPE "Status" AS ENUM ('uninitiated', 'initiated', 'concluded');

-- AlterTable
ALTER TABLE "Inspection" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'uninitiated';
