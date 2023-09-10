import { Link } from "react-router-dom";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card } from "../ui/card";

interface ChatsDataprops {
  Chatlist: {
    ChatId: string;
    Chatpartner: string;
  }[];
}
const ChatCard: React.FC<ChatsDataprops> = ({ Chatlist }) => {
  return (
    <>
      {Chatlist.map((chat) => (
        <Link to={`/chat/${chat.ChatId}`} key={chat.ChatId}>
          <Card className="flex align-center  py-2 px-3 group hover:cursor-pointer">
            <Avatar className="h-[40px] w-[40px]">
              <AvatarFallback className="bg-neutral-700 text-slate-50 font-bold text-2xl group-hover:bg-neutral-400 group-hover:text-slate-950">
                {chat.Chatpartner[0]}
              </AvatarFallback>
            </Avatar>

            <div className="ml-4">
              <p className="text-xl font-medium">{chat.Chatpartner}</p>
            </div>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default ChatCard;
