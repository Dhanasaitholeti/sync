import { useEffect } from "react";
import { io } from "socket.io-client";
import { useCookies } from "react-cookie";
const Home = () => {
  const [cookies] = useCookies(["SynkToken"]);
  useEffect(() => {
    const socket = io("http://localhost:8080", {
      auth: {
        token: cookies.SynkToken,
      },
    });

    socket.on("connect", () => {
      console.log("Connected to socker server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnect from socker server");
    });
  });
  return (
    <>
      <div>
        <p>This is the Home page</p>
      </div>
    </>
  );
};

export default Home;
