import React from "react";
import { twMerge } from "tailwind-merge";
import Paragraph from "../Paragraph";

interface Props {
  children: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "contained" | "outlined" | "text";
  type?: "button" | "submit" | "reset";
  color?:string;
  borderColor?: string; // New prop for border color
  bgColor?: string; // New prop for background color
  textColor?: string; // New prop for text color
}

export default function Button({
  children,
  onClick,
  className,
  variant = "text",
  type = "button",
  borderColor,
  color,
  bgColor,
  textColor,
}: Props) {
  const defaultStyles = {
    contained: {
      borderColor: "border-primary",
      textColor: "text-black",
      bgColor: "bg-primary",
    },
    outlined: {
      borderColor: "border-primary",
      textColor: "text-primary",
      bgColor: "bg-transparent",
    },
    text: {
      borderColor: "border-transparent",
      textColor: "text-primary",
      bgColor: "bg-transparent",
    },
  };

  // Apply default styles if props are not provided
  const appliedBorderColor = borderColor || color || defaultStyles[variant].borderColor;
  const appliedBgColor = bgColor || color || defaultStyles[variant].bgColor;
  const appliedTextColor = textColor || color || defaultStyles[variant].textColor;

  return (
    <button
      type={type}
      className={twMerge(
        "font-medium flex justify-center items-center rounded-md h-fit text-sm px-5 py-3 me-2 mb-2 cursor-pointer",
        variant === "outlined"
          ? `${appliedBorderColor} border ${appliedTextColor} ${appliedBgColor} hover:bg-primary/5`
          : variant === "contained"
          ? `${appliedTextColor} ${appliedBgColor} border border-solid ${appliedBorderColor} hover:bg-primary/90`
          : `${appliedTextColor} ${appliedBgColor} border-none hover:bg-primary/5`,
        className
      )}
      onClick={onClick}
    >
      <div className="flex flex-row gap-3">
        <Paragraph level={5} className={`${appliedTextColor} `}>{children}</Paragraph>
      </div>
    </button>
  );
}
