import { useSelector } from "react-redux";
import ChatSkeleton from "../Skeletons/ChatSkeleton";
import ChatCard from "../ChatCard";
import { CgProfile } from "react-icons/cg";
import { HiUserAdd } from "react-icons/hi";
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { Separator } from "../ui/separator";
import { RootState } from "@/services/redux/store";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNewChatClick = () => {
    navigate("/search");
  };
  const handleProfileClick = () => {
    navigate("/profile");
  };

  const userChats = useSelector((state: RootState) => state.userChats.chats);
  const theme = useSelector((state: RootState) => state.theme.theme);

  console.log(userChats);

  return (
    <>
      <aside
        className={`px-2 py-1  flex flex-col space-y-5  max-h-screen ${
          theme === "light" ? "sidebar-bg-color" : "sidebar-bg-color-dark"
        }`}
      >
        <div className="flex justify-between items-center px-2 gap-5">
          <div
            onClick={handleProfileClick}
            className={`aspect-square cursor-pointer rounded-full h-12 md:h-14 flex items-center justify-center border border-blue-400 hover:bg-transparent  hover:text-blue-400 ${
              location.pathname === "/profile"
                ? "bg-transparent text-blue-600"
                : " bg-blue-500  text-white"
            }`}
          >
            <CgProfile size={32} />
          </div>
          <Button
            onClick={handleNewChatClick}
            className={`w-full h-[5vh] bg-blue-500 border border-blue-400 space-x-2  hover:bg-transparent hover:text-blue-400  
            ${
              location.pathname === "/search"
                ? "bg-transparent text-blue-600 "
                : "bg-blue-500 text-white"
            }
            `}
          >
            <span className="text-md lg:text-lg">New Chat</span>
            <HiUserAdd size={24} />
          </Button>
        </div>

        <Separator />

        <div className="space-y-5">
          <div className="overflow-y-scroll max-h-[70vh] min-h-[60vh]">
            {userChats && userChats?.length > 0 ? (
              userChats ? (
                <ChatCard Chatlist={userChats} />
              ) : (
                <ChatSkeleton />
              )
            ) : (
              <p>add new chats</p>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
