# Ejercicio node 2

- En los ejercicios de la anterior semana había un ejercicio que proponía crear un programa de node que guardara en un archivo json información de fechas y eventos. Este programa funcionaba usando el terminal. Esta semana tienes que hacer una API en express que haga lo mismo pero usando peticiones HTTP. Tienes que crear estas rutas:
  - GET a la ruta `/list`: devuelve un JSON con todos los eventos guardados en el archivo
  - POST a la ruta `/new`: guarda un nuevo evento en el archivo, tienes que enviar los datos necesarios (fecha y evento) usando el body de la petición.
- Bonus: validar con joi que los datos enviados a la ruta `/new` tienen un formato correcto.

# Ejercicio 3:

Partiendo del ejercicio anterior:

Crea un middleware que "proteja" la ruta /new para que solo permita crear un nuevo evento si se manda un campo extra en el body con el nombre secret con un valor específico secreto establecido por ti.
Bonus: el valor correcto del campo secret no puede estar escrito en el código JS si no en un archivo .env aparte. Usa el módulo dotenv para leer ese archivo.
