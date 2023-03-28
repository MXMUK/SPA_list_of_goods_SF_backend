"use strict";

const express = require("express");

const { router: goodsRouter } = require("./routes/goods");

function createServer() {
  const app = express();
  const cors = require("cors");
  app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:3002",
        "http://localhost:3003",
        "https://mxmuk.github.io",
      ],
    })
  );

  app.use("/goods", express.json(), goodsRouter);

  return app;
}

module.exports = {
  createServer,
};
