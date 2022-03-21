
import { buildSchema } from 'type-graphql';
import { ProductResolver } from '../resolvers/ProductResolver';
import { AuthorResolver } from '../resolvers/AuthorResolver';
import { BookResolver } from '../resolvers/BookResolver';
import { UserResolver } from '../resolvers/UserResolver';
//import { TramiteResolver } from '../resolvers/TramiteResolver';
import { DownFormatResolver } from '../resolvers/DownFormatResolver';
import { AttModuleResolver } from '../resolvers/AttModuleResolver';
import { RequirementResolver } from '../resolvers/RequirementResolver';
import { ReqAdResolver } from '../resolvers/ReqAdResolver';
import { TramitePreguntaResolver } from '../resolvers/TramitePreguntaResolver';
import { FileResolver } from '../resolvers/FileResolver';
import { ProcedureResolver } from '../resolvers/ProcedureResolver';

export default async () => await buildSchema({
    resolvers: [ ProcedureResolver ],
    validate: false

})