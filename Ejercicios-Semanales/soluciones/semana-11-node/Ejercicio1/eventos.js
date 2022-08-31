const minimist = require("minimist");
const fs = require("fs/promises");

const STORAGE_FILE = "data.json";

// Esta función lee los eventos guardados y devuelve un array de js con los datos
async function readEvents() {
  try {
    const data = await fs.readFile(STORAGE_FILE, { encoding: "utf-8" });

    return JSON.parse(data);
  } catch {
    return [];
  }
}

//Esta función imprime los eventos guardados
async function printEvents() {
  const data = await readEvents();

  if (data.length === 0) {
    console.log("No hay eventos guardados");
  } else {
    for (const item of data) {
      console.log("Fecha: ", item.date);
      console.log("EVento: ", item.event);
      console.log("----");
    }
  }
}

//Esta función guarda un nuevo evento
async function saveEvent({ date, event }) {
  try {
    //Leer los eventos actuales guardados
    const data = await readEvents();

    //Añadir el evento nuevo al final de la lista
    data.push({
      date,
      event,
    });

    //Guardar la lista actualizada
    await fs.writeFile(STORAGE_FILE, JSON.stringify(data));

    //Mostrar mensaje de confirmación
    console.log("Evento guardado");
  } catch (error) {
    console.error("Hubo un error guardando el evento: ", error.message);
  }
}

function main() {
  const args = minimist(process.argv.slice(2));

  if (args.print) {
    printEvents();
    return;
  }

  if (args.date && args.event) {
    saveEvent({
      event: args.event,
      date: args.date,
    });

    return;
  }

  console.log(`
  Error: Faltan argumentos

  Uso:
  node eventos.js --print: imprime los eventos
  node eventos.js --date FECHA --event TEXTO: guarda un evento nuevo
  `);
}

main();
