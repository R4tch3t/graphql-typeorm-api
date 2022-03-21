import { createConnection } from "typeorm";
import path from "path";
export async function connect(){

    // await createConnection({
    //     type: 'oracle',
    //     host: 'localhost',
    //     port: 1521,
    //     username: 'XE',
    //     password: 'oracle',
    //     database: 'XE',
    //     entities: [
    //         path.join(__dirname,'../entity/**/**.ts')
    //     ],
    //     synchronize: true
    // })


    await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'R4tch3t',
       // database: 'db_siiam_dev',
        database: 'db_tramites_dev',
        entities: [
         //   path.join(__dirname,'../entity/**/**.ts')
         path.join(__dirname,'../entities/**/**.ts')
        ],
        synchronize: false
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