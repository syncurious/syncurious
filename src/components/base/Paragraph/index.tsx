import React from "react";
import { twMerge } from "tailwind-merge";

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const P: React.FC<ParagraphProps> = ({ children, className, style, ...props }) => {
    return (
        <p
            className={twMerge(
                "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed text-gray-800",
                className
            )}
            style={style}
            {...props}
        >
            {children}
        </p>
    );
};

export default P;