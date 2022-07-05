# :books: Descrição do projeto

<p align="justify">
 Criação de aplicação de tarefas com front-end em ReactJS, estilizado com chakra UI e back-end em NodeJS.
</p>

# :bookmark_tabs: Ferramentas utilizadas 

- Javascript;
- ReactJS;
- Chakra UI;
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
 cd Ebytr-teste-tecnico
```
### Instale as dependências
```
 npm install
```
### Suba a aplicação com o compose
```
 npm run compose:up
```
### O front-end vai estar rodando na porta 3000, definida no docker-compose
```
http://localhost:3000
```
### O back-end vai estar rodando na porta 3001, definida no docker-compose
```
http://localhost:3001
```
## :desktop_computer: Localmente, sem o uso do Docker <br>

### Dependências mínimas para rodar a aplicação
  - NodeJS: `Versão usada => NodeJS version v16.14.2`

### Clone o projeto e entre na pasta

```
 git clone https://github.com/AndreyNovaes/Ebytr-back-end-teste-tecnico.git
 cd Ebytr-teste-tecnico
```

### Instale as dependências

```
 npm install
```

### Preencha o .env, dentro da pasta back-end, use esse commando para cria-lo, entre no arquivo .env e preencha com as informações do seu banco de dados MySQL local

```
 cd back-end
 cp .env.example .env
```

### Rode a aplicação

```
 npm start
```

### O back-end estará rodando na porta 3001
```
http://localhost:${PORT}
```

### Volte a pasta raiz do Ebytr-teste-tecnico e entre na pasta front-end
```
 cd ..
 cd front-end
```
### Preencha o .env caso deseje usar uma porta diferente de 3000
```
 cp .env.example .env
```
### Rode a aplicação
```
npm start
```

# Funcionalidades

## 📚 É recomendado a utilização do seu navagador com o plugin JSON Viewer para a leitura da documentação do back-end.
[Link do JSON Viewer na chrome web store](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=pt-BR)
```
http://localhost:3001
````
- HTTP GET rota "/" documentação da API;
- HTTP GET rota "/tasks" => Listagem de todas tasks. <br>
- HTTP GET rota "/tasks/:id" => Listagem de uma task específica. <br>
- HTTP DELETE rota "/tasks/:id" => Deleção de uma task já existente. <br>
- HTTP PUT rota "/tasks/:id" => Update das características name e descrição de uma task. <br>
- HTTP PUT rota "/tasks/:id/:status" => Update da característica de status de uma task. <br>
