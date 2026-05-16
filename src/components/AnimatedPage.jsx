import { motion } from 'framer-motion'

const pageVariants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.98
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 1.02
  }
}

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage
