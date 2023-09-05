import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-slate-50 h-[100vh] flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center mb-14">
        <h1 className="font-semibold text-5xl">Welcome to Project Synk</h1>
        <p>syncup with your friends 😉</p>
      </div>
      <div className="flex gap-10 items-center justify-center">
        <Link to="/login">
          <button className="px-5 py-1 text-xl font-serif text-green-400 ">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="px-5 py-1 text-xl rounded-md font-serif border  border-green-800 bg-green-300 text-neutral-900 hover:bg-transparent hover:text-green-800">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
