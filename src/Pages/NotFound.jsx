import React from 'react'
import { motion } from "framer-motion"
import Button from '../Components/Common/Button'
import { Link } from 'react-router-dom'
export const NotFound = () => {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary/20 px-4">
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
          >
              <motion.h1
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="text-9xl font-extrabold text-primary mb-4"
              >
                  404
              </motion.h1>
              <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-xl text-muted-foreground mb-8"
              >
                  Oops! The page you're looking for doesn't exist.
              </motion.p>
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
              >
                  <Button className="py-3 rounded-md w-full bg-black text-white hover:bg-gray-900">
                      <Link to="/">
                          Return to Login
                      </Link>
                  </Button>
              </motion.div>
          </motion.div>
      </div>
  )
}
