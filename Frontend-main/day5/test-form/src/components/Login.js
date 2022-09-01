import { useState } from "react";

function Login() {
  const initialState = { user: "", password: "" };

  const [loginForm, setLoginForm] = useState(initialState);
  /* Esto repite mucho codigo, las dos funciones son básicamente iguales
  const handleUser = (e) => {
    const modifiedData = { ...loginForm, user: e.target.value };
    setLoginForm(modifiedData);
  };

  const handlePassword = (e) => {
    const modifiedData = { ...loginForm, password: e.target.value };
    setLoginForm(modifiedData);
  }; */

  const handleChange = (e, field) => {
    const modifiedData = { ...loginForm, [field]: e.target.value };
    setLoginForm(modifiedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginForm);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">USUARIO</label>
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

