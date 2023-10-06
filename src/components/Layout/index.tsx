import { useDispatch } from "react-redux";
import SideBar from "../SideBar";
import { InitializeSocket, socket } from "@/socketManager";
import { realtimeUpdate as msgupdate } from "@/redux/features/chatMessages";
import { realtimeUpdate as chatupdate } from "@/redux/features/userChats";
// import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatcher = useDispatch();
  const location = useLocation();
  // const chatMessages = useSelector((state: any) => state.chatMsgs.msgs);

  if (!socket) {
    InitializeSocket();
  }
  socket?.on("receive_messages", (Data) => {
    console.log(Data);
    // checkDuplicate(Data, chatMessages[Data.chatId]);
    dispatcher(msgupdate({ msg: Data }));
  });

  socket?.on("newchat", (Data) => {
    dispatcher(chatupdate({ chat: Data, err: false }));
  });

  return (
    <>
      <div className="h-screen grid xl:grid-cols-5 sm:grid-cols-3 md:grid-cols-3">
        <div
          className={`${
            location.pathname.startsWith("/chat") ? "hidden sm:grid" : ""
          }`}
        >
          <SideBar />
        </div>

        <div
          className={`xl:col-span-4 sm:grid sm:col-span-2 grid-rows-10 bg-custom-gradient md:col-span-2 ${
            location.pathname.startsWith("/chat") ? "col-span-full " : "hidden"
          }`}
        >
          <main className="row-span-full">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
