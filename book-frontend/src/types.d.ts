export interface IMessage {
    id: string;
    message: string;
    author: string;
    image: string | null;
}

export interface IMessageMutation {
  message: string;
  author: string;
  image: File | null;
}
