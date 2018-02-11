const expressGraphQL = require('express-graphql');
const express = require('express');
const winston = require('winston');
const schema = require('./schema/schema');

const server = express();

server.use('/graphql', expressGraphQL({ graphiql: true, schema }));

server.listen(8080, () => {
  winston.info('Listening at port: 8080');
});
