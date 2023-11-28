/*
  Warnings:

  - You are about to drop the column `UsuarioId` on the `Comentario` table. All the data in the column will be lost.
  - Added the required column `PostId` to the `Comentario` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comentario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "texto" TEXT NOT NULL,
    "PostId" INTEGER NOT NULL,
    CONSTRAINT "Comentario_PostId_fkey" FOREIGN KEY ("PostId") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comentario" ("id", "texto") SELECT "id", "texto" FROM "Comentario";
DROP TABLE "Comentario";
ALTER TABLE "new_Comentario" RENAME TO "Comentario";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
