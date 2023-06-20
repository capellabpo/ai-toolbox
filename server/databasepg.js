/* eslint-disable prettier/prettier */
const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "superganda",
  database: "ai-directory",
});

module.exports = client;
// client.connect();

// client.query(`Select * from public.ai_tools`, (err, res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err);
//   }
//   client.end();
// });
