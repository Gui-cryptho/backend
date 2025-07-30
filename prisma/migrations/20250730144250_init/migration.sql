-- CreateTable
CREATE TABLE `Catalogo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Titulo` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,
    `avaliacao` INTEGER NOT NULL,
    `categoria` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NULL,
    `imagem` VARCHAR(191) NOT NULL,
    `favorito` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
