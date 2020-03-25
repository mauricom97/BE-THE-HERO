const knex = require('knex'); require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

module.exports = connection;