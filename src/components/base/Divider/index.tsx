import React from "react";
import { twMerge } from "tailwind-merge";

interface DividerProps {
  color?: string;
  thickness?: string;
  width?: string;
  height?: string;
  margin?: string;
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed" | "dotted";
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  color = "#E5E7EB",
  thickness = "1px",
  width = "100%",
  height = "100%",
  margin = "1rem 0",
  orientation = "horizontal",
  variant = "solid",
  className,
}) => {
  const style =
    orientation === "horizontal"
      ? {
          background: color,
          height: thickness,
          width: width,
          margin: margin,
          borderStyle: variant,
        }
      : {
          background: color,
          width: thickness,
          height: height,
          margin: margin,
          borderStyle: variant,
        };

  return <div className={twMerge(className)} style={style} />;
};

export default Divider;
