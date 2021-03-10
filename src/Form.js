import React, { useState } from "react";
import "./Form.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (prop) => {
  const [name, setName] = useState({
    name: "",
  });
  const [email, setEmail] = useState({
    email: "",
  });
  const [login, setLogin] = useState({
    login: "",
  });
  const [password, setPassword] = useState({
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = [
      {
        name: { name },
        email: { email },
        login: { login },
        password: { password },
      },
    ];

    const newDiv = document.createElement("div");
    const newBtn = document.createElement("button");
    newBtn.type = "submit";
    newBtn.className = "center";
    newBtn.innerHTML = "Confirmar";
    newBtn.id = "user-confirm-data";
    newDiv.id = "inserted-data";

    newDiv.innerHTML = `Dados inseridos: ${name}, ${email}, ${login}, ${password}`;

    document.getElementById("root").append(newDiv);
    document.getElementById("root").append(newBtn);

    // console.log(
    //   `Nome: ${name} \nEmail: ${email}\nLogin: ${login}\nSenha: ${password}`
    // );
    console.log(JSON.stringify(newUser, undefined, 2));
  };

  return (
    <div id="container" className="center">
      <div id="titulo">
        <h1>Cadastro</h1>
      </div>
      <form id="form" onSubmit={handleSubmit}>
        <label> Nome Completo </label>
        <input
          autoFocus
          required
          className="input jump"
          type="text"
          name="firstname"
          size="15"
          onChange={(e) => setName(e.target.value)}
          value={prop.name}
        />
        <label> Email: </label>
        <input
          required
          className="input jump"
          type="text"
          name="email"
          size="15"
          onChange={(e) => setEmail(e.target.value)}
          value={prop.email}
        />
        <label> Login: </label>
        <input
          required
          className="input jump"
          type="text"
          name="login"
          size="15"
          onChange={(e) => setLogin(e.target.value)}
          value={prop.login}
        />
        <label> Senha: </label>
        <input
          required
          className="input jump"
          type="password"
          name="password"
          size="15"
          onChange={(e) => setPassword(e.target.value)}
          value={prop.password}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
