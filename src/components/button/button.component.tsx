import React from "react";

import "./button.style.scss";

interface ButtonProps {
  theme?: "danger" | "default" | "primary";
}

const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    ButtonProps
> = ({ children, theme = "default" }) => {
  return <button className={`button button--${theme}`}>{children}</button>;
};

export default Button;
