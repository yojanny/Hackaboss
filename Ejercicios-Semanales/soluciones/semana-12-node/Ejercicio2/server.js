require("dotenv").config();

const express = require("express");

const listController = require("./controllers/listController");
const newController = require("./controllers/newController");
const { isAuthorized } = require("./middlewares");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send({ status: "Servidor funcionando ✌️" });
});

app.get("/list", listController);

app.post("/new", express.json(), isAuthorized, newController);

app.use((req, res) => {
  res.status(404).send({
    status: "Not found",
  });
});

app.use((error, req, res, next) => {
  res.status(error.httpStatus || 500).send({
    status: error.message,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT} 👹`);
});
