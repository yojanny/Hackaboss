const { readFile } = require("fs"); // Versión callback
// const { readFile } = require("fs").promises; // Versión promesas

readFile("./texto.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

// const waitForReadFile = async () => {
//   try {
//     const texto = await readFile("./texto.txt", "utf-8");

//     console.log(texto);
//   } catch (error) {
//     console.error(error);
//   }
// };

// waitForReadFile();
