import usuarioModel from "../model/usuario.model.js";

class UsuarioController {
    createTable() {}
    async getAllUsuarios(req, res) {
        try {
            const getUsuarios = await UsuarioModel.getAllUsuarios();
            if(getUsuarios.length === 0) {
                return res.status(404).send("Usuarios não encontrados.");
            }
            return res.status(200).json(getUsuarios);
        } catch (error) {
            throw error;
        }
    }
    async createUsuario(req, res) {
        try{
            let create = await UsuarioModel.createUsuario(req.body);
            if(!create) {
                return res.status(404).send("Usuario não cadastrado.");
            }
            return res.status(201).send("Usuario criado com sucesso");
        } catch (error) {
            return res.status(500).send(error.message);
        }
        
    }

    async updateUsuario(req, res) {
        try {
            let usuario = await usuarioModel.update(req.body, req.params.id);

            if(!usuario) {
                return res.status(404).send("Usuario não encontrado");
            }
            return res.status(200).send("Usuario criado com sucesso");
        } catch (error){
            return res.status(500).send(error.message);
        }
    }

    async deleteUsuario(req, res) {
        try {
            let usuarioDelete = await usuarioModel.delete(req.params.id);
            if(!usuarioDelete) {
                return res.status(404).send("Usuario não encontrado");
            }
            return res.status(200).send("Usuario deletado com sucesso.");
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
}

export default new UsuarioController();
