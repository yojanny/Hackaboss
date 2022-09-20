# DOM virtual

El VDOM es un concepto es un concepto de programación donde una representación virtual de la UI se mantiene en memoria. Esta representación se mantiene en memoria y sincronizada con el DOM "real" con una librería como ReactDOM. Este proceso se denomina reconciliación. El DOM virtual en el mundo de React suele asociarse a los React Elements, ya que estos son objetos que representan la interfaz de usuario.

## Shadow DOM !== Virtual DOM

El shadow dom es una tecnología de los navegadores diseñada para limitar el scope de las variables y el CSS. El virtual DOM es un concepto que las librerías de Javascript implementan por encima de las APIs del navegador.

## React Fiber

Es el motor de reconciliación de React 16, se encarga del renderizado incremental del DOM.

# Renderizando elementos

Un elemento describe algo que queremos ver en la pantalla, por ejemplo

```js
const element = <h1>Holi amiguis</h1>;
```

Los elementos de React son mucho más ligeros que los de los navegadores, así que el coste de creación es bajo.

Los elementos **NO** son componentes, pero los componentes si están hechos de elementos.

Si tuviésemos un documento HTML como el siguiente

```html
<div id="root"></div>
```

Podríamos renderizar en él un elemento de la siguiente manera con ReactDOM

```js
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

Es importante recordar que React sólo puede tener un nodo raiz, aunque podemos tener múltiples nodos raiz de React, pero estos deben de estar aislados.

## Actualizar elementos renderizados

Los elementos son **inmutables**, representan un fotográma de una película que queda congelado en el tiempo. Una vez que se crea un elemento no se puede cambiar sus hijos o atributos. Así que para actualizar un elemento que mostramos la opción que tenemos es crear uno nuevo que represente el nuevo fotograma y pasarlo por `ReactDOM.render`

```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

La mayoría de aplicaciones usan ReactDOM.render una vez y para actualizarse emplean componentes con estado que veremos más adelante.

## Las actualizaciones de React son eficientes

Y son eficientes sin costarnos a nosotros esfuerzo extra, podemos comprobar esto en las devtools viendo las cosas que se actualizan en el DOM viendo el ejemplo anterior en ejecución.

Aunque el elemento represente una parte grande del DOM, React sólo actualiza lo que es necesario, por eso es útil pensar en los elementos de React como fotogramas puntuales y no pensar en como cambian con el tiempo.

# Componentes

Los componentes son trozos de interfaz que podemos reutilizar múltiples veces. Los componentes se parecen a las funciones de JS que ya conocemos, nos permiten reutilizar múltiples veces lógica que implementamos una sola vez, admiten unos parámetros de entrada que llamaremos `props` y tienen como salida elementos que describen lo que se debe mostrar al usuario.

## Componentes funcionales

Es la manera más sencilla de declarar un componente, así declararíamos un componente funcional sencillo con props:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

Esta función acepta unas propiedades o props, y devuelve un elemento de React.

## Componentes de clase

También podemos declarar componentes con la sintaxis de clase de ES6

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Los dos últimos ejemplos implementan componentes equivalentes

## Componentes dentro de componentes

La salida de un componente puede hacer referencia a otros componentes, de esta manera podemos usarlos como piezas de lego para conseguir una interfaz más compleja. Es importante que cada uno de los componentes haga una cosa y no dejar que crezcan demasiado.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Lo más normal es que en lo más alto de la jerarquía de nuestra app se encuentre un sólo componente, aunque podemos hacer que solo una pequeña parte de la interfaz con React.

## Partir componentes en componentes más pequeños es fácil

Pero mantener componentes enormes se complica muy rápido y disminuye nuestra eficiencia. No tengáis miedo de partir un componente en varios. Por ejemplo:

```js
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

De este componente podemos sacar por ejemplo un componente para el avatar al que le pasaremos las props que necesita para renderizar su contenido ultimamente.

```js
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

También podemos hacer un componente para la información del comentario que incluya al avatar

```js
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```


Este Avatar y UserInfo los podemos usar dentro del componente de Comment que veíamos antes y queda bastante más simple

```js
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

Cuantos más componentes tengamos más fácil es reutilizarlos, porque un componente muy grande suele estar muy acoplado a un uso concreto.

## Las props son sólo de lectura

**No debemos modificar nunca nunca las props**. Un componente debe comportarse como una función pura con respecto a sus props.

Una función es pura cuando para unas entradas, tiene la misma salida y además no tiene efectos colaterales. Hacer funciones puras es un buen indicio de que estamos haciendo código limpio. Aunque a veces nos interesará tener funciones que no sean puras como puede ser el caso de Math.random().

**Todos los componentes de React deben actuar como funciones puras con respecto a sus props.**