import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "@/redux/features/userData";
import axios from "axios";
import { useSelector } from "react-redux";
const Profile = () => {
  const dispatcher = useDispatch();
  const userData = useSelector((state: any) => state.user.user);
  useEffect(() => {
    const searchUserData = async () => {
      const resp = await axios.get("http://localhost:8080/api/profile");
      console.log(resp);
      dispatcher(updateUser({ user: resp.data.Data, err: false }));
    };

    searchUserData();
  }, []);
  console.log(userData);
  return (
    <main className="container py-2 max-w-4xl">
      This is Profile section of the user. and here are the extra features would
      appear
    </main>
  );
};

export default Profile;
