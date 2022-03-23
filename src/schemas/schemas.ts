
import { buildSchema } from 'type-graphql';
import { ProductResolver } from '../resolvers/ProductResolver';
import { AuthorResolver } from '../resolvers/AuthorResolver';
import { BookResolver } from '../resolvers/BookResolver';
import { UserResolver } from '../resolvers/UserResolver';
import { FileResolver } from '../resolvers/FileResolver';
import { ProcedureResolver } from '../resolvers/ProcedureResolver';

export default async () => await buildSchema({
    resolvers: [ ProcedureResolver ],
    validate: false

})