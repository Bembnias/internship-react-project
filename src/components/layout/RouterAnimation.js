// This component provides smooth transition between routes that has been wrapped in it
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 }
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{ duration: .8 }}
      variants={animations}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;