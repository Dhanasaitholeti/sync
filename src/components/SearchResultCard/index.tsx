import axios from "axios";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useSelector } from "react-redux";
import { searchUsersType } from "@/redux/features/searchusers";
import { createchat } from "@/socketManager";

interface CardsProps {
  CardList: searchUsersType[];
}

const SearchResult: React.FC<CardsProps> = ({ CardList }) => {
  const userData = useSelector((state: any) => state.user.user);
  const userChats = useSelector((state: any) => state.userChats.chats);
  console.log(userChats);

  const checkChatExists = (chatPartnerrId: string) => {
    if (userChats) {
      for (let i of userChats) {
        if (i.ChatpartnerId === chatPartnerrId) return true;
      }
      return false;
    }
  };

  // const handleCreateChat = (user2Id: string) => {
  //   axios.post("http://localhost:8080/api/createchat", {
  //     user1Id: userData.userId,
  //     user2Id,
  //   });
  // };

  const handleCreateChat = (user2Id: string) => {
    createchat({
      user1Id: userData.userId,
      user2Id,
    });
  };

  return (
    <div className="max-w-5xl rounded-lg h-[90vh] px-14 py-5 sidebar-bg-color flex flex-col gap-4">
      {CardList &&
        CardList.map((card) => (
          <Card
            key={card.id}
            className="flex justify-between items-center px-5 py-3 border-blue-500 group"
          >
            <div className="flex gap-2 items-center justify-center">
              <div className="aspect-square h-[50px] bg-blue-500 rounded-full flex items-center justify-center text-2xl text-white font-semibold group-hover:bg-white group-hover:text-blue-600 border border-blue-600">
                {card.Name[0]}
              </div>
              <div>
                <p className="font-extrabold text-slate-800">{card.Name}</p>
                <p className="font-medium text-gray-800">{card.Email}</p>
              </div>
            </div>
            {!checkChatExists(card.id) && (
              <Button
                onClick={() => handleCreateChat(card.id)}
                className="bg-blue-500 hover:bg-blue-400 hover:bg-transparent border border-blue-500 hover:text-blue-500 hover:font-semibold"
              >
                Chat
              </Button>
            )}
          </Card>
        ))}
    </div>
  );
};

export default SearchResult;
