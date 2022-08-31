# Ejercicios Arrays y Strings

- Métodos no funcionales de arrays.

- Métodos de String.

- Métodos funcionales de arrays.

## Bloque01 - Métodos no funcionales de arrays

### Ejercicio 1

- Crea un programa que pida por prompt un número y lo añada a un array vacío varias veces
  hasta que se indique la palabra 'STOP'.

- Una vez se haya indicado que pare de pedir números, muestra el array entero por consola (todos sus elementos)

### Ejercicio 2

- Dado el array [3, 10, 'Juan', 'Maria', 'Isabel', 'Antonio'] nos piden que elimines los 2 primeros elementos
  y guardes el resultado en un nuevo array.

- A este nuevo array solamente con los nombres, añade al inicio un nombre que indique el usuario por prompt.

### Ejercicio 3

Dado el siguiente array:

```javascript
['m','e',' ','e','n','c','a','n','t','a',' ','j','a','v','a','s','c','r','i','p','t']
```

- Guarda dos números que pidas al usuario por prompt (entre 0 y la longitud del array).

- Utiliza esos números para devolver un trozo del array.

- Guardarlo en un array nuevo y muestralo.

- Convierte el trozo del array que has sacado a string y muestralo por consola.

### Ejercicio 4

Crea un array con la clasificación de una carrera similar a este:

```javascript
['Antonio', 'Maria', 'Juan', 'Carmen', 'Julia']
```

Vamos a suponer que es el orden de la clasificación de un evento

Durante el transcurso del mismo se modifican las siguientes posiciones

- Julia es eliminada del concurso.
- Detras de Maria y antes de Juan se clasifica un nuevo concursante 'Ramon'
- Descalifican a Antonio que iba líder hasta el momento
- Se clasifica un nuevo concursante que pasa a ser el primero 'Antonia'
- Al finalizar el concurso declaran que el orden va a ser el inverso, por lo que se da la vuelta a toooda la clasificación

Imprime por pantalla el resultado de las modificaciones en el array de clasificación.

---

## Bloque02 - Métodos de string

### Ejercicio 1

Dada la siguiente cadena de texto.

"Vendo Opel Corsa"

Corta la cadena de texto por las posiciones que indique el usuario por prompt y muestralo por consola.

### Ejercicio 2

Comprueba si la letra que indica el usuario se encuentra en alguna de las siguientes palabras:

"sandia", "platano", "melon"

La aplicación no debe distinguir entre mayúsculas y minúsculas para encontrar la letra.

### Ejercicio 3

A partir de la siguiente cadena de texto "Hola Mundo!":

- Reemplaza todas las letras 'a' por 'i' y muestralo.

- Muestra solamente la palabra "Mundo" por consola.

### Ejercicio 4

Pide al usuario una frase que indique por prompt y:

- Muestra la frase con todas las letras en mayúscula.

- Muestra la frase con todas las letras en minúscula.

- Muestra la longitud total de la cadena de texto.

### Ejercicio 5

Convierte la siguiente cadena de texto en un array en el cual cada elemento de este sea cada una de las palabras del texto:

"Hola Mundo 😃"

- En qué posición se encuentra el carácter '😃'?

- Reemplaza el string 'Hola' por 'Adios' y '😃' por '😔'.

---

## Bloque03 - Métodos funcionales de arrays

### Ejercicio 1

Dado el siguiente array `[2, 4, 10, 20, 5]` crea uno nuevo con cada uno de sus valores multiplicado por 2.

### Ejercicio 2

Partiendo de un array como este:

```javascript
 [24, -10, 2, -5, 10]
```

Devuelve un nuevo array solo con los números positivos y ordenalos de menor a mayor.

### Ejercicio 3

Hasta la fecha el mundial de F1 tiene las siguientes puntuaciones:

```javascript
const mundialF1 = [
	{
		nombre: 'Alonso',
		nacionalidad: 'es',
		puntuaciones: [2, 0, 0, 0, 8]
	},
	{
		nombre: 'Leclerc',
		nacionalidad:'mco',
		puntuaciones: [26, 19, 26, 8, 18]
	},
	{
		nombre: 'Verstappen',
		nacionalidad: 'nl',
		puntuaciones: [0, 25, 0, 26, 26]
	},
	{
		nombre: 'Perez',
		nacionalidad: 'mx',
		puntuaciones: [0, 12, 18, 18, 12]
	},
	{
		nombre: 'Sainz',
		nacionalidad: 'es',
		puntuaciones: [18, 15, 0, 0, 15]
	},
	{
		nombre: 'Russel',
		nacionalidad: 'en',
		puntuaciones: [12, 10, 15, 12, 10]
	}
]
```

Crea un nuevo array con el nombre de cada piloto y el total de puntos acumulados hasta el momento.

Ordena el array y muestra por pantalla la clasicación del mundial de pilotos.

### Ejercicio 4

Utiliza el array 'mundialF1' del ejercicio anterior para crear un pequeño buscador de pilotos.

Indica al usuario que busque un piloto por prompt, muestra la información del mismo (nombre, nacionalidad, puntuaciones).
Si no encuentra al piloto deberá volver a pedir al usuario que introduzca una nueva búsqueda.

### Ejercicio 5

Utiliza el array 'mundialF1' del ejercicio 3 y crea a partir de este un nuevo array solo con los pilotos españoles

Modifica los datos que devuelve y quédate solo con el nombre y la nacionalidad.

### Ejercicio 6

Crea un programa que almacene una lista de temperaturas. El programa pedirá de forma repetida las temperaturas
y las irá guardando en un array hasta que se indique la palabra 'STOP' El programa debe permitir:

- Mostrar por pantalla las temperaturas ordenadas de mayor a menor, la temperatura máxima, mínima y la temperatura media.

- Pedir al usuario una temperatura y le dirá si está en la lista o no.

