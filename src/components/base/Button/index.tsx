"use client";
import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  children: string | React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "contained" | "outlined" | "text";
  type?: "button" | "submit" | "reset";
  color?: string;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  containerClassName?: string;
}

const Button = ({
  children,
  onClick,
  containerClassName,
  className,
  variant = "text",
  type = "button",
  borderColor,
  color,
  bgColor,
  textColor,
}: Props) => {
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
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

  const appliedBorderColor =
    borderColor || color || defaultStyles[variant].borderColor;
  const appliedBgColor = bgColor || color || defaultStyles[variant].bgColor;
  const appliedTextColor =
    textColor || color || defaultStyles[variant].textColor;

  useEffect(() => {
    const buttonContainer = buttonContainerRef.current;
    const button = buttonRef.current;
    const text = textRef.current;

    if (!buttonContainer || !button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = buttonContainer.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - buttonCenterX;
      const deltaY = e.clientY - buttonCenterY;

      // Calculate distance
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const triggerRadius = 200; // Radius to activate effect

      if (distance <= triggerRadius) {
        // Apply a fixed movement to the text
        const ButtonSlideFactor = 0.1; // Increased text slide factor for better visibility
        const textSlideFactor = 0.08; // Increased text slide factor for better visibility
        const ButtonX = deltaX * ButtonSlideFactor;
        const ButtonY = deltaY * ButtonSlideFactor;

        const textX = deltaX * textSlideFactor;
        const textY = deltaY * textSlideFactor;

        button.style.transform = `translate(${ButtonX}px, ${ButtonY}px) translateZ(20px)`;
        if (text)
          text.style.transform = `translate(${textX}px, ${textY}px) translateZ(20px)`;
      } else {
        // Reset text position
        button.style.transform = `translate(0px, 0px) translateZ(0px)`;
        if (text) text.style.transform = `translate(0px, 0px) translateZ(0px)`;
      }
    };

    const handleMouseLeave = () => {
      button.style.transform = `translate(0px, 0px) translateZ(0px)`;
      if (text) text.style.transform = `translate(0px, 0px) translateZ(0px)`;
    };

    buttonContainer.addEventListener("mousemove", handleMouseMove);
    buttonContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      buttonContainer.removeEventListener("mousemove", handleMouseMove);
      buttonContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={buttonContainerRef}
      className={`p-2 flex jusf-center items-center ${containerClassName}`}
    >
      <button
        ref={buttonRef}
        onClick={onClick}
        type={type}
        className={twMerge(
          "font-medium flex justify-center items-center rounded-md h-fit text-sm px-5 py-3 cursor-pointer duration-300 ",
          variant === "outlined"
            ? `${appliedBorderColor} border ${appliedTextColor} ${appliedBgColor} hover:bg-primary/5`
            : variant === "contained"
            ? `${appliedTextColor} ${appliedBgColor} border border-solid ${appliedBorderColor} hover:bg-primary/90`
            : `${appliedTextColor} ${appliedBgColor} border-none hover:bg-primary/5`,
          className
        )}
        style={{
          perspective: "800px",
        }}
      >
        <span
          ref={textRef}
          className={`${appliedTextColor} relative z-10 transition-transform duration-300 whitespace-nowrap`}
          style={{
            display: "inline-block",
          }}
        >
          {children}
        </span>
      </button>
    </div>
  );
};

export default Button;
