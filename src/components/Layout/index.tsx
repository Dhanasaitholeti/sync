import { useDispatch } from "react-redux";
import SideBar from "../SideBar";
import { InitializeSocket, socket } from "@/socketManager";
import { realtimeUpdate } from "@/redux/features/chatMessages";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatcher = useDispatch();

  if (!socket) {
    InitializeSocket();
  }
  socket?.on("receive_messages", (Data) => {
    dispatcher(realtimeUpdate({ msg: Data }));
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
