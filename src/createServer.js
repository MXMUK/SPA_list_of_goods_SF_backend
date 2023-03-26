'use strict';

const express = require('express');

const { router: goodsRouter } = require('./routes/goods');

function createServer() {
  const app = express();

  app.use('/goods', express.json(), goodsRouter);

  return app;
}

module.exports = {
  createServer,
};
