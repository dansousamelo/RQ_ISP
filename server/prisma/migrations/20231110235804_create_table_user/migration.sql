-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "access_code" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_access_code_key" ON "user"("access_code");
