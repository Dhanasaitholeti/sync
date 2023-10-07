import { useDispatch } from "react-redux";
import SideBar from "../SideBar";
import { InitializeSocket, socket } from "@/socketManager";
import { realtimeUpdate as msgupdate } from "@/redux/features/chatMessages";
import { realtimeUpdate as chatupdate } from "@/redux/features/userChats";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { socketUrls } from "@/configs/url";
import { RootState } from "@/redux/store";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatcher = useDispatch();
  const location = useLocation();
  const theme = useSelector((state: RootState) => state.theme.theme);

  if (!socket) {
    InitializeSocket();
  }
  socket?.on(socketUrls.channels.receiveMessage, (Data) => {
    console.log(Data);
    // checkDuplicate(Data, chatMessages[Data.chatId]);
    dispatcher(msgupdate({ msg: Data }));
  });

  socket?.on(socketUrls.channels.newChats, (Data) => {
    dispatcher(chatupdate({ chat: Data, err: false }));
  });

  return (
    <>
      <div className="h-screen grid xl:grid-cols-5 sm:grid-cols-3 md:grid-cols-3">
        <div
          className={`
          ${theme === "light" ? "sidebar-bg-color" : "sidebar-bg-color-dark"}
          ${
            location.pathname.startsWith("/chat") ||
            location.pathname.startsWith("/profile") ||
            location.pathname.startsWith("/search")
              ? "hidden sm:grid"
              : ""
          }`}
        >
          <SideBar />
        </div>

        <div
          className={`xl:col-span-4 sm:grid sm:col-span-2 grid-rows-10 md:col-span-2 ${
            theme === "light" ? "bg-custom-gradient" : "bg-custom-gradient-dark"
          } ${
            location.pathname.startsWith("/chat") ||
            location.pathname.startsWith("/profile") ||
            location.pathname.startsWith("/search")
              ? "col-span-full "
              : "hidden"
          }`}
        >
          <main className="row-span-full">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
