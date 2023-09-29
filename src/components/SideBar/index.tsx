import { useSelector } from "react-redux";
import ChatSkeleton from "../Skeletons/ChatSkeleton";
import ChatCard from "../ChatCard";
import { CgProfile } from "react-icons/cg";
import { HiUserAdd } from "react-icons/hi";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const handleNewChatClick = () => {
    navigate("/search");
  };
  const handleProfileClick = () => {
    navigate("/profile");
  };

  const userChats = useSelector((state: any) => state.userChats.chats);
  return (
    <>
      <aside className=" px-2 py-1 sidebar-bg-color flex flex-col space-y-5 shadow-md max-h-[100vh]">
        <div className="flex justify-between items-center px-2 gap-5">
          <div
            onClick={handleProfileClick}
            className="aspect-square cursor-pointer rounded-full bg-blue-500 h-14 flex items-center justify-center text-white hover:bg-transparent hover:border hover:border-blue-400 hover:text-blue-400"
          >
            <CgProfile size={32} />
          </div>
          <Button
            onClick={handleNewChatClick}
            className="w-full h-[5vh] bg-blue-500 hover:bg-transparent hover:border hover:border-blue-200 hover:text-blue-400 space-x-2"
          >
            <span className="text-lg">New Chat</span>
            <HiUserAdd size={24} />
          </Button>
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
