const express = require("express");
const server = express();
const PORT = 3001;
const { conn } = require('./DB_connection');

server.listen(PORT, () => console.log('server raised in portugal ' +PORT));
