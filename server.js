require('graphql');
require('apollo-server');
import schema from './schema';

//root resolver should return the Catalog for <http://data.sepa.org.uk/id/dcat/catalog/sewebCatalog>
const resolvers = {
    Query: {
        catalog(parent, args, context, info) {
            return { catalog: "http://data.sepa.org.uk/id/dcat/catalog/sewebCatalog" };
        },
    },
    Dataset: {
        datasets(catalog) {
            return { datasets: "datasets" };
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});