import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card } from "../ui/card";

interface ChatsDataprops {
  Chatlist: {
    id: string;
    members: { Name: string }[];
  }[];
}
const ChatCard: React.FC<ChatsDataprops> = ({ Chatlist }) => {
  console.log(Chatlist);
  return (
    <>
      {Chatlist.map((chat) => (
        <Link to={`/chat/${Chatlist[0].id}`}>
          <Card className="flex align-center  py-2 px-2 group hover:cursor-pointer">
            <Avatar className="h-[40px] w-[40px]">
              <AvatarFallback className="bg-neutral-700 text-slate-50 font-bold text-2xl group-hover:bg-neutral-400 group-hover:text-slate-950">
                {chat.members[0].Name[0]}
              </AvatarFallback>
            </Avatar>

            <div className="ml-4">
              <p className="text-xl font-medium">{chat.members[0].Name}</p>
            </div>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default ChatCard;
