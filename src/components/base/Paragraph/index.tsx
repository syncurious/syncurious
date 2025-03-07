import React from "react";
import { twMerge } from "tailwind-merge";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className, style, level = 1, ...props }) => {
    const levelClasses = [
        "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl",
        "text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl",
        "text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg",
        "text-xs sm:text-xs md:text-xs lg:text-sm xl:text-base",
        "text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm",
        "text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs"
    ];

    return (
        <p
            className={twMerge(
                `${levelClasses[level - 1]} font-medium leading-relaxed text-white`,
                className
            )}
            style={style}
            {...props}
        >
            {children}
        </p>
    );
};

export default Paragraph;