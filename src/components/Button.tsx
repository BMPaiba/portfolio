import React from "react";
import type { ButtonType } from "../interfaces";

const ButtonComponent: React.FC<ButtonType> = ({ Icon, label, iconsStyles }) => {
  return (
      <a
        href="https://linkedin.com/in/brian-m-paiba"
        target="_blank"
        rel="noopener"
        className="flex items-center justify-center gap-2 transition md:justify-center md:hover:scale-105 border border-gray-600 hover:border-gray-300 text-gray-500 hover:text-gray-300 px-4 py-2 rounded-xl"
      >
        <Icon className={`${iconsStyles} text-2xl `} />
        <p className="">{label}</p>
      </a>
  );
};

export default ButtonComponent;
