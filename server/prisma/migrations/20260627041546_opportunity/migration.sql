-- CreateTable
CREATE TABLE "Opportunities" (
    "id" SERIAL NOT NULL,
    "Role" TEXT NOT NULL,
    "Date" INTEGER NOT NULL,
    "Location" TEXT NOT NULL,

    CONSTRAINT "Opportunities_pkey" PRIMARY KEY ("id")
);
