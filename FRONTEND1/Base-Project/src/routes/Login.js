import Navigation from "../components/Navigation";

import { useState } from "react";
import { postLogin } from "../http/user-api";
import useToken from "../hooks/useToken";
import useAdmin from "../hooks/useAdmin";

function Login() {
  const initialState = { email: "", password: "" };

  const [loginForm, setLoginForm] = useState(initialState);

  const { updateToken } = useToken();
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
    postLogin(loginForm).then((loginData) => {
      localStorage.setItem("token", loginData.data);
      updateToken();
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">USUARIO</label>
        <input
          value={loginForm.email}
          onChange={(e) => {
            handleChange(e, "email");
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
      USER: {loginForm.email}
      PASSWORD: {loginForm.password}
    </>
  );
}

export default Login;
