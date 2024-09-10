import Button from "../Components/Button";
import Text from "../Components/Text";
import Img from "../Components/Img";
import Input from "../Components/Input";
import { Link } from "react-router-dom";


function Login() {
  return (
    <>
      {/* <Text>Sign in to your account</Text> */}
      <div className="flex min-h-[100dvh] font-sans items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className='flex   items-center flex-col'>
            <Img src="logo.png" className="w-fit" />
            <Text className="mt-6  text-3xl font-bold tracking-tight text-foreground" >Sign in to your account</Text>

          </div>
          <form className="space-y-4">
            <div className='flex flex-col'>
              <Text id="username" className='font-medium'>Username</Text>
              {/* <input className='w-full border px-2 py-2 rounded-md border-gray-200' id="username" type="text" placeholder="Enter your username" required /> */}
              <Input className='w-full border px-2 outline-none py-2 rounded-md border-gray-200' type="password" placeholder="Enter your password" />
            </div>
            <div className='flex flex-col'>
              <Text id="password" className='font-semibold'>Password</Text>
              {/* <input id="password" className='w-full border px-2 py-2 rounded-md border-gray-200' type="password" placeholder="Enter your password" required /> */}
              <Input className='w-full border px-2 outline-none py-2 rounded-md border-gray-200' type="password" placeholder="Enter your password" />
              <Link to={"/forgotpassword"}>
              <Text id="password" className='font-semibold'> Forgot Password ?</Text>
              </Link> 
            </div>
            <Button type="submit" className=" py-3 rounded-md w-full bg-black text-white hover:bg-gray-900">
              Sign in
            </Button>
          </form>
        </div>
      </div> 
    </>
  
)}


export default Login;
