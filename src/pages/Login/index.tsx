import LoginCard from "@/components/LoginCard";

const theme = localStorage.getItem("theme");

const Login = () => {
  return (
    <>
      <main
        className={`relative ${
          theme ? "bg-custom-gradient-dark" : "bg-custom-gradient"
        } h-screen flex items-center justify-center overflow-auto`}
      >
        <LoginCard />
      </main>
    </>
  );
};

export default Login;
