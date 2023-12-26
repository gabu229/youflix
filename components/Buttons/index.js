import { motion } from "framer-motion";

const PrimaryButton = ({ content = "Empty String", className = "", size="sm" }) => {
  return (
    <>
      <button className={`btn-primary btn-${size} ${className}`}>
        {content}
      </button>
    </>
  );
};

const SecondaryButton = ({ content = "Empty String", className = "", size="sm" }) => {
  return (
    <>
      <button className={`btn-secondary btn-${size} ${className}`}>
        {content}
      </button>
    </>
  );
};

export { PrimaryButton, SecondaryButton };
