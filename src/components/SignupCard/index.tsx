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
    <Card className="w-full max-w-lg drop-shadow-2xl pt-10 pb-4">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold">
          Create New Account
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-10 ">
        <div className={fieldStyles}>
          <Label htmlFor="Name" className={labelStyles}>
            Name:
          </Label>
          <Input
            onChange={(e) => handleOnChange(e)}
            type="text"
            name="Name"
            placeholder="haidi"
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
            placeholder="example@gmail.com"
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
            placeholder="*********"
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
            placeholder="**********"
            className="font-medium text-md"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-5 items-center jusitfy-center">
        <Button
          onClick={handleSignupClick}
          className="bg-green-400 w-[30%] hover:text- green-500 hover:border hover:font-semibold hover:border-green-800 hover:bg-transparent"
        >
          signup
        </Button>
        <p className="text-lg font-semibold">
          have account?
          <Link to="/login" className="text-orange-600">
            login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignupCard;
