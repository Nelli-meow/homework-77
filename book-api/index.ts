import express from "express";
import cors from 'cors';
import messagesRouter from "./routers/messages";
import fileDb from "./fileDb";

const app = express();
const port =  8000;

app.use(express.json());
app.use(cors());
app.use('/book-messages', messagesRouter);
app.use(express.static('public'));


const run = async () => {
    await fileDb.init();

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}

run().catch((err) => console.log(err));
