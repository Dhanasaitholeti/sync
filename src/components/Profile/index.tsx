import { useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state: any) => state.user.user);

  console.log(userData);
  return (
    <main className="container py-2 max-w-4xl">
      This is Profile section of the user. and here are the extra features would
      appear
    </main>
  );
};

export default Profile;
