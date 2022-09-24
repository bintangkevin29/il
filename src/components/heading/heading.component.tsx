import React from "react";
import "./heading.styles.scss";

interface HeadingProps {
  align?: "left" | "right" | "center";
  children?: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  children,
  align = "left",
  className,
}) => {
  return (
    <h1 className={`heading heading--${align} ${className || ""}`}>
      {children}
    </h1>
  );
};

export default Heading;
