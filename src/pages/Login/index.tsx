import LoginCard from "@/components/LoginCard";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Login = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <>
      <main
        className={`relative  h-screen flex items-center justify-center overflow-auto ${
          theme === "light" ? "bg-custom-gradient" : "bg-custom-gradient-dark"
        }`}
      >
        <LoginCard />
      </main>
    </>
  );
};

export default Login;
