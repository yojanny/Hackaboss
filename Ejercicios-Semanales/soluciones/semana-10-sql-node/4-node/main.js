const prompt = require("prompt-sync")({
  sigint: true,
});
const parseArgs = require("minimist");

const { nombre } = parseArgs(process.argv.slice(2));

if (nombre) {
  console.log(`Hola ${nombre}! :D`);
} else {
  console.log("Hola! :D");
}

const preguntarEstadoAnimo = () => {
  const estadoAnimo = prompt("¿Qué tal estás?");

  switch (estadoAnimo.toLowerCase()) {
    case "bien":
      console.log("Me alegro, que tengas un fantástico día! ;)");
      break;
    case "mal":
      console.log("Vaya... habrá días mejores!");
      break;
    default:
      console.log("Lo siento, no te he entendido");
      preguntarEstadoAnimo();
  }
};

preguntarEstadoAnimo();
