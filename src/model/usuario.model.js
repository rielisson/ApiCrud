import connection from "../db.js";

class UsuarioModel {
    createTable() {
        let sql = "CREATE TABLE USUARIOS (id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name TEXT NOT NULL, idade INT NOT NULL, profissao TEXT NOT NULL) "
    
        connection.query(sql, (err, result) => {
            return console.log('tabela criada com suceso!');
        })
    }
    async getAllUsuarios() {
        try {
            const [result] = await connection.execute("SELECT * FROM  usuarios;");
            return result;
        } catch (error) {
            return error.message;
        }
        
    }
    async createUsuario(data) {
        let sqlCreate = "INSERT INTO usuarios (name, idade, profissao)  VALUES (?, ?, ?)";
        const result = await connection.execute(sqlCreate, [
            data.name,
            data.idade,
            data.profissao
        ])
       
        return result;
    }

    async update(data, id) {
        let sql = "UPDATE usuarios SET name = ?, idade = ?, profissao = ? WHERE id_usuario = ?";
        const result = await connection.execute(sql, [
            data.name,
            data.idade,
            data.profissao,
            id
        ])
        return result;
    }
    async delete(id) {
        let sql = "DELETE FROM usuarios WHERE id_usuario = ?"
        const result = await connection.execute(sql, 
            [id]
        );
        return result;
    }
}
export default new UsuarioModel();