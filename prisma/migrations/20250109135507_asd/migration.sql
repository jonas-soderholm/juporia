/*
  Warnings:

  - A unique constraint covering the columns `[lessonId,id]` on the table `LessonSection` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[courseId,lessonId,sectionId]` on the table `Progress` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "LessonSection_lessonId_key";

-- DropIndex
DROP INDEX "Progress_userId_courseId_lessonId_sectionId_key";

-- CreateIndex
CREATE UNIQUE INDEX "LessonSection_lessonId_id_key" ON "LessonSection"("lessonId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "Progress_courseId_lessonId_sectionId_key" ON "Progress"("courseId", "lessonId", "sectionId");
