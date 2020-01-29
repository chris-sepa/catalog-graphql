const { RESTDataSource } = require('apollo-datasource-rest');
class catalogAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://sepa-app-lds03:3030/sepadcat/query';
    }
}


module.exports = catalogAPI;