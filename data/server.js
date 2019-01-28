const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const knexConfig = require("../knexfile.js");

const server = express();
const db = knex(knexConfig.development);

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("server alive");
});

module.exports = server;
