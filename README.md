# :books: Descrição do projeto

<p align="justify">
 Criação de uma API REST utilizando javascript, nodeJS, express e sequelize(MySQL), com testes unitários e de integração.
</p>

# :bookmark_tabs: Ferramentas utilizadas 

- Javascript;
- NodeJS;
- Express;
- Docker;
- Docker-compose;
- Sequelize(dialect: MySQL);
- Sequelize-cli;
- Testes unitários(mocha, chai, sinon, sequelize-test-helpers);
- Testes de integração(nyc, mocha, chai, chai-http, mocks);
- Eslint-config-airbnb-base;
- Nodemon;
- Dotenv para a configuração do banco de dados MySQL;


# 💻 Como rodar na minha máquina

## 🐳 Com Docker e Docker-compose

### Dependências mínimas para rodar a aplicação com docker
  - Docker: `Versão usada => Docker version 20.10.14`
  - Docker-compose: `Versão usada => Docker-compose version 1.29.2`

### Clone o projeto e entre na pasta
```
 git clone https://github.com/AndreyNovaes/Ebytr-back-end-teste-tecnico.git
 cd Ebytr-back-end-teste-tecnico
```
### Instale as dependências
```
 npm install
```
### Teste a aplicação
```
 npm test
```
### Suba a aplicação com o compose
```
 npm run compose:up
```
### A aplicação vai estar rodando no localhost na porta 3001, definida no docker-compose.yml
```
http://localhost:${PORT}
```

## :desktop_computer: Localmente, sem o uso do Docker <br>

### Dependências mínimas para rodar a aplicação com docker
  - NodeJS: `Versão usada => NodeJS version v16.14.2`

### Clone o projeto e entre na pasta

```
 git clone https://github.com/AndreyNovaes/Ebytr-back-end-teste-tecnico.git
 cd Ebytr-back-end-teste-tecnico
```

### Instale as dependências

```
 npm install
```

### Teste a aplicação
```
 npm test
```

### Preencha o .env, use esse commando para cria-lo, entre no arquivo .env e preencha com as informações do seu banco de dados MySQL local

```
 cp .env.example .env
```

### Rode a aplicação

```
 npm start
```

### A aplicação estará rodando no localhost com a variável de ambiente PORT
```
http://localhost:${PORT}
```

# Funcionalidades

## 📚 Para ler a documentação do projeto pelo rota '/' pelo navegador é necessária a utilização do plugin JSON Viewer.
[Link do JSON Viewer na chrome web store](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=pt-BR)

- HTTP GET rota "/" documentação da API;
- HTTP GET rota "/tasks" => Listagem de todas tasks. <br>
- HTTP GET rota "/tasks/:id" => Listagem de uma task específica. <br>
- HTTP DELETE rota "/tasks/:id" => Deleção de uma task já existente. <br>
- HTTP PUT rota "/tasks/:id" => Update das características name e descrição de uma task. <br>
- HTTP PUT rota "/tasks/:id/:status" => Update da característica de status de uma task. <br>
