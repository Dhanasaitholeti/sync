import { useSelector } from "react-redux";
import { Avatar, AvatarFallback } from "../ui/avatar";

const TopBar = () => {
  const chatsData = useSelector((state: any) => state.userChats.chats);
  console.log(chatsData);
  return (
    <nav className="grid grid-cols-10 px-5 py-1 shadow-xl top-0 sticky z-10 w-full bg-red-700">
      <div className="col-span-2">Synk</div>
      <div className="flex">
        <Avatar className="h-[50px] w-[50px]">
          <AvatarFallback className="bg-neutral-700 text-slate-50 font-bold text-2xl group-hover:bg-neutral-400 group-hover:text-slate-950">
            D
          </AvatarFallback>
        </Avatar>

        <section>
          <p>name</p>
          <p>email</p>
        </section>
      </div>
    </nav>
  );
};

export default TopBar;
