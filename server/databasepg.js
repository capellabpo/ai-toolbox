/* eslint-disable prettier/prettier */
const { Client } = require("pg");
require('dotenv').config();

const client = new Client({
  host: process.env.POSTGRES_DB_HOST,
  user: process.env.POSTGRES_DB_USER,
  password: process.env.POSTGRES_DB_PASSWORD,
  database: process.env.POSTGRES_DB_NAME,
});

module.exports = client;
