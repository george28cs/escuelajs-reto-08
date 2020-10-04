const express = require("express");
const app = express();

//Server Config
const config = require("./config");
const port = config.port;

// Routes
const platziStoreRoute = require("./routes");

platziStoreRoute(app);

app.listen(port, (err) => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${port}`);
});
