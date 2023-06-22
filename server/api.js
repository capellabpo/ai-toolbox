/* eslint-disable prettier/prettier */
const client = require("../../db_cred/databasepg.js");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

client.connect();

app.get("/ai_tools", (req, res) => {
    client.query(`Select * from public.ai_tools`, (err, result) => {
        if(!err) {
            res.send(result.rows);
        } else {
            console.log(err);
        }
    });
    client.end;
});