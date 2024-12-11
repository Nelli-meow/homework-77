import express from "express";

const messagesRouter = express.Router();

messagesRouter.get("/",  async (req, res) => {
    try {

        res.status('hello');

    } catch (e) {
        res.status(500).send('Error :(');
    }

});