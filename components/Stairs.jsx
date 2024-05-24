import { motion } from "framer-motion";

//
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Calculate the reversed index
const reversedIndex = (index) => {
  const totalSteps = 6; //number of steps
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Rendering 6 motions div, each representing a step of the stairs 
    Each div will have the same animation defined by the stairAnimation Object
    The delay for each div is calculated dynamically based on its reversed index
    */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reversedIndex(index) * 0.1,
            }}
            className="h-full w-full relative bg-white"
          />
        );
      })}
    </>
  );
};

export default Stairs;
