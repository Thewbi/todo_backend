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

    const user = req.body;

     // get a repository to perform operations
    const userRepository = getManager().getRepository(User);

    let savedUser = userRepository.save(user).then(user => {
        res.send(user);
    });

});

todoRouter.get('/all', async function (req, res, next) {

    // get a repository to perform operations
    const userRepository = getManager().getRepository(User);

    // load all entities
    const users = await userRepository.find();

    // return loaded entities
    res.send(users);

});

todoRouter.delete('/delete/:userId', async function (req, res, next) {

    // get a repository to perform operations
    const userRepository = getManager().getRepository(User);

    // load all entities
    const users = await userRepository.delete(req.params.userId);

    // return loaded entities
    res.send('OK');

});

export default todoRouter;
