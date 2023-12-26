import React from "react";
import { motion } from "framer-motion";

const text = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.7,
      staggerChildren: 0.25,
    },
  },
};

const wordAnimateProp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const TextAnimate = ({ children }) => {
  return (
    <>
      <motion.div variants={text} initial="initial" animate="animate">
        {children}
      </motion.div>
    </>
  );
};

const AnimatedHeading = ({ content = "Empty String", className = "" }) => {
  return (
    <>
      <motion.p
        className={`py-0 ${className}`}
        variants={text}
        initial="initial"
        whileInView="animate"
      >
        {content.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={wordAnimateProp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: ((index * 0.7) < 5) ? (index * 0.7) : 5}}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.p>
    </>
  );
};

const BlockAnimate = ({ children }) => {
  return <div>{children}</div>;
};

export { TextAnimate, AnimatedHeading, BlockAnimate };
