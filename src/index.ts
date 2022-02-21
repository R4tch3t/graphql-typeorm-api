import "reflect-metadata"
import { connect } from "./config/typeorm";
import { startServer } from "./app"

async function main() {
    const app = await startServer();
   // app.listen(3000);
    connect();
    console.log('Conectado a la BDD y Servidor ejecutándose en l puerto', 3000);
}

main();