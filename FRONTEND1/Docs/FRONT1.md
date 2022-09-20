# Front end

Las aplicaciones web modernas suelen estar divididas en dos partes bien diferenciadas, el front end y el back end. Podemos pensar en un proyecto de aplicación web como si se tratase de un restaurante. Los usuarios de un restaurante interactúan en el comedor con los camareros y piden sus platos, pero estos platos se ejecutan en la cocina y se acaban enviando al comedor.

En el módulo de JS2 ya habéis tenido algo de experiencia con el front end, si bien de una manera más manual. Para llevar a cabo el módulo de front end y la parte del proyecto de correspondiente usaremos una pequeña ayuda en la forma de librería. Esta librería es React.

# React

React es una librería de código abierto mantenida por Facebook y la comunidad. Se usa para construir interfaces de usuario. Con ella podemos construir aplicaciones single-page, aunque no todas las aplicaciones hechas con React deben serlo.

La principal diferencia entre una librería como react o un framework como Angular o Vue es que mientras que con los frameworks muchas de las decisiones sobre como se van a montar los proyectos vienen decididas de antemano, con React podemos tomar la decisión nosotros mismos.

Podemos agregar react a cualquier página web con un par de etiquetas script, aunque en este módulo nos centraremos en como crear un proyecto react desde cero con la ayuda de Create React App. Aunque hay más herramientas similares que cumplen el mismo cometido.

# Create React App

[Create React App](https://create-react-app.dev/) es una herramienta que nos permite generar un nuevo proyecto de React. En este nuevo proyecto que vamos a crear tendremos unas cuantas cosas incluidas, aunque las veremos a continuación. Primero vamos a ver como crear uno de estos proyectos.

## Crear una aplicación nueva

Crear una nueva aplicación con Create React App es muy sencillo, solo necesitaremos los siguientes comandos:


```zsh
npx create-react-app app-fantabulastica
cd app-fantabulastica
npm start
```

Después de estos comandos el proyecto estará iniciado y habremos arrancado un servidor local de pruebas en el que podremos ver lo que vayamos programando

## Scripts incorporados

Dentro del fichero `package.json` podemos ver que se han creado cuatro scripts.

- `start` Arranca el servidor local que mencionamos antes. Se invoca con `npm start`
- `build` Genera un build de producción dentro de la carpeta `build` de nuestro proyecto. Este bundle tiene optimizaciones para mejorar el rendimiento de la aplicación y podemos poner estos ficheros en un servidor para que otros usuarios puedan usar nuestra aplicación. Se invoca con `npm run build`
- `test` Create React App viene preconfigurada para poder empezar a testear nuestro código desde el primer momento con Jest. Se invoca con `npm run test`
- `eject` Es una operación sin vuelta atrás **NO SE PUEDE DESHACER**. Se utiliza para hacer optimizaciones o cambios en nuestra build si la que trae Create React App por defecto no se adapta a nuestras necesidades. Nosotros no lo usaremos. Se invoca con `npm run eject`.

## Hola React!

A pesar de que el proyecto que tenemos inicializado ya trae incluido un componente, si quisieramos hacer un ejemplo todavía más sencillo podríamos ir a `index.js` y cambiar la linea que contiene `ReactDOM.render` por lo siguiente

```js
ReactDOM.render(
  <h1>Hola React!</h1>,
  document.getElementById('root')
);
```

# JSX

Una cosa que es bastante extraña en el último bloque de código es que tenemos una etiqueda HTML en el medio de código JS, pero no está rodeada de comillas como si fuese un string. Esto es debido a que **no es un string**. Es código JSX. JSX no es obligatorio en los proyectos con React, pero es usado en la amplia mayoría de proyectos.

Con JSX tendremos mezclados en el mismo fichero HTML CSS y JS. Pero...

## ¿Qué es?

JSX es una extensión de la sintaxis de Javascript que produce elementos de React. Nos permitirá programar de una manera mucho más intuitiva, visual y breve cuando generamos código de React.

Podemos probar como funciona JSX en el [siguiente enlace de Babel](https://babeljs.io/repl) y seleccionando el plugin de JSX.

## Expresiones

En el siguiente ejemplo podemos ver como introducir una expresion dentro del código JSX.

```js
const name = 'Firulais';
const element = <h1>Hola, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

En este caso hemos elegido insertar un string, pero podemos insertar dentro de esas llaves cualquier expresion JS que queramos.

```js
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
## JSX también es una expresión

Aunque no lo parece cuando lo programamos, después de transpilarse JSX se convierte en llamadas a funciones de JavaScript. Con lo que podemos tratarlo como cualquier otro dato de JS que se nos ocurra.

```js
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

## Atributos

Se pueden utilizar comillas para expecificar strings literales como atributos.

```js
const element = <div tabIndex="0"></div>;
```

También podemos introducir una expresion JS en un atributo

```js
const element = <img src={user.avatarUrl}></img>;
```

Si la etiqueta no tiene hijos la podemos poner con la siguiente sintaxis.

```js
const element = <img src={user.avatarUrl} />;
```

## Hijos

Las etiquetas pueden tener hijos, funciona como nos esperaríamos en HTML

```js
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

## Camel Case

Como JSX está mas cerca de la nomenclatura de JS que de HTML, usaremos camel case. Así por ejemplo el atributo `class` pasa a ser  `className` o `tabindex` se vuelve `tabIndex`