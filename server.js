const { ApolloServer } = require('apollo-server');
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

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});