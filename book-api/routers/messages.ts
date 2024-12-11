import express from "express";

const messagesRouter = express.Router();

messagesRouter.get("/",  async (req, res) => {
    try {

        res.send('hello');

    } catch (e) {
        res.status(500).send('Error :(');
    }

});

export default messagesRouter;