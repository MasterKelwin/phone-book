/*
  Warnings:

  - Made the column `name` on table `contacts` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_contacts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "number" INTEGER NOT NULL
);
INSERT INTO "new_contacts" ("id", "lastname", "name", "number") SELECT "id", "lastname", "name", "number" FROM "contacts";
DROP TABLE "contacts";
ALTER TABLE "new_contacts" RENAME TO "contacts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
