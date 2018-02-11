import expressGraphQL from 'express-graphql';
import express from 'express';
import winston from 'winston';
import schema from './schema/schema';

const server = express();

server.use('/graphql', expressGraphQL({ graphiql: true, schema }));

server.listen(8080, () => {
  winston.info('Listening at port: 8080');
});
