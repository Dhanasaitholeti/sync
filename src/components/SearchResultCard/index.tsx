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
            <div>
              <p>{card.Name}</p>
              <p>{card.Email}</p>
            </div>
            <Button className="bg-blue-500 hover:bg-blue-300">Chat</Button>
          </Card>
        ))}
    </div>
  );
};

export default SearchResult;
