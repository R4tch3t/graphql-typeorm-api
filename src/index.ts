import "reflect-metadata"
import { connect } from "./config/typeorm";
import { startServer } from "./app"

async function main() {
    const app = await startServer();
    app.listen(3500);
    connect();
    console.log('Conectado a la BDD y Servidor ejecutándose en l puerto', 3500);
}

main();