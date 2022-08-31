"use strict"

// # Ejercicio JavaScript

// Edita el archivo script.js para crear un "reloj de cuco".

// El reloj sólo funcionará un día y dará la hora (imprimiendola por consola) de 8 a 22.

// Nota: Aunque lo llamemos reloj, no tiene que funcionar a tiempo real, sino que en cada vuelta aumentará una hora.

// Puedes elegir el tipo de bucle que prefieras. Puedes hacer que empiece en 8 y termine en 22 o que vaya de 0 a 24 y usar un condicional, a tu eleccion.

// Extra: ¡Hagámoslo un poco más difícil! Además de decir la hora con un número, hará la cantidad de "cucús" correspondientes (ej: "8 cucú cucú cucú cucú cucú cucú cucú cucú"). ¿Serías capaz de hacerlo sin usar el método repeat? Si lo quieres complicar aún más, ¡que los cucús sean en base 12 y no 24!

/* for(let i = 8; i <= 22; i++){
  console.log(i)
} */


for(let hora = 0; hora < 24; hora++){
  if(hora >= 8 && hora <= 22){
    console.log(hora)

    //console.log("cucú ".repeat(i))

    let total = "";

    let hora12 = hora;

    if(hora > 12){
      hora12 -= 12 // hora12 = hora12 - 12
    }



    for(let j = 0; j < hora12 ; j++){
      total += "cucú " // total = total + "cucú "
    } 

    console.log(total)

  }
}


/* 
LOGICA:
Durante las 24 horas que dura el día...
Si es despues de las 8 y antes de las 22... (condicional)
Por cada hora... (bucle)
Dice la hora (imprimir)


Extra:
Por cada hora... (mismo bucle)
Dice tantos cucús como la hora que es
    Por cada hora que lleva el día (otro bucle) añade un cucú 
    Dice el conjunto de cucús (imprime fuera del bucle)

    Si la hora es mayor que 12 (otro condicional)
      dice 12 cucús menos de los que tocarían (resta)
*/



//Lógica detrás de repeat:

/* function repeat(string, num){
  let frase = "";

  for(let i = 0; i < num; i++){
    frase += string // frase = frase + string
  }

  return frase
}

console.log(repeat("hola ", 4)) */