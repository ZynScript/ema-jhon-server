const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

//middle-wares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>EMA-JHON SERVER</h1>");
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
