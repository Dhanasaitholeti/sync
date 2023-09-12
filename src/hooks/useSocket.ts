import { useEffect } from "react";
import { io } from "socket.io-client";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { updateChats } from "@/redux/features/userChats";
import { updateMsgs } from "@/redux/features/chatMessages";
import { extractedMsgsType } from "@/configs/Types";
import { updateUser } from "@/redux/features/userData";

const useSocket = () => {
  const dispatcher = useDispatch();
  const [cookies] = useCookies(["SynkToken"]);

  const socket = io("http://localhost:8080", {
    auth: {
      token: cookies.SynkToken,
    },
  });

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to socker server");
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
      }));
      dispatcher(updateChats({ chats: extractedchats, err: false })); //dispatching action alogn with payload to update data in store
    });

    socket.on("disconnect", () => {
      console.log("Disconnect from socker server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendToChannel = (channelName: string, data: any) => {
    socket.emit(channelName, data);
  };

  return { sendToChannel };
};

export default useSocket;
