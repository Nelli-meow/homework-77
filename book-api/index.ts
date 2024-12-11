import express from "express";
import cors from 'cors';
import messagesRouter from "./routers/messages";

const app = express();
const port =  8000;

app.use(express.json());
app.use(cors());
app.use('/book-messages', messagesRouter);


const run = async () => {

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}

run().catch((err) => console.log(err));
