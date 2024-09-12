import React, { useState } from 'react'
import Card from './Common/Card'
import Text from './Common/Text'
import Input from './Common/Input'
import { motion } from "framer-motion";
import Button from './Common/Button'
import { ArrowRight, BadgeCheck } from 'lucide-react'
import Loading from './Common/Loading';


function ChangePassword() {
  const [loading , setLoading] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')


  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    if (!newPassword || !confirmPassword) {
      setError('Please fill in both password fields')
      setLoading(false)
      return
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long')
      setLoading(false)
      return
    }
    setError('')
    
    setTimeout(() => {
      setIsSubmitted(true)
      setLoading(false)
    }, 1000)
  }


  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
       
          <Text className="text-3xl font-bold mb-10">Change Your Password</Text>
        
        <div>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                      className={`w-full border px-2 outline-none py-2 rounded-md border-gray-200 ${error&& 'border-red-500'}`}
                  />
                  
                </div>
              </div>
              <div className="mb-4">
                <Input
                  type= "password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full border px-2 outline-none py-2 rounded-md border-gray-200 ${error && 'border-red-500'}`}
                />
              </div>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              <Button type="submit" className="flex items-center justify-center  py-3 rounded-md w-full bg-black text-white hover:bg-gray-900">
               {!loading ? <>
                Change Password
                <ArrowRight className="ml-2 h-4 w-4"/>
               </>   : <Loading /> }
              </Button>
            </form>
          ) : (
            <div className="text-center">
                <motion.div
                 initial={{ scale: 0.5 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
              <BadgeCheck className="mx-auto h-12 w-12 text-green-500 mb-4" />
                </motion.div>
              <p className="text-lg font-semibold">Password Changed Successfully</p>
              <p className="text-gray-600">Your password has been updated.</p>
            </div>
          )}
        </div>
      </Card>
    </div>
    </>
  )
}

export default ChangePassword