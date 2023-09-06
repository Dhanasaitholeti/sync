import { useEffect } from "react";
import { io } from "socket.io-client";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { updateChats } from "@/redux/features/userChats";

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
      console.log("This is Chats Data from the socket server", chatsData);
      dispatcher(updateChats({ chats: chatsData, err: false }));
    });

    socket.on("disconnect", () => {
      console.log("Disconnect from socker server");
    });
  }, []);
  return;
};

export default useSocket;
