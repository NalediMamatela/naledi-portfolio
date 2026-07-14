import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">

      <motion.div
        animate={{
          x: [0, 200, 0],
          y: [0, -100, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="absolute w-96 h-96 rounded-full bg-pink-500/10 blur-3xl top-10 left-10"
      />

      <motion.div
        animate={{
          x: [0, -250, 0],
          y: [0, 180, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-3xl bottom-20 right-20"
      />

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 120, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="absolute w-80 h-80 rounded-full bg-fuchsia-500/10 blur-3xl bottom-60 left-1/3"
      />

    </div>
  );
}

export default Background;