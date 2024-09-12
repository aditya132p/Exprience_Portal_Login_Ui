import Button from "../Components/Common/Button";
import Text from "../Components/Common/Text";
import Img from "../Components/Common/Img";
import Input from "../Components/Common/Input";
import { Link } from "react-router-dom";
import Card from "../Components/Common/Card";
import { useState } from "react";
import Loading from '../Components/Common/Loading'

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState("")


  const handleOnChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    if (!userData.email) {
      // setError("Enter your valid email")
      setError({
        email: "Enter your valid email"
      })
      setLoading(false)
      return
    }
    if (!userData.password) {
      setError({
        password: "Enter your valid password"
      })
      setLoading(false)
      return
    }
    setError({
      email: "",
      password: ""
    })

    setTimeout(() => {
      setLoading(false)
    }, 1000);

  };

  return (
    <>
      <div className="font-poppins flex min-h-[100dvh] items-center justify-center bg-gray-200 px-4 py-12 sm:px-6 lg:px-8">
        <Card>
          <div className="w-full max-w-md space-y-8">
            <div className="flex items-center flex-col">
              <Img src="Vector1.svg" className="w-fit" />

              <Text className="mt-6 text-2xl font-regular tracking-tight text-foreground">Sign in to your account </Text>
            </div>

            <form className="space-y-4">
              <div className="flex flex-col gap-1">
                <Text className="font-medium">Email</Text>

                <Input
                  className={`w-full border px-2 outline-none py-2 rounded-md border-gray-200 ${error.email && 'border-red-500'}`} // Add error class
                  type="email"
                  name="email"
                  required
                  onChange={handleOnChange}
                  placeholder="Enter your email"
                />

                {error.email && (
                  <Text className="text-red-500 text-sm mt-1">{error.email}</Text> // Display error message
                )}
              </div>

              <div className="flex gap-1 flex-col">
                <Text className="font-regular">Password</Text>

                <Input
                  className={`w-full border px-2 outline-none py-2 rounded-md border-gray-200 ${error.password && 'border-red-500'}`} // Add error class
                  type="password"
                  name="password"
                  required
                  onChange={handleOnChange}
                  placeholder="Enter your password"
                />

                {error.password && (
                  <Text className="text-red-500 text-sm mt-1">{error.password}</Text> // Display error message

                )}

                <Link to={"/forgotpassword"}>
                  <Text className="font-regular text-sm text-gray-600 hover:text-yellow-500 underline underline-offset-4">
                    Forgot Password ?
                  </Text>
                </Link>
              </div>



              <Button onClick={handleSubmit} type="submit" className="py-3 rounded-md w-full bg-black text-white hover:bg-gray-900">
                {loading ? <Loading /> : "Login"}
              </Button>
            </form>
          </div>
        </Card>

      </div>
    </>

  )
}


export default Login;
