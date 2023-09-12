import { useSelector } from "react-redux";
import ChatSkeleton from "../Skeletons/ChatSkeleton";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import ChatCard from "../ChatCard";
import useSocket from "@/hooks/useSocket";

const SideBar = () => {
  const userChats = useSelector((state: any) => state.userChats.chats);

  useSocket();
  return (
    <>
      <aside className=" px-3 py-5 flex flex-col space-y-5 drop-shadow-xl ">
        <div>
          <Input
            type="Email"
            placeholder="Search with Email"
            className="border-white-200 focus-visible:ring-green-300"
          />
        </div>
        <Separator className="h-0.5 bg-gray-500" />
        <div className="space-y-5">
          <p className="mb-5 font-semibold">Your Chats:</p>

          {userChats ? <ChatCard Chatlist={userChats} /> : <ChatSkeleton />}
        </div>
      </aside>
    </>
  );
};

export default SideBar;
