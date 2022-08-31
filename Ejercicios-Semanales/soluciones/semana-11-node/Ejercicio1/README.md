# Ejercicio node 1

Crea un programa de node que te permita guardar fechas con descripciones de eventos. Utiliza los argumentos del programa para introducir la fecha y el texto de forma que se guarde en un archivo .json. Añade también un argumento que imprima los eventos por pantalla.

## Programa

`node eventos.js --print`: imprime todos los eventos
`node eventos.js --date 06/19/2022 --event "Primera clase de express"`: Crearía un evento

`node eventos.js --date 06/19/2022`: Error falta el texto del evento
`node eventos.js --event "Lorem ipsum"`: Error falta la fecha
`node eventos.js --event "Lorem ipsum" --print`: Imprime todos los eventos
`node eventos.js --date 06/19/2022 --event "Lorem ipsum" --print`: Imprime los eventos
