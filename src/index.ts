import "reflect-metadata";
import {createConnection} from "typeorm";

import express from "express";
import indexRouter from "./routes/indexrouter";
import todoRouter from "./routes/todorouter";
var cors = require('cors');

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

    const app = express();

    // Parse JSON bodies for this app. Make sure you put
    // `app.use(express.json())` **before** your route handlers!
    app.use(express.json());

    app.use(cors());

    app.use('/', indexRouter);
    app.use('/todo', todoRouter);

    // default port to listen on
    const port = 8080;

    // start the Express server
    app.listen( port, () => {
        console.log( `server started at http://localhost:${ port }` );
    });

}).catch(error => console.log("TypeORM connection error: ", error));
