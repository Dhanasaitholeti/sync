export const authUrls = {
  login: "http://localhost:8080/user/login",
  signup: "http://localhost:8080/user/signup",
};

export const socketUrls = {
  connectionurl: "http://localhost:8080/",
  channels: {
    receiveMessage: "receive_messages",
    newChats: "newchat",
    initialData: "chatsData",
    createNewChat: "createChat",
    sendMessage: "sendMessage",
  },
};
