import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface CardsProps {
  CardList: {
    id: string;
    Email: string;
    Name: string;
  }[];
}

const SearchResult: React.FC<CardsProps> = ({ CardList }) => {
  console.log(CardList);

  return (
    <div className="max-w-5xl h-[90vh] px-10 py-5 bg-gray-50 flex flex-col gap-4">
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
            <Button className="bg-blue-500 hover:bg-blue-400 hover:bg-transparent border border-blue-500 hover:text-blue-500 hover:font-semibold">
              Chat
            </Button>
          </Card>
        ))}
    </div>
  );
};

export default SearchResult;
