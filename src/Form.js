import React, { useState } from "react";
import "./Form.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Nome: ${name} \nEmail: ${email}\nLogin: ${login}\nSenha: ${password}`);
  };
  return (
    <div id="container" className="center">
      <div id="titulo">
        <h1>Cadastro</h1>
      </div>
      <form id="form" onSubmit={handleSubmit}>
        <label> Nome Completo </label>
        <input
          required
          className="input jump"
          type="text"
          name="firstname"
          size="15"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label> Email: </label>
        <input
          required
          className="input jump"
          type="text"
          name="email"
          size="15"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label> Login: </label>
        <input
          required
          className="input jump"
          type="text"
          name="login"
          size="15"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <label> Senha: </label>
        <input
          required
          className="input jump"
          type="password"
          name="password"
          size="15"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
