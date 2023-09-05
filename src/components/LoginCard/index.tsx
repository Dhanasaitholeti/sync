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
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const labelStyles = "text-md font-bold";
const fieldStyles = "grid w-full max-w-sm items-center gap-1.5";

const LoginCard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [cookies, setCoookie, removeCookie] = useCookies(["SynkToken"]);
  const [Credential, setCredential] = useState({
    Email: "",
    Password: "",
  });

  const handleOnChange = (e: any) => {
    setCredential({
      ...Credential,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = async () => {
    setLoading(true);
    try {
      const resp = await axios.post(
        "http://localhost:8080/user/login",
        Credential
      );
      setCoookie("SynkToken", resp.data.token);
      setLoading(false);
      navigate("/home");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <Card className="w-full max-w-lg drop-shadow-2xl pt-10 pb-4">
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold">
          Login Your Account
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-10">
        {loading ? (
          <h1>Loading......</h1>
        ) : (
          <>
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
                placeholder="******************"
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
              "bg-green-400 w-[30%] hover:text-green-500 hover:border hover:font-semibold hover:border-green-800 hover:bg-transparent"
            }
          >
            Login
          </Button>
          <p className="text-lg font-semibold">
            Don't have account?
            <Link to="/signup" className="text-orange-600">
              signup
            </Link>
          </p>
        </CardFooter>
      )}
    </Card>
  );
};

export default LoginCard;
