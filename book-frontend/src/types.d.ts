export interface Message {
    id: string;
    message: string;
    author?: string;
    image?: string;
}

export interface ChatMessageMutation {
  message: string;
  author?: string;
  image?: string;
}