import { useState } from "react";

/*
  En el componente de login juntaremos el estado de un formulario con dos campos
  en una sola variable de estado. Se pueden tener 2 handlers para los cambios en el form
  o uno más genérico que valga para los dos inputs
  Este formulario es CONTROLADO
*/
function Login() {
  /* 
  Almacenaremos nuestro estado en un objeto con campos user y password
  Usaremos este objeto como valor inicial en useState
  */
  const initialState = { user: "", password: "" };

  /*
  En loginForm almacenaremos todo el estado del formulario
  */
  const [loginForm, setLoginForm] = useState(initialState);
  /* Esto repite mucho codigo, las dos funciones son básicamente iguales
    Pero son más fáciles de entender, podéis hacerlo así también
  const handleUser = (e) => {
    const modifiedData = { ...loginForm, user: e.target.value };
    setLoginForm(modifiedData);
  };

  const handlePassword = (e) => {
    const modifiedData = { ...loginForm, password: e.target.value };
    setLoginForm(modifiedData);
  }; */

  /* 
  Esta funcion para actualizar el estado es más genérica y ahorra código
  pero se entiende peor
  Tiene de parámetros el evento y el campo que vamos a actualizar
   */
  const handleChange = (e, field) => {
    /* 
    Lo que hacemos en esta línea es una copia de lo que teníamos en loginForm creando un nuevo objeto
    Y sobreescribimos el dato del campo que ha disparado el evento en el field que corresponde
    */
    const modifiedData = { ...loginForm, [field]: e.target.value };
    setLoginForm(modifiedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginForm);
    /* Con esta linea al hacer submit, vaciamos el formulario al asignarle el estado inicial */
    setLoginForm(initialState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">USUARIO</label>
        {/* 
        Formulario controlado por lo que asignamos el value desde nuestro estado
        En este caso es el campo de usuario, asi que tenemos que acceder al atributo user del estado de loginForm
        En el onChange creamos un callback con una arrowfunction y dentro invocamos a handlechange le pasamos
          -El evento
          -El campo del estado que queremos actualizar
        */}
        <input
          value={loginForm.user}
          onChange={(e) => {
            handleChange(e, "user");
          }}
          name="user"
          id="user"
        />
        <label htmlFor="password">CONTRASEÑA</label>
        <input
          value={loginForm.password}
          onChange={(e) => {
            handleChange(e, "password");
          }}
          name="password"
          id="password"
          type="password"
        />
        <button type="submit">ENVIAR</button>
        {/* Este botón vacía el formulario volviéndole a asignar el valor inicial que tenemos almacenado */}
        <button
          onClick={() => {
            setLoginForm(initialState);
          }}
        >
          LIMPIAR
        </button>
      </form>
      USER: {loginForm.user}
      PASSWORD: {loginForm.password}
    </>
  );
}

export default Login;
