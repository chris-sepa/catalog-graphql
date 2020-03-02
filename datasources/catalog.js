//Try using SOH to bring catalog graph
// and individual datasets with their distributions
import { RESTDataSource } from 'apollo-datasource-rest';
const catalogURL = 'http://sepa-app-lds03:3030/sepadcat/';
const updateEndpoint = 'update';
const queryEndpoint = 'sparql';
class catalogQueryAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = catalogURL + queryEndpoint;
    }
    async getAllDatasets() {

    }
}


export default catalogQueryAPI;