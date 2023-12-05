import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import logo from "../../assets/logo.png";
import { useToast } from "../ui/use-toast";
import { authUrls } from "@/configs/url";
import { useSelector } from "react-redux";
import { RootState } from "@/services/redux/store";
import Spinner from "../Loaders/Spinner";

//common styles
const labelStyles = "text-sm md:text-md font-semibold";
const fieldStyles = "grid w-full max-w-sm items-center gap-1.5";

const LoginCard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [Credential, setCredential] = useState({
    Email: "",
    Password: "",
  });
  const theme = useSelector((state: RootState) => state.theme.theme);

  const handleOnChange = (e: any) => {
    setCredential({
      ...Credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = async () => {
    setLoading(true);
    try {
      const resp = await axios.post(authUrls.login, Credential);
      toast({
        title: "Logged in Successfully",
        description: "Chat with your friends",
      });
      Cookies.set("SynkToken", resp.data.token);
      navigate("/home");
    } catch (error) {
      setLoading(false);
      toast({
        title: "Login Failed",
        description: "please once check your credentials",
        variant: "destructive",
      });
    }
  };

  return (
    <Card
      className={`w-full max-w-sm md:max-w-lg md:h-[75vh] overflow-auto drop-shadow-2xl py-10 ${
        theme === "light"
          ? "sidebar-bg-color "
          : "sidebar-bg-color-dark text-white"
      }`}
    >
      <CardHeader className="pt-0">
        <div className="flex items-start justify-center">
          <div className="bg-blue-500 h-20 w-20 rounded-full">
            <img src={logo} alt="Logo" className="aspect-square" />
          </div>
        </div>
        <CardTitle className="text-center text-xl md:text-2xl font-semibold">
          Log In to Synk
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-5">
        {loading ? (
          <Spinner />
        ) : (
          // <h1>Loading......</h1>
          <>
            <div className={fieldStyles}>
              <Label htmlFor="Email" className={labelStyles}>
                Email:
              </Label>
              <Input
                onChange={(e) => handleOnChange(e)}
                type="text"
                name="Email"
                placeholder="Email address"
                className="font-medium text-md"
              />
            </div>
            <div className={fieldStyles}>
              <Label htmlFor="Password" className={labelStyles}>
                Password:
              </Label>
              <Input
                onChange={(e) => handleOnChange(e)}
                type="password"
                name="Password"
                placeholder="Password"
                className="font-medium text-md"
              />
            </div>
          </>
        )}
      </CardContent>
      {!loading && (
        <CardFooter className="flex flex-col gap-5 items-center jusitfy-center">
          <Button
            onClick={handleLoginSubmit}
            className={
              "bg-blue-500 w-[70%] hover:text-blue-500 hover:border hover:font-bold hover:border-blue-400 hover:bg-transparent"
            }
          >
            Login
          </Button>
        </CardFooter>
      )}

      <p className="text-md text-center font-semibold">
        Don't have account?
        <Link to="/signup" className="text-blue-500">
          signup
        </Link>
      </p>
    </Card>
  );
};

export default LoginCard;
