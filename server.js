import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';
import catalogQueryAPI from './datasources/catalog';

//root resolver should return the Catalog for <http://data.sepa.org.uk/id/dcat/catalog/sewebCatalog>


const server = new ApolloServer({
    typeDefs,
    resolvers,
    datasources: () => ({
        catalogAPI: new catalogQueryAPI(),
    }),

});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);