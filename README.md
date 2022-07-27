# Bem vindo ao repositório do App de delivery!

## Metodologias
* Scrum
* Kanban
* Pair programing

## Tecnologias

## Back-end
* Node.js
* Express.js
* Sequelize.js
* Mysql2
* Nodemon
* JWT
* Joi para validations

## Front-end
* Javascript
* React
* Context API
* React Hooks
* CSS

## Como usar


No seu terminal digite:
```
git clone git@github.com:Rodolfomno/delivery-app-full-stack.git

cd delivery-app-full-stack
```

## Startando a aplicação

# inicializando o Backend

Já na raiz do projeto, utilize o comando

```
cd back-backend
```

instale as dependências

```
npm install
```

Inicializando o backend

```
npm run dev
```

# inicializando o Frontend

Já na raiz do projeto, utilize o comando

```
cd front-end
```

instale as dependências

```
npm install
```

Inicializando o backend

```
npm start
```


Após terminar, acesse o link

[http://localhost:3000/](http://localhost:3000/)


## API Endpoints
A aplicação contem os seguintes endpoints:

| Method | Description |
|---|---|
| `POST - localhost:3001/login` | Realiza login do usuário. |
| `GET - localhost:3001/products` | Retorna todos os produtos do banco de dados. |
| `POST - localhost:3001/register` | Realiza registro de um novo usuario no banco de dados. |
| `POST - localhost:3001/sale` | Cria uma nova venda no bando de dados. |
| `GET - localhost:3001/sale/:id` | Retorna todas as vendas de um determinado usuario |
| `PATCH - localhost:3001/sale/:id` | Atualiza status de uma venda. |

