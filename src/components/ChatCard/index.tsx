import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card } from "../ui/card";

interface ChatsDataprops {
  Chatlist: {
    ChatId: string;
    Chatpartner: string;
  }[];
}

const ChatCard: React.FC<ChatsDataprops> = ({ Chatlist }) => {
  const location = useLocation();
  let id: string | null;

  if (location.pathname.startsWith("/chat")) {
    id = location.pathname.split("/")[2];
  }

  return (
    <div className="flex flex-col gap-2">
      {Chatlist.map((chat) => (
        <Link to={`/chat/${chat.ChatId}`} key={chat.ChatId}>
          <Card
            className={`${
              id === chat.ChatId && "bg-blue-200"
            } flex align-center py-3 px-3 group rounded-lg hover:cursor-pointer border-2`}
          >
            <Avatar className="h-[40px] w-[40px]">
              <AvatarFallback className="bg-blue-700 text-slate-50 font-bold text-2xl group-hover:bg-white group-hover:text-blue-700">
                {chat.Chatpartner[0]}
              </AvatarFallback>
            </Avatar>

            <div className="ml-4">
              <p className="text-xl font-medium">{chat.Chatpartner}</p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ChatCard;
