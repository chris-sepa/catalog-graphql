//Try using SOH to bring catalog graph
// and individual datasets with their distributions
const { RESTDataSource } = require('apollo-datasource-rest');
const updateEndpoint = 'update';
const queryEndpoint = 'sparql';
class catalogAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://sepa-app-lds03:3030/sepadcat/';
    }
    async getAllDatasets() {

    }
}


module.exports = catalogAPI;