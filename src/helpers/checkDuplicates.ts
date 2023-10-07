import { indvidualMessageType } from "@/configs/Types";

export const checkDuplicate = (
  Data: indvidualMessageType,
  chatMessages: any
) => {
  console.log(chatMessages);
  console.log(chatMessages[chatMessages.length - 1].id === Data.id);

  //   if (chatMessages[chatMessages.length - 1])
  //   const relatedChat = chatMessages[Data.chatId];

  //   console.log(relatedChat);

  return chatMessages[chatMessages.length - 1].id === Data.id;
};
