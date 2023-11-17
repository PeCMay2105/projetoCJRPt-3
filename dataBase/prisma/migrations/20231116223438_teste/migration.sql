-- CreateTable
CREATE TABLE "Comentario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "texto" TEXT NOT NULL,
    "UsuarioId" INTEGER NOT NULL,
    CONSTRAINT "Comentario_UsuarioId_fkey" FOREIGN KEY ("UsuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
