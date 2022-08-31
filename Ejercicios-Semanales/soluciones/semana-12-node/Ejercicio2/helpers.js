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

//Esta función guarda un nuevo evento
async function saveEvent({ date, event }) {
  //Leer los eventos actuales guardados
  const data = await readEvents();

  //Añadir el evento nuevo al final de la lista
  data.push({
    date,
    event,
  });

  //Guardar la lista actualizada
  await fs.writeFile(STORAGE_FILE, JSON.stringify(data));

  return data;
}

module.exports = {
  readEvents,
  saveEvent,
};
