import { useLocation, useNavigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import { privateRoutes } from "@/configs/navigations";
import { useEffect } from "react";

const Routegaurd = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cookies] = useCookies(["SynkToken"]);

  useEffect(() => {
    if (!cookies.SynkToken && privateRoutes.includes(location.pathname)) {
      navigate("/login");
    }
  }, []);

  return <>{cookies.SynkToken && <Outlet />}</>;
};

export default Routegaurd;
