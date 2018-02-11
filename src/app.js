import express from 'express';
import winston from 'winston';

const server = express();

server.use('/', (req, res) => {
  let a = 5;
  a = 5 + 3;

  res.send(`Hello world ${a}`);
});

server.listen(8080, () => {
  winston.info('Listening at port: 8080');
});
