import SignupCard from "@/components/SignupCard";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";

const Signup = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <>
      <main
        className={`relative  h-screen flex items-center justify-center overflow-auto ${
          theme === "light" ? "bg-custom-gradient" : "bg-custom-gradient-dark"
        }`}
      >
        <SignupCard />
      </main>
    </>
  );
};

export default Signup;
