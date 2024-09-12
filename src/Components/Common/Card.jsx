import { motion } from "framer-motion"
const Card = (props) => {
  const transition = {
    duration: 0.5,
    ease: [0, 0.61, 0.1, 1.01],
    scale: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      restDelta: 0.0002
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: 600, }}
      animate={{ opacity: 1, x: 0, }}
      transition={transition}
      className="w-full max-w-md bg-white p-10 rounded-lg drop-shadow-sm ">
      {props.children}
      </motion.div>
  )
}

export default Card