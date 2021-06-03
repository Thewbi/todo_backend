import express from "express";

import "reflect-metadata";
import {createConnection} from "typeorm";

import {User} from "../entity/User";

import {getManager} from "typeorm";

var todoRouter = express.Router();

class Result {
    constructor(message:string, code:number) {
        this.message = message;
        this.code = code;
    }
  message: string;
  code: number;
};

todoRouter.post('/create', async function (req, res, next) {

    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;

     // get a repository to perform operations
    const userRepository = getManager().getRepository(User);

    // load all entities
    const newUser = await userRepository.create(user);

    userRepository.save(newUser);

    // return loaded entities
    res.send(newUser);

    // // console.log(req);

    // // let result: Result;
    // // result = new Result("Your data was processed! Result:OK", 123);

    // // res.status(200).send(result);
    // const existentConn = getConnectionManager().get("default");

    // createConnection().then(async connection => {
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // return user;



    // }).then((user) => {
    //     res.send(JSON.stringify(user));
    // }).catch(error => {
    //     console.log(error);
    // res.send("ERROR");});

     //res.send('OK');
});

todoRouter.get('/all', async function (req, res, next) {

    // get a repository to perform operations
    const userRepository = getManager().getRepository(User);

    // load all entities
    const users = await userRepository.find();

    // return loaded entities
    res.send(users);

    // createConnection().then(async connection => {
    // // console.log("Inserting a new user into the database...");
    // // const user = new User();
    // // user.firstName = "Timber";
    // // user.lastName = "Saw";
    // // user.age = 25;
    // // await connection.manager.save(user);
    // // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);


    // return users;

    // }).then((users) => {
    //     res.send(JSON.stringify(users));
    // }).catch(error => {
    //     console.log(error);
    // res.send("ERROR");});


});

export default todoRouter;
