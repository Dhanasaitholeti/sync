import { useDispatch } from "react-redux";
import SideBar from "../SideBar";
import { InitializeSocket, socket } from "@/socketManager";
import { realtimeUpdate as msgupdate } from "@/redux/features/chatMessages";
import { realtimeUpdate as chatupdate } from "@/redux/features/userChats";
import { useSelector } from "react-redux";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatcher = useDispatch();
  const chatMessages = useSelector((state: any) => state.chatMsgs.msgs);

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
      <div className="h-[100vh] grid xl:grid-cols-5 grid-cols-3 ">
        <SideBar />
        <div className=" xl:col-span-4 grid grid-rows-10 bg-custom-gradient col-span-2">
          <main className=" row-span-full">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
