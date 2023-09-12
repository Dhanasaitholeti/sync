import { Socket } from "socket.io-client";

export interface indvidualMessageType {
  id: string;
  content: string;
  senderId: string;
  chatId: string;
  sentTime: string;
}

export interface extractedMsgsType {
  [id: string]: indvidualMessageType[];
}
