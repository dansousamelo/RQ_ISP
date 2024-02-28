-- CreateTable
CREATE TABLE "Bouding_Rect" (
    "id" TEXT NOT NULL,
    "trail_id" TEXT NOT NULL,
    "x1" TEXT NOT NULL,
    "x2" TEXT NOT NULL,
    "y1" TEXT NOT NULL,
    "y2" TEXT NOT NULL,
    "width" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "page_number" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bouding_Rect_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrailRects" (
    "id" TEXT NOT NULL,
    "trail_id" TEXT NOT NULL,
    "x1" TEXT NOT NULL,
    "x2" TEXT NOT NULL,
    "y1" TEXT NOT NULL,
    "y2" TEXT NOT NULL,
    "width" TEXT NOT NULL,
    "height" TEXT NOT NULL,
    "page_number" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TrailRects_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bouding_Rect" ADD CONSTRAINT "Bouding_Rect_trail_id_fkey" FOREIGN KEY ("trail_id") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrailRects" ADD CONSTRAINT "TrailRects_trail_id_fkey" FOREIGN KEY ("trail_id") REFERENCES "Trail"("id") ON DELETE CASCADE ON UPDATE CASCADE;
