import Cookies from "js-cookie";
import { Socket, io } from "socket.io-client";
import { useDispatch } from "react-redux";
import { updateChats } from "@/redux/features/userChats";
import { updateMsgs } from "@/redux/features/chatMessages";
import { extractedMsgsType } from "@/configs/Types";
import { updateUser } from "@/redux/features/userData";

let socket: Socket | null = null;

const InitializeSocket = () => {
  const dispatcher = useDispatch();

  if (Cookies.get("SynkToken") && !socket) {
    socket = io("http://localhost:8080", {
      auth: {
        token: Cookies.get("SynkToken"),
      },
    });

    socket.on("connect", () => {
      console.log("Connected to socker server");
    });

    socket.on("message", (message: any) => {
      //testing purpose
      console.log("Got the data", message);
    });

    socket.on("chatsData", (chatsData) => {
      console.log(chatsData);
      dispatcher(
        updateUser({
          user: {
            userId: chatsData.id,
            userEmail: chatsData.Email,
            userName: chatsData.Name,
          },
          err: false,
        })
      );

      const extractedmsgs: extractedMsgsType = {};
      chatsData.chats.forEach((each: any) => {
        extractedmsgs[each.id] = each.messages;
      });
      dispatcher(updateMsgs({ msgs: extractedmsgs, err: false })); //dispatching action alogn with payload to update data in store

      const extractedchats = chatsData.chats.map((each: any) => ({
        ChatId: each.id,
        Chatpartner: each.members[0].Name,
        ChatpartnerId: each.members[0].id,
      }));
      dispatcher(updateChats({ chats: extractedchats, err: false })); //dispatching action alogn with payload to update data in store
    });

    socket.on("disconnect", () => {
      console.log("Disconnect from socker server");
      socket = null;
    });
  }
};

const emitMessage = (message: any) => {
  socket?.emit("sendMessage", message);
};

export { socket, InitializeSocket, emitMessage };
