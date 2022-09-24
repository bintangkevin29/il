import React from "react";

import "./button.style.scss";

interface ButtonProps {
  theme?: "danger" | "default" | "primary";
  children?: React.ReactNode;
  className?: string;
  size?: "md" | "sm" | "lg";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  theme = "default",
  className,
  size = "md",
  onClick,
  type = "button",
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`button button--${theme} button--${size} ${className}`}
  >
    {children}
  </button>
);

export default Button;
