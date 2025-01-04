'use client'
import React from "react";

const Button = ({ children, variant = "primary" }) => {
  // Define class names based on the variant prop
  const baseClasses = "w-fit px-10 py-2 rounded-full cursor-pointer";
  const variants = {
    primary: "bg-sky-500 text-white",
    secondary: "bg-transparent border border-sky-500 text-sky-500",
  };

  const variantClasses = variants[variant] || variants.primary;

  return (
    <div className={`bg-gray-200 ${baseClasses} ${variantClasses}`}>
      {children}
    </div>
  );
};

export default Button;
