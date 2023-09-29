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
    <div>
      {CardList &&
        CardList.map((card) => (
          <Card
            key={card.id}
            className="flex justify-between items-center px-5 py-3"
          >
            <div>
              <p>{card.Name}</p>
              <p>{card.Email}</p>
            </div>
            <Button>Chat</Button>
          </Card>
        ))}
    </div>
  );
};

export default SearchResult;
