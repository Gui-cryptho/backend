import { Router } from "express";
import CatalogoController from "../controllers/CatalogoController.js";

const router = Router();

router.get("/view", CatalogoController.getAll);
router.get("/favoritos", CatalogoController.getFavoritos);
router.get("/search", CatalogoController.buscarPorTitulo);
router.get("/category/:categoria", CatalogoController.buscarPorCategoria);
router.get("/favorito/:id", CatalogoController.buscarFavoritoPorId);
router.post("/newMovie", CatalogoController.criar);
router.put("/favoritar/:id", CatalogoController.alternarFavorito);
router.delete("/delete/:id", CatalogoController.deletar);

export default router;
