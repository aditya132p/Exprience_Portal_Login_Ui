


function Login() {
  return (
    <>
      {/* <Text>Sign in to your account</Text> */}

      <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
              Sign in to your account
            </h2>
          </div>
          <form className="space-y-4">
            <div>
              <label id="username">Username</label>

              <input id="username" type="text" placeholder="Enter your username" required />
            </div>
            <div>
              <label id="password">Password</label>
              <input id="password" type="password" placeholder="Enter your password" required />
            </div>
            <button type="submit" className="w-full">
              Sign in
            </button>
          </form>
        </div>
      </div>   
    </>
  
)}
// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   )
// }


export default Login;
