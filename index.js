const { Server } = require("./src/server");
const server = new Server;
require('dotenv').config();

server.DBConnection();
server.listen();