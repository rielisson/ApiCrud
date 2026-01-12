import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rielisson1918!",
  database: "cadastroClientes"
});

console.log("Banco conectado.");
export default connection;
