/*
  Warnings:

  - You are about to drop the `_GenreToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_GenreToUser";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "GenresOnUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "genreId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "GenresOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GenresOnUser_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "GenresOnUser_genreId_userId_key" ON "GenresOnUser"("genreId", "userId");
