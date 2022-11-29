import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type='button'
      className={`py-4 px-6 bg-gradient-to-l from-blue-600 to-blue-300 font-poppins font-medium text-[18px] rounded-[10px] text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
