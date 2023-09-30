-- CreateEnum
CREATE TYPE "ValueType" AS ENUM ('STRING', 'INTEGER', 'FLOAT');

-- CreateTable
CREATE TABLE "Ceil" (
    "_id" TEXT NOT NULL,
    "cellId" TEXT NOT NULL,
    "value" TEXT,
    "valueType" "ValueType" NOT NULL,
    "sheetId" TEXT NOT NULL,

    CONSTRAINT "Ceil_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Sheet" (
    "_id" TEXT NOT NULL,

    CONSTRAINT "Sheet_pkey" PRIMARY KEY ("_id")
);

-- AddForeignKey
ALTER TABLE "Ceil" ADD CONSTRAINT "Ceil_sheetId_fkey" FOREIGN KEY ("sheetId") REFERENCES "Sheet"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
