//const localServerhost = "http://localhost:8080";
const cloudServerHost = "https://synk-li6v.onrender.com";

const currenthost = cloudServerHost;

export const authUrls = {
  login: `${currenthost}/user/login`,
  signup: `${currenthost}/user/signup`,
  allusers: `${currenthost}/api/search`,
};

export const socketUrls = {
  connectionurl: currenthost,
  channels: {
    receiveMessage: "receive_messages",
    newChats: "newchat",
    initialData: "chatsData",
    createNewChat: "createChat",
    sendMessage: "sendMessage",
  },
};
