import express from "express";
import fileDb from "../fileDb";
import {MessageWithoutId} from "../types";
import {imagesUpload} from "../multer";

interface bodyContext {
    message: string;
    author: string;
    image: string;
}

const messagesRouter = express.Router();

messagesRouter.get("/",  async (req, res) => {
    try {
        const messages = await fileDb.getMessages();

        res.status(200).send(messages);

    } catch (e) {
        res.status(500).send('Error :(');
    }

});

messagesRouter.post("/", imagesUpload.single('image'), async (req, res) => {

        const { message } = req.body as bodyContext;

        if (!message) {
            res.status(400).send({error:'message must be present and non-empty!'});
            return;
        }

        const fullMessage: MessageWithoutId = {
            message: req.body.message,
            author: req.body.author,
            image: req.file ? 'images' + req.file.filename : null,
        };

        const savedMessage = await fileDb.addMessage(fullMessage);

        console.log(savedMessage);

        res.status(200).send(savedMessage);
});

export default messagesRouter;