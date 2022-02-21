
import { buildSchema } from 'type-graphql';
import { PingResolver } from '../resolvers/ping';
import { ProductResolver } from '../resolvers/ProductResolver';
import { AuthorResolver } from '../resolvers/AuthorResolver';
import { BookResolver } from '../resolvers/BookResolver';
import { UserResolver } from '../resolvers/UserResolver';
import { TramiteResolver } from '../resolvers/TramiteResolver';
import { DownFormatResolver } from '../resolvers/DownFormatResolver';
import { AttModuleResolver } from '../resolvers/AttModuleResolver';
import { RequirementResolver } from '../resolvers/RequirementResolver';
import { ReqAdResolver } from '../resolvers/ReqAdResolver';
import { TramitePreguntaResolver } from '../resolvers/TramitePreguntaResolver';
import { FileResolver } from '../resolvers/FileResolver';

export default async () => await buildSchema({
    resolvers: [PingResolver, ProductResolver, AuthorResolver, BookResolver, UserResolver, TramiteResolver,DownFormatResolver,
      AttModuleResolver, RequirementResolver, ReqAdResolver, TramitePreguntaResolver],
    validate: false

})