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

# Creating the app

See: https://github.com/Thewbi/express_typescript_boilerplate

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
