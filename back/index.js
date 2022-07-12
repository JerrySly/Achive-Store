const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const server = express();
server.use(cors());
server.use(express.json());
server.use('/',routes);
const PORT = 5000;



server.listen(PORT, () => {
  console.log("Server started");
});
