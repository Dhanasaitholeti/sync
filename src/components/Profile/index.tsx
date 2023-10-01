import { useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "../ui/card";
import { CgProfile } from "react-icons/cg";
import { Button } from "../ui/button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { socket } from "../../socketManager";
import { useDispatch } from "react-redux";
import { updateChats } from "@/redux/features/userChats";
import { updateMsgs } from "@/redux/features/chatMessages";

const Profile = () => {
  const dispatcher = useDispatch();
  const userData = useSelector((state: any) => state.user.user);
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("SynkToken");
    socket?.close();
    dispatcher(updateChats({ chats: null, err: false }));
    dispatcher(updateMsgs({ msgs: null, err: false }));
    navigate("/login");
  };
  return (
    <main className="container pt-[5%] max-w-4xl">
      {userData && (
        <Card className="h-[75vh]">
          <CardHeader className="flex items-center justify-center">
            <div className="aspect-square h-24 cursor-pointer rounded-full bg-blue-500  flex items-center justify-center text-white hover:bg-transparent hover:border hover:border-blue-400 hover:text-blue-400">
              <CgProfile size={32} />
            </div>
          </CardHeader>
          <CardContent className="flex items-center justify-center flex-col">
            <p className="text-2xl  font-bold">{userData.userName}</p>
            <p className="text-xl opacity-75 font-bold">{userData.userId}</p>
            <p className="text-2xl  font-bold">{userData.userEmail}</p>
          </CardContent>
          <CardFooter className="flex flex-col gap-5 ">
            <Button className="w-full max-w-md bg-blue-400 hover:bg-transparent hover:text-blue-600 hover:font-bold border border-blue-400">
              Change theme
            </Button>
            <Button
              className="w-full max-w-md bg-blue-400 hover:bg-transparent hover:text-blue-600 hover:font-bold border border-blue-400"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </CardFooter>
        </Card>
      )}
    </main>
  );
};

export default Profile;
