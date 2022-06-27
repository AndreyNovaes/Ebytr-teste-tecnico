### Tópicos 
Criação de um back-end com node e express para a criação de uma aplicação full-stack

- [Descrição do projeto](#descrição-do-projeto)

- [Funcionalidades](#funcionalidades)

- [Ferramentas utilizadas](#ferramentas-utilizadas)

- [Acesso ao projeto](#acesso-ao-projeto)

## Descrição do projeto

<p align="justify">
 Criação de uma API REST utilizando javascript, nodeJS, express e sequelize(MySQL), com testes unitários e de integração.
</p>

## Banco de dados

### MySQL
### Sequelize ORM
### Exemplo do formato da tabela Task
<p align="center"><img width="80%" src="./assets/tableExample.png"></p>

## Funcionalidades

### HTTP GET rota "/" => Documentação da API. <br>
### HTTP GET rota "/tasks" => Listagem de todas tasks. <br>
### HTTP GET rota "/tasks/:id" => Listagem de uma task específica. <br>
### HTTP DELETE rota "/tasks/:id" => Deleção de uma task já existente. <br>
### HTTP PUT rota "/tasks/:id" => Update das características name e descrição de uma task. <br>
### HTTP PUT rota "/tasks/:id/:status" => Update da característica de status de uma task. <br>

## Ferramentas utilizadas

### - Javascript;
### - NodeJS;
### - Express;
### - Sequelize(dialect: MySQL);
### - Sequelize-cli;
### - Testes unitários(mocha, chai, sinon, sequelize-test-helpers);
### - Testes de integração(nyc, mocha, chai, chai-http, database para testes);
### - Eslint-config-airbnb-base;
### - Dotenv para a configuração do banco de dados MySQL;

## Acesso ao projeto
  Acesse o link do [DEPLOY](https://gtmudin.github.io/Ebytr-back-end-teste-tecnico/.)
