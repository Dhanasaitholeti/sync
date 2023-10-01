import axios from "axios";
import { Input } from "../ui/input";
import { useEffect } from "react";
import { updateSearchusers } from "@/redux/features/searchusers";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import SearchResultCard from "../SearchResultCard";

const SearchChat = () => {
  const dispatcher = useDispatch();
  const searchUsers = useSelector((state: any) => state.searchUser.users);

  useEffect(() => {
    const searchWithEmail = async () => {
      const resp = await axios.get("http://localhost:8080/api/search", {
        headers: {
          Authorization: "Bearer " + Cookies.get("SynkToken"),
        },
      });

      dispatcher(updateSearchusers({ userlist: resp.data.Data, err: false }));
    };

    searchWithEmail();
  }, []);

  return (
    <main className="container py-2 max-w-4xl space-y-5 rounded-lg">
      <div className="flex gap-2">
        <Input placeholder="Search With Email" />
      </div>

      <SearchResultCard CardList={searchUsers} />
    </main>
  );
};

export default SearchChat;
