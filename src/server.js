import express from 'express';
import usuariosRoutes from './routes/usuarios.routes.js';
import "./db.js";

const app = express();
app.use(express.json())

app.use('/usuario', usuariosRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3030');
})