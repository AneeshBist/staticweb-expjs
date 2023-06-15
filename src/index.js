const path = require("path");
const express = require("express");
const app = express();
const port = 5000;

const webPath = path.join(__dirname, "../public");

app.use(express.static(webPath));

app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});
