import { useSelector } from "react-redux";
import ChatSkeleton from "../Skeletons/ChatSkeleton";
import ChatCard from "../ChatCard";
import Logo from "@/assets/logo.png";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const SideBar = () => {
  const userChats = useSelector((state: any) => state.userChats.chats);
  return (
    <>
      <aside className=" px-3 py-1 flex flex-col space-y-5 shadow-md max-h-[100vh]">
        <div className="flex items-center justify-center h-[10vh]">
          <img
            src={Logo}
            alt="Synk logo"
            className=" h-16 md:h-24 drop-shadow-md hover:drop-shadow-2xl "
          />
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold ">SYNK</p>
        </div>
        <div className="flex flex-col space-y-4">
          <Separator className="h-0.5 bg-gray-500" />
          <div className="flex items-baseline justify-around">
            <Link to={"/search"}>
              <Button className="text-xl">New Chat</Button>
            </Link>
            <Link to={"/profile"}>
              <Button className="text-xl">Profile</Button>
            </Link>
          </div>
        </div>
        <div className="space-y-5 ">
          <p className="mb-5 font-semibold">Your Chats:</p>
          <div className="overflow-y-scroll max-h-[70vh] min-h-[45vh]">
            {userChats ? <ChatCard Chatlist={userChats} /> : <ChatSkeleton />}
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
