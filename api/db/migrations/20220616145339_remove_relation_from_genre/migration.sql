-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GenresOnUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "genreId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "GenresOnUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_GenresOnUser" ("genreId", "id", "userId") SELECT "genreId", "id", "userId" FROM "GenresOnUser";
DROP TABLE "GenresOnUser";
ALTER TABLE "new_GenresOnUser" RENAME TO "GenresOnUser";
CREATE UNIQUE INDEX "GenresOnUser_genreId_userId_key" ON "GenresOnUser"("genreId", "userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
