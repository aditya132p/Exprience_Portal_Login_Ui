import Button from "../Components/Common/Button";
import Text from "../Components/Common/Text";
import Img from "../Components/Common/Img";
import Input from "../Components/Common/Input";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { useState } from "react";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = validateEmail(userData.email) ? "" : "Invalid email address";
    const passwordError = validatePassword(userData.password) ? "" : "Password must be at least 8 characters";

    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
     
      console.log("Valid credentials! Submitting form...");
      
    } else {
      console.log("Invalid credentials");
    }
  };

  return (
    <>
      <div className="flex min-h-[100dvh] font-sans items-center justify-center bg-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <Card>
          <div className="w-full max-w-md space-y-8">
            <div className="flex items-center flex-col">
              <Img src="logoog.svg" className="w-fit" />

              <Text className="mt-6 text-3xl font-bold tracking-tight text-foreground">Sign in to your account</Text>
            </div>

            <form className="space-y-4">
              <div className="flex flex-col">
                <Text className="font-medium">Email</Text>

                <Input
                  className={`w-full border px-2 outline-none py-2 rounded-md border-gray-200 ${errors.email && 'border-red-500'}`} // Add error class
                  type="email"
                  name="email"
                  required
                  onChange={handleOnChange}
                  placeholder="Enter your Username"
                />

                {errors.email && (
                  <Text className="text-red-500 text-sm mt-1">{errors.email}</Text> // Display error message
                )}
              </div>

              <div className="flex flex-col">
                <Text className="font-semibold">Password</Text>

                <Input
                  className={`w-full border px-2 outline-none py-2 rounded-md border-gray-200 ${errors.password && 'border-red-500'}`} // Add error class
                  type="password"
                  name="password"
                  required
                  onChange={handleOnChange}
                  placeholder="Enter your password"
                />

                {errors.password && (
                  <Text className="text-red-500 text-sm mt-1">{errors.password}</Text> // Display error message
                )}
              </div>

              <Link to={"/forgotpassword"}>
                <Text className="font-regular text-gray-600 hover:text-yellow-500 underline underline-offset-4">
                  Forgot Password ?
                </Text>
              </Link>

              <Button onClick={handleSubmit} type="submit" className="py-3 rounded-md w-full bg-black text-white hover:bg-gray-900">
                {errors ? "Login" : "loaging.."}
                </Button>
            </form>
          </div>
        </Card>

      </div>
    </>

  )
}


export default Login;
