import { Input } from "../ui/input";
import { FiSearch } from "react-icons/fi";
const SearchChat = () => {
  return (
    <main className="container py-2 max-w-4xl space-y-5">
      <div className="flex gap-2">
        <Input placeholder="Search With Email" />
        <FiSearch size={32} />
      </div>
      <div>here is the chat cards appear that are searched</div>
    </main>
  );
};

export default SearchChat;
