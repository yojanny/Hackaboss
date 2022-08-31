"use strict";

const getEdad = () => {
  return 30;
};

const user = {
  nombre: "pepe",
  apellidos: "gonzalez",
  edad: getEdad(),
};

console.log(user.nombre);
console.log(user["nombre"]);

console.log(user.direccion?.localidad);

const respuesta = prompt("¿Qué quieres saber del usuario?");

const datosDeseados = respuesta.split(",");

for (const dato of datosDeseados) {
  console.log(user[dato]);
}

for (const propiedad in user) {
  console.log(user[propiedad]);
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

for (const [propiedad, valor] of Object.entries(user)) {
  console.log(propiedad, valor);
}
