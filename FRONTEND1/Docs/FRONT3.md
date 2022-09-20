# Eventos

Los eventos de React se nombran usando camelCase, en vez de minúsculas. Con JSX pasas una función como el manejador del evento, en vez de un string.

```js
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

Para prevenir el comportamiento por defecto deberemos usar preventDefault

```js
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```

En este caso `e` es un evento definido por react acorde a las especificaciones W3C, por lo que es compatible con los distintos navegadores. Aunque estos eventos no funcionan exactamente igual a los nativos, [más info aquí](https://es.reactjs.org/docs/events.html)

Con react lo habitual es no llamar a `addEventListener` para añadir listeners, lo que haremos será dar un handler o manejador cuando el componente se renderiza inicialmente.

Si queremos pasar más argumentos al handler lo podemos hacer de la siguiente manera

```js
<button onClick={(e) => deleteRow(id, e)}>Delete Row</button>
```

# Renderizado condicional

A veces nos interesa mostrar un componente u otro de forma condicional, veamos un ejemplo

```js
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Intentar cambiando isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

Este ejemplo renderiza un saludo diferente según el valor del prop `isLoggedIn`.

El siguiente ejemplo lo hace con el operador `&&`de JS dentro de unas llaves.

```js
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```

Si queremos hacer el equivalente a un if-else podemos usar el operador ternario

```js
const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
  ```
  
Si no queremos que se renderice el componente podemos devolver `null` cuando queramos ocultarlo. Esto es últil en caso de que no queramos mostrar este componente en el DOM, pero si que nos interese que su lógica se ejecute. Los métodos de ciclo de vida del componente tambiñen se ejecutarán (los veremos más adelante).
