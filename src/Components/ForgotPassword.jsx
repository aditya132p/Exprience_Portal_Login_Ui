import { ArrowRight,BadgeCheck } from 'lucide-react'
import React, { useState } from 'react'


function ForgotPassword() {

  const [ isSubmitted , setIsSubmitted ] = useState(false)

  let handleSubmit = () => {
    setIsSubmitted(true)
  }


  return (
    <div className="flex justify-center items-center min-h-screen text-center bg-gray-200 border-2">
    <div className="w-full max-w-md bg-white p-10 rounded-lg">
     
        <h1 className="text-3xl font-bold mb-10">Forgot Password</h1>
      
      <div>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg"
              />
              {/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
            </div>
            <button type="submit" className="w-full bg-black p-3 rounded-lg flex items-center justify-center text-white">
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        ) : (
          <div className="text-center">
            {/* <div className="mx-auto h-12 w-12 text-green-500 mb-4" /> */}
            <BadgeCheck className="mx-auto h-12 w-12 text-green-500 mb-4"/>
            <p className="text-lg font-semibold">Check your registered email</p>
            <p className="text-gray-600">We've sent a link to reset your password.</p>
          </div>
        )}
      </div>
    </div>
  </div>
)
}
  
export default ForgotPassword