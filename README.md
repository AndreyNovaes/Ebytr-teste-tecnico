### Tópicos 

- [Descrição do projeto](#descrição-do-projeto)

- [Funcionalidades](#funcionalidades)

- [Ferramentas utilizadas](#ferramentas-utilizadas)

- [Como rodar na minha máquina](#como-rodar-na-minha-máquina)

## Descrição do projeto

<p align="justify">
 Criação de uma API REST utilizando javascript, nodeJS, express e sequelize(MySQL), com testes unitários e de integração.
</p>

## Funcionalidades

- HTTP GET rota "/" => Documentação da API. <br>
- HTTP GET rota "/tasks" => Listagem de todas tasks. <br>
- HTTP GET rota "/tasks/:id" => Listagem de uma task específica. <br>
- HTTP DELETE rota "/tasks/:id" => Deleção de uma task já existente. <br>
- HTTP PUT rota "/tasks/:id" => Update das características name e descrição de uma task. <br>
- HTTP PUT rota "/tasks/:id/:status" => Update da característica de status de uma task. <br>

## Ferramentas utilizadas

- Javascript;
- NodeJS;
- Express;
- Sequelize(dialect: MySQL);
- Sequelize-cli;
- Testes unitários(mocha, chai, sinon, sequelize-test-helpers);
- Testes de integração(nyc, mocha, chai, chai-http, database para testes);
- Eslint-config-airbnb-base;
- Dotenv para a configuração do banco de dados MySQL;

## Como rodar na minha máquina

### 🐳 Com Docker e Docker-compose

:small_blue_diamond: [Como rodar a aplicação] <br>
- :heavy_check_mark: No terminal, clone o projeto:
```
 - git clone https://github.com/AndreyNovaes/Ebytr-back-end-teste-tecnico.git
```
- :heavy_check_mark: Na pasta raiz da aplicação preencher o .env.example, após preencher retire o .example deixando o nome do arquivo apenas .env
- :heavy_check_mark: Suba a aplicação para o container com o comando:
```
 - npm run compose:up
```
- :heavy_check_mark: Pronto, sua aplicação vai estar rodando no host e na porta especificada PORT dentro do .env <br>

:small_blue_diamond: [Como rodar os testes] <br>
- :heavy_check_mark: Faça a instalação das dependencias com o comando:
```
 - npm install
```
- :heavy_check_mark: Rode o script que vai subir o banco de dados de testes e roda-los
```
 - npm run start:test
```
- :heavy_check_mark: Pronto, sua aplicação vai estar rodando no host e na porta especificada PORT_TEST dentro do .env <br>



 







