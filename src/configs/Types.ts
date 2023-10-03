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
