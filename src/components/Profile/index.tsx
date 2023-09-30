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
          <CardContent className="flex items-center justify-center">
            <Card className="max-w-2xl w-full">
              <CardTitle>Name</CardTitle>
              <p className="text-2xl opacity-75 font-bold">
                {userData.userName}
              </p>
            </Card>
            <Card className="max-w-2xl w-full overflow-x-hidden">
              <CardTitle>Id</CardTitle>
              <p className="text-2xl opacity-75 font-bold">{userData.userId}</p>
            </Card>
            <Card className="max-w-2xl w-full overflow-x-hidden">
              <CardTitle>Email</CardTitle>
              <p className="text-2xl opacity-75 font-bold">
                {userData.userEmail}
              </p>
            </Card>
          </CardContent>
          <CardFooter className="flex gap-5">
            <div className="bg-yellow-500 w-full h-14 rounded-xl"></div>
            <Button className="w-full" onClick={handleLogout}>
              Logout
            </Button>
          </CardFooter>
        </Card>
      )}
    </main>
  );
};

export default Profile;
