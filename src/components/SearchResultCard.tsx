import { Button } from "./ui/button";
import { Card } from "./ui/card";

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
      {CardList.map((card) => (
        <Card key={card.id}>
          <p>{card.Name}</p>
          <p>{card.Email}</p>
          <Button>Chat</Button>
        </Card>
      ))}
    </div>
  );
};

export default SearchResult;
