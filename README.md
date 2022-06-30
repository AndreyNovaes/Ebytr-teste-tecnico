# Tópicos 

- [Descrição do projeto](#descrição-do-projeto)

- [Funcionalidades](#funcionalidades)

- [Ferramentas utilizadas](#ferramentas-utilizadas)

- [Como rodar na minha máquina](#Como-rodar-na-minha-máquina)

# Descrição do projeto

<p align="justify">
 Criação de uma API REST utilizando javascript, nodeJS, express e sequelize(MySQL), com testes unitários e de integração.
</p>

# Ferramentas utilizadas

- Javascript;
- NodeJS;
- Express;
- Sequelize(dialect: MySQL);
- Sequelize-cli;
- Testes unitários(mocha, chai, sinon, sequelize-test-helpers);
- Testes de integração(nyc, mocha, chai, chai-http, database para testes);
- Eslint-config-airbnb-base;
- Dotenv para a configuração do banco de dados MySQL;


# Como rodar na minha máquina 💻

## Localmente, sem o uso do Docker <br>

### Clone o projeto

```
 git clone https://github.com/AndreyNovaes/Ebytr-back-end-teste-tecnico.git
```
### Instale as dependências

```
 npm install
```

### Rodar a aplicação

```
 npm start
```

### A aplicação estará rodando no localhost com a variável de ambiente PORT
```
http://localhost:${PORT}
```

## Como testar a aplicação localmente

### Suba o banco de testes
```
npm run start:test
```
### Teste a aplicação
```
npm test
```

##  Com Docker e Docker-compose 🐳

### Clone o projeto
```
 git clone https://github.com/AndreyNovaes/Ebytr-back-end-teste-tecnico.git
```
### Suba a aplicação com o compose
```
 npm run compose:up
```
### A aplicação vai estar rodando no localhost na porta 3001, definida no docker-compose.yml
```
http://localhost:${PORT}
```
## Como testar a aplicação com docker


# Funcionalidades

- HTTP GET rota "/" => Documentação da API. <br>
- HTTP GET rota "/tasks" => Listagem de todas tasks. <br>
- HTTP GET rota "/tasks/:id" => Listagem de uma task específica. <br>
- HTTP DELETE rota "/tasks/:id" => Deleção de uma task já existente. <br>
- HTTP PUT rota "/tasks/:id" => Update das características name e descrição de uma task. <br>
- HTTP PUT rota "/tasks/:id/:status" => Update da característica de status de uma task. <br>

