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
import logo from "../../assets/logo.png";

const labelStyles = "text-md font-bold";
const fieldStyles = "grid w-full max-w-sm items-center gap-1.5";

const SignupCard = () => {
  const [signupData, setSignupData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const handleOnChange = (e: any) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupClick = () => {};

  console.log(signupData);

  return (
    <Card className="w-full max-w-lg h-[75vh] drop-shadow-2xl pt-10 pb-4">
      <CardHeader>
        <div className="flex items-start justify-center">
          <div className="bg-blue-500 h-20 w-20 rounded-full">
            <img src={logo} alt="Logo" className="aspect-square" />
          </div>
        </div>
        <CardTitle className="text-center text-2xl font-bold">
          Sign up for Synk
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-5 ">
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
