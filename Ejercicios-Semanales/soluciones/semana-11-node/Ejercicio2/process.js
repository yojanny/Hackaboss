const path = require("path");
const fs = require("fs-extra");
const sharp = require("sharp");

const OUTPUT_DIR = path.join(__dirname, "samples");

// /users/demo/people ../photos
// path.join('c:\users\demo\people', '..\photos') --> c:\users\demo\photos

// async function createDirIfNotExists(directory) {
//   try {
//     await fs.access(directory);
//   } catch {
//     await fs.mkdir(directory);
//   }
// }

async function grayscale(photo) {
  return sharp(photo)
    .grayscale()
    .toFile(path.join(OUTPUT_DIR, `${photo}_grayscale.jpg`));
}

async function colorize(photo) {
  return sharp(photo)
    .tint({ r: 255, g: 240, b: 16 })
    .toFile(path.join(OUTPUT_DIR, `${photo}_colorize.jpg`));
}

async function thumbnail(photo) {
  return sharp(photo)
    .resize({ width: 150 })
    .toFile(path.join(OUTPUT_DIR, `${photo}_thumbnail.jpg`));
}

async function main() {
  try {
    if (process.argv.length !== 3) {
      console.error("Este programa sólo admite un argumento");
      return;
    }

    //Extraer de los argumentos del programa el nombre de la foto
    const photo = process.argv[2];

    //Crear el directorio samples si no existe
    await fs.ensureDir(OUTPUT_DIR);

    //Generar varias versiones de la imagen
    await grayscale(photo);
    console.log("Versión en escala de grises generada ✅");

    await colorize(photo);
    console.log("Versión con tinte generada ✅");

    await thumbnail(photo);
    console.log("Versión en miniatura generada ✅");
  } catch (error) {
    console.error("Error generando imágenes");
    console.error(error.message);
  }
}

main();
