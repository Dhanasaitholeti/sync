import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import { privateRoutes, publicRoutes } from "@/configs/navigations";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useSocket from "@/hooks/useSocket";

const Routegaurd = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cookies] = useCookies(["SynkToken"]);
  const socket = useSelector((state: any) => state.socket.socketInstance);

  useEffect(() => {
    if (
      !cookies.SynkToken &&
      (privateRoutes.includes(location.pathname) ||
        location.pathname.startsWith("/chat"))
    ) {
      navigate("/login");
    }
    // if (
    //   !socket &&
    //   (privateRoutes.includes(location.pathname) ||
    //     location.pathname.startsWith("/chat"))
    // ) {
    //   useSocket();
    // }

    if (cookies.SynkToken && publicRoutes.includes(location.pathname)) {
      navigate("/home");
    }
  }, [location.pathname]);

  return (
    <>
      {publicRoutes.includes(location.pathname) ? (
        <Outlet />
      ) : (
        cookies.SynkToken && <Outlet />
      )}
    </>
  );
};

export default Routegaurd;
