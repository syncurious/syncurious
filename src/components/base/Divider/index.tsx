import React from "react";
import { twMerge } from "tailwind-merge";

interface DividerProps {
  color?: string;
  thickness?: string;
  width?: string;
  margin?: string;
  variant?: "solid" | "dashed" | "dotted";
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  color = "#E5E7EB",
  thickness = "1px",
  width = "100%",
  margin = "1rem 0",
  className,
}) => {
  return (
    <div
      className={twMerge(className)}
      style={{
        background: color,
        height: thickness,
        width: width,
        margin: margin,
      }}
    />
  );
};

export default Divider;
