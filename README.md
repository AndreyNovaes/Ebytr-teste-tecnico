# :books: Descrição do projeto

<p align="justify">
 Criação de aplicação de gerenciamento de tarefas com front-end em ReactJS, estilizado com chakra UI e back-end em NodeJS.
</p>

# :bookmark_tabs: Ferramentas utilizadas 

- Javascript;
- ReactJS;
- Chakra UI;
- Express;
- Docker;
- Sequelize;
- MySQL2;
- Testes unitários;
- Testes de integração;

# 💻 Como rodar na minha máquina

## 🐳 Com Docker e Docker-compose

### Dependências mínimas para rodar a aplicação com docker
  - Docker: `Versão usada => Docker version 20.10.14`
  - Docker-compose: `Versão usada => Docker-compose version 1.29.2`

### Clone o projeto e entre na pasta
```
 git clone https://github.com/AndreyNovaes/Ebytr-teste-tecnico.git
 cd Ebytr-teste-tecnico
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
### O banco de dados vai estar rodando na porta 3002, definida no docker-compose
```
http://localhost:3002
```
## :desktop_computer: Localmente, sem o uso do Docker <br>

### Dependências mínimas para rodar a aplicação
  - NodeJS: `Versão usada => NodeJS version v16.14.2`

### Clone o projeto, entre na pasta e instale as dependências

```
 git clone https://github.com/AndreyNovaes/Ebytr-teste-tecnico.git
 cd Ebytr-teste-tecnico
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
http://localhost:3001
```

### abra um novo terminal e entre na pasta raiz do projeto
  
``` 
 cd Ebytr-teste-tecnico
```

### Entre na pasta front-end e instale as dependências

```
 cd front-end
 npm install
```
### Preencha o .env caso tenha mudado a porta da API
```
 cp .env.example .env
```
### Rode a aplicação
```
npm start
```

### O front-end estará rodando na porta 3000
```
http://localhost:3000/
```

# Funcionalidades

## 📚 É recomendado a utilização do seu navegador com o plugin JSON Viewer para a leitura da documentação do back-end.
[Link do JSON Viewer na chrome web store](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh?hl=pt-BR)
```
http://localhost:3001
```

- HTTP GET rota "/" documentação da API;
- HTTP GET rota "/tasks" => Listagem de todas tasks. <br>
- HTTP GET rota "/tasks/:id" => Listagem de uma task específica. <br>
- HTTP DELETE rota "/tasks/:id" => Deleção de uma task já existente. <br>
- HTTP PUT rota "/tasks/:id" => Update das características name e descrição de uma task. <br>
- HTTP PUT rota "/tasks/:id/:status" => Update da característica de status de uma task. <br>

