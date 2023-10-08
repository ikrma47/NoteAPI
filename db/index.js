require("dotenv").config();
const knex = require("knex");
const { setTypeParser, builtins } = require('pg').types;

setTypeParser(builtins.DATE, val => val);

const db = knex({
    client: "pg",
    connection: process.env.DATABASE_URL,
  });

module.exports = db;