-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "adm" BOOLEAN NOT NULL,
    "foto" BLOB NOT NULL,
    "bio" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "texto" TEXT NOT NULL,
    "UsuarioId" INTEGER NOT NULL,
    "imagem" BOOLEAN NOT NULL,
    "conteudoImagem" BLOB NOT NULL,
    CONSTRAINT "Post_UsuarioId_fkey" FOREIGN KEY ("UsuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
