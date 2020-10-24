<h1 align="center">
    <img alt="Conta Simples" src="./.github/logo.jpg" />
    <br>
    Conta Simples
</h1>

<h4 align="center">
  Dashboard Conta Simples
</h4>

<p align="center">
  <a href="#four_leaf_clover-tecnologias-utilizadas">Tecnologias utilizadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-subindo-a-aplicação">Subindo a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<h2 align="center">
  <img alt="Página de login" src="./.github/login-page.png" />
</h2>

<p align="center">
  <a href="https://simples-dashboard.vercel.app/" target="_blank">
    <img alt="See on vercel" src="./.github/demo-on-vercel.png">
  </a>
</p>

## :four_leaf_clover: Tecnologias utilizadas

Esse projeto está sendo desenvolvido com as seguintes tecnologias.

- [ReactJS](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [react-router-dom](https://github.com/ReactTraining/react-router)
- [styled-components](https://www.styled-components.com/)
- [React-Icons](https://react-icons.netlify.com/)
- [json-server](https://github.com/typicode/json-server)
- [@agney/react-loading](https://github.com/agneym/react-loading)
- [Concurrently](https://github.com/kimmobrunfeldt/concurrently)
- [Victory](https://github.com/formidablelabs/victory)
- [VS Code][vc]

## :rocket: Subindo a aplicação

Para clonar e subir a aplicação, é necessário ter o [Git](https://git-scm.com) e o [Node.js][nodejs] instalados em sua máquina.

```bash
# Faça um clone da aplicação.
$ git clone https://github.com/Aouza/conta-simples-dashboard

# Vá até o repositório.
$ cd conta-simples

# Instale as dependências.
$ yarn

# Ou

$ npm install

# Suba a aplicação.
$ yarn start

# Ou

$ npm run start

# Caso a API fake não suba:
$ yarn json-server --watch -p 3333 src/services/api.json

# Ou

$ npx json-server --watch -p 3333 src/services/api.json
```

---

[Alison Souza no LinkedIn](https://www.linkedin.com/in/alisonsouza/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
