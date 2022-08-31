const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.headers);
  next();
});

app.use((req, res, next) => {
  const now = new Date();
  const seconds = now.getSeconds();

  if (seconds < 30) {
    next();
  } else {
    res.send({
      message:
        "Lo sentimos no gestionamos peticiones en la última mitad de cada minuto",
      seconds,
    });
  }
});

app.get(
  "/time",
  (req, res, next) => {
    console.log("Esta petición está gestionada por el controlador de time");
    next();
  },
  (req, res, next) => {
    res.send({
      time: new Date().toLocaleString(),
    });
  }
);

app.get("/directory", (req, res, next) => {
  res.send({
    directory: __dirname,
  });
});

app.use((req, res) => {
  res.status = 404;
  res.send("Not found 😥");
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
