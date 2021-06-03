# Quickstart

**Hint:** Make sure no server is binding to the port already. Otherwise the next server will fail to bind to the port during startup!

```
npm i
npm run build
npm run start
```

Stop the server using CTRL + c or

```
ps
kill -9 <PID>
```

Visit the URLs in the browser or via a REST API tool.

# REST API

## Create

```
POST http://localhost:8080/todo/create
```

```
{
    "title": "Clean Room",
    "description": "Do it!"
}
```

## Retrieve

```
GET http://localhost:8080/todo/all
```

## Update

Use a todo and supply it's id. The id contained in the response when the Todo is initially created!

```
POST http://localhost:8080/todo/create
```

```
{
    "title": "Clean YOUR Room",
    "description": "Do it! Do it now!",
    "id": 2
}
```

## Delete

Call the URL below and replace <ID> with the id of the Todo you want to delete.
The ids are returned in the Retrieve operations or when a Todo is created initially.

```
DELETE http://localhost:8080/todo/delete/<ID>
```

Example:

```
DELETE http://localhost:8080/todo/delete/1
```

# Creating the app

See: https://github.com/Thewbi/express_typescript_boilerplate

## CommonJS vs ES6 Modules

TypeORM seems to work correctly with CommonJS modules and it fails to import the Column class using ES6 modules.

This is the reason why this project uses CommonJS modules. It does not matter really because by using typescript, you will never lookt at the generated javascript files anyways. It does not matter weather those javascript files use CommonJS or ES6 modules.

## Persistence

### Install Postgre SQL

Installation Directory: /Library/PostgreSQL/13
Server Installation Directory: /Library/PostgreSQL/13
Data Directory: /Library/PostgreSQL/13/data
Database Port: 5432
Database Superuser: postgres
Operating System Account: postgres
Database Service: postgresql-13
Command Line Tools Installation Directory: /Library/PostgreSQL/13
pgAdmin4 Installation Directory: /Library/PostgreSQL/13/pgAdmin 4
Stack Builder Installation Directory: /Library/PostgreSQL/13

**Create a database**
https://www.postgresql.org/docs/12/tutorial-createdb.html

```
cd /Library/PostgreSQL/13/bin
./createdb todo
./createdb --username=postgres todo
```

**Update TypeORM to work with postgresql 13**
in package.json change "typeorm": "^0.2.20" to "typeorm": "^0.2.21"

### Add TypeORM to the typescript application

```
npm install typeorm --save
npm install typeorm -g
npm install reflect-metadata --save
npm install @types/node --save-dev
```

In src/index.ts, import "reflect-metadata";

```
import "reflect-metadata";
```

Install postgresql driver

```
npm install pg --save
```

Initialize typeorm

```
typeorm init
```
