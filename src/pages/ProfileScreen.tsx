import { useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { CgProfile } from "react-icons/cg";
import { Button } from "../components/ui/button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { socket } from "../services/socketManager";
import { useDispatch } from "react-redux";
import { updateChats } from "@/services/redux/features/userChats";
import { updateMsgs } from "@/services/redux/features/chatMessages";
import { useToast } from "../components/ui/use-toast";
import { RootState } from "@/services/redux/store";
import { updateTheme } from "@/services/redux/features/theme";

const Profile = () => {
  const { toast } = useToast();
  const dispatcher = useDispatch();
  const userData = useSelector((state: any) => state.user.user);
  const navigate = useNavigate();
  const theme = useSelector((state: RootState) => state.theme.theme);
  console.log(theme);

  const handleThemeChange = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      dispatcher(updateTheme({ theme: "dark" }));
    } else dispatcher(updateTheme({ theme: "light" }));
  };

  const handleLogout = () => {
    Cookies.remove("SynkToken");
    socket?.close();
    dispatcher(updateChats({ chats: null, err: false }));
    dispatcher(updateMsgs({ msgs: null, err: false }));
    toast({
      title: "logged out",
    });
    navigate("/login");
  };

  return (
    <main className="container pt-[5%] max-w-4xl">
      {userData && (
        <Card
          className={`h-[75vh] ${
            theme === "light"
              ? "sidebar-bg-color"
              : "sidebar-bg-color-dark text-white"
          }`}
        >
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
            <Button
              className="w-full max-w-md bg-blue-400 hover:bg-transparent hover:text-blue-600 hover:font-bold border border-blue-400"
              onClick={handleThemeChange}
            >
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
