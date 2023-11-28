-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "texto" TEXT NOT NULL,
    "UsuarioId" INTEGER NOT NULL,
    "imagem" BOOLEAN NOT NULL,
    "conteudoImagem" BLOB,
    CONSTRAINT "Post_UsuarioId_fkey" FOREIGN KEY ("UsuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("UsuarioId", "conteudoImagem", "id", "imagem", "texto") SELECT "UsuarioId", "conteudoImagem", "id", "imagem", "texto" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
