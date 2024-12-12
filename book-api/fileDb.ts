import { promises as fs } from 'fs'
import {Message, MessageWithoutId} from "./types";
import crypto from 'node:crypto'

const fileName = './db.json';
let data: Message[] = [];


const fileDb = {
    async init() {
        try {
            const fileContent = await fs.readFile(fileName);
            data = JSON.parse(fileContent.toString()) as Message[];
        }catch(err) {
            console.error(err);
        }
    },
    async getMessages() {
        return data;
    },
    async addMessage(messageItem: MessageWithoutId) {
        const id = crypto.randomUUID();
        console.log(id)
        const message = {id, ...messageItem};

        data.push(message);

        console.log(message);

        await this.save();
        return message;
    },
    async save() {
        return await fs.writeFile(fileName, JSON.stringify(data));
    }
}

export default fileDb;

