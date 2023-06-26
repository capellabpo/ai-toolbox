/* eslint-disable prettier/prettier */
const { Client } = require("pg");
require('dotenv').config();


const client = new Client({
  host: process.env.VUE_APP_DB_HOST,
  user: process.env.VUE_APP_DB_USER,
  password: process.env.VUE_APP_DB_PASSWORD,
  database: process.env.VUE_APP_DB_NAME,
});

module.exports = client;
