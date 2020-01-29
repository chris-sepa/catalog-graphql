module.exports = {
    Query: {
        catalog(parent, args, context, info) {
            return {
                title: ["Hard coded title"],
                uri: "http://data.sepa.org.uk/id/dcat/catalog/sewebCatalog"
            };
        },
        datasets(parent, args, context, info) {
            return { datasets: "datasets" };
        },
    },
};