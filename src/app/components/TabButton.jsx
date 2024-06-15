import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-black" : "text-[#000000]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-blue ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-gradient-to-br from-blue-500 to-blue-700 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
