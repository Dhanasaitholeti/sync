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
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { authUrls } from "@/configs/url";
import { RootState } from "@/services/redux/store";
import { useSelector } from "react-redux";
import Spinner from "../Loaders/Spinner";

const labelStyles = "text-sm md:text-md font-semibold";
const fieldStyles = "grid w-full max-w-sm items-center gap-1.5";

const SignupCard = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();
  const [signupData, setSignupData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const theme = useSelector((state: RootState) => state.theme.theme);
  const handleOnChange = (e: any) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupClick = async () => {
    setLoading(true);
    try {
      await axios.post(authUrls.signup, signupData);
      toast({
        title: "Signup successful",
        description: "Now try to login",
      });
      navigator("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast({
        title: "unable to signup. Try Again",
        variant: "destructive",
      });
    }
  };

  return (
    <Card
      className={`w-full max-w-sm md:max-w-lg md:h-[75vh] overflow-auto drop-shadow-2xl py-10 ${
        theme === "light"
          ? "sidebar-bg-color"
          : "sidebar-bg-color-dark text-white"
      }`}
    >
      <CardHeader className="pt-0">
        <div className="flex items-start justify-center">
          <div className="bg-blue-500 h-20 w-20 rounded-full">
            <img src={logo} alt="Logo" className="aspect-square" />
          </div>
        </div>
        <CardTitle className="text-center text-xl md:text-2xl font-bold">
          Sign up for Synk
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-5 ">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className={fieldStyles}>
              <Label htmlFor="Name" className={labelStyles}>
                Name:
              </Label>
              <Input
                onChange={(e) => handleOnChange(e)}
                type="text"
                name="Name"
                placeholder="Name"
                className="font-medium text-md"
              />
            </div>
            <div className={fieldStyles}>
              <Label htmlFor="Email" className={labelStyles}>
                Email:
              </Label>
              <Input
                onChange={(e) => handleOnChange(e)}
                type="text"
                name="Email"
                placeholder="Email Address"
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
            <div className={fieldStyles}>
              <Label htmlFor="passwd" className={labelStyles}>
                confirm Password:
              </Label>
              <Input
                type="password"
                name="passwd"
                placeholder="Confirm Password"
                className="font-medium text-md"
              />
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-5 items-center jusitfy-center">
        <Button
          onClick={handleSignupClick}
          className="bg-blue-500 w-[70%] hover:text-blue-500 hover:border hover:font-bold hover:border-blue-400 hover:bg-transparent"
        >
          signup
        </Button>
        <p className="text-md font-semibold">
          have an account?
          <Link to="/login" className="text-blue-500">
            login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignupCard;
