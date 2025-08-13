// src/components/PageWrapper.jsx
import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{
        clipPath: "circle(0% at 50% 50%)"
      }}
      animate={{
        clipPath: "circle(150% at 50% 50%)" // expand to cover whole page
      }}
      exit={{
        clipPath: "circle(0% at 50% 50%)"
      }}
      transition={{
        duration: 0.5, // fast feel
        ease: "easeInOut"
      }}
      className="w-full h-full"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
