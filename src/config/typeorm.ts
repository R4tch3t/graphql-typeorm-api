import { createConnection } from "typeorm";
import path from "path";
export async function connect(){
    await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'R4tch3t',
        database: 'graphqlts',
        entities: [
            path.join(__dirname,'../entity/**/**.ts')
        ],
        synchronize: true
    })
    //await createConnection({
    //    type: 'mysql',
    //    host: 'localhost',
    //    port: 3306,
    //    username: 'root',
    //    password: '',
    //    database: 'graphqlts',
    //    entities: [
    //        path.join(__dirname,'../entity/**/**.ts')
    //    ],
    //    synchronize: true
    //})
}