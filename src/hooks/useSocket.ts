import { useEffect } from "react";
import { io } from "socket.io-client";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { updateChats } from "@/redux/features/userChats";
import { updateMsgs } from "@/redux/features/chatMessages";
import { extractedMsgsType } from "@/configs/Types";

const useSocket = () => {
  const dispatcher = useDispatch();
  const [cookies] = useCookies(["SynkToken"]);
  useEffect(() => {
    const socket = io("http://localhost:8080", {
      auth: {
        token: cookies.SynkToken,
      },
    });

    socket.on("connect", () => {
      console.log("Connected to socker server");
    });

    socket.on("chatsData", (chatsData) => {
      const extractedmsgs: extractedMsgsType = {};
      chatsData.forEach((each: any) => {
        extractedmsgs[each.id] = each.messages;
      });
      dispatcher(updateMsgs({ msgs: extractedmsgs, err: false })); //dispatching action alogn with payload to update data in store

      const extractedchats = chatsData.map((each: any) => ({
        ChatId: each.id,
        Chatpartner: each.members[0].Name,
      }));

      dispatcher(updateChats({ chats: extractedchats, err: false })); //dispatching action alogn with payload to update data in store
    });

    // socket.emit("GetChatMessages", {
    //   chatId: "580f4212-760a-4c79-be5f-40dea46979b1",
    // });
    // socket.on("chatmessages", (chatmsgs) => {
    //   console.log(chatmsgs);
    //   dispatcher(updateMsgs({ msgs: chatmsgs.messages, err: false }));
    // });

    socket.on("disconnect", () => {
      console.log("Disconnect from socker server");
    });
  }, []);
  return;
};

export default useSocket;
