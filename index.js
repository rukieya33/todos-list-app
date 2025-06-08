const home = require("./router/home");

const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(home);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});