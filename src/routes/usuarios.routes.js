import { Router } from "express";
import UsuarioController from "../controllers/usuarios.controllers.js";

const router = Router();

router.post('/create', UsuarioController.createUsuario);

router.get('/', UsuarioController.getAllUsuarios);

router.put('/:id', UsuarioController.updateUsuario);

router.delete('/:id', UsuarioController.deleteUsuario);

export default router;