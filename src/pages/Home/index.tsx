import { useEffect } from "react";
import { io } from "socket.io-client";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { addChats } from "@/redux/features/userChats";

const Home = () => {
  // const dispatcher = useDispatch();
  // const [cookies] = useCookies(["SynkToken"]);
  // useEffect(() => {
  //   const socket = io("http://localhost:8080", {
  //     auth: {
  //       token: cookies.SynkToken,
  //     },
  //   });

  //   socket.on("connect", () => {
  //     console.log("Connected to socker server");
  //   });

  //   socket.on("chatsData", (chatsData) => {
  //     console.log("This is Chats Data from the socket server", chatsData);
  //     dispatcher(addChats(chatsData));
  //   });

  //   socket.on("disconnect", () => {
  //     console.log("Disconnect from socker server");
  //   });
  // });
  return (
    <>
      <div>
        <p>This is the Home page</p>
      </div>
    </>
  );
};

export default Home;
