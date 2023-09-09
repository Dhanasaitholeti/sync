import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import { privateRoutes, publicRoutes } from "@/configs/navigations";
import { useEffect } from "react";

const Routegaurd = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cookies] = useCookies(["SynkToken"]);

  useEffect(() => {
    if (
      !cookies.SynkToken &&
      (privateRoutes.includes(location.pathname) ||
        location.pathname.startsWith("/chat"))
    ) {
      navigate("/login");
    }
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
