import React from "react";

import cn from "classnames";

import "./styles.css";

const Button = ({ children, variant, size, type, onClick,active }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cn("button", variant, size,active)}
    >
      {children}
    </button>
  );
};

export default Button;
