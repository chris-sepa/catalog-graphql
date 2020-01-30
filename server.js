const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const catalogAPI = require('./datasources/catalog')

//root resolver should return the Catalog for <http://data.sepa.org.uk/id/dcat/catalog/sewebCatalog>


const server = new ApolloServer({
    typeDefs,
    resolvers,
    datasources: () => ({
        catalogAPI: new catalogAPI(),
    }),

});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);