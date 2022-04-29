import { createConnection } from "typeorm";
import path from "path";
export async function connect(){

     await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5400,
        username: 'postgres',
        password: 'xswedcxs',
       // database: 'db_siiam_dev',
        database: 'db_tramites_dev',
        entities: [
            path.join(__dirname,'../entities/**/**.**')
        ],
        synchronize: false
    })

}