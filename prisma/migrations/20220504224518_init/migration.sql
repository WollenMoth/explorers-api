/*
  Warnings:

  - You are about to drop the column `enrrollments` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "enrrollments",
ADD COLUMN     "enrollments" INTEGER NOT NULL DEFAULT 0;
