export interface Message {
    id: string;
    message: string;
    author?: string;
    image?: string;
}

export type MessageWithoutId = Omit<Message, 'id'>
