import React from 'react'
// import Login from './Containers/Login'

function App() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>

          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Sign in to your account
          </h2>
        </div>
        <form className="space-y-4">
          <div className='flex flex-col'>
            <label id="username" className='font-medium'>Username</label>
            <input className='w-full border px-2 py-2 rounded-md border-gray-200' id="username" type="text" placeholder="Enter your username" required />
          </div>
          <div className='flex flex-col'>
            <label id="password" className='font-semibold'>Password</label>
            <input id="password" className='w-full border px-2 py-2 rounded-md border-gray-200' type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className=" py-3 rounded-md w-full bg-black text-white hover:bg-gray-900">
            Sign in
          </button>
        </form>
      </div>
    </div> 
  )
}

export default App