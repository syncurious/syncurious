import { JSX } from "react";
import { twMerge } from "tailwind-merge";

interface PropsType {
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  className?: string;
  capitalizeFirst?: boolean;
  ellipsis?: boolean;
  lines?: number;
  gradient?: boolean;
  fontPrimary?: boolean;
  style?: React.CSSProperties;
  children: JSX.Element | string | (JSX.Element | string)[];
}

const baseClasses = [
  "text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold", // h1
  "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold", // h2
  "text-base sm:text-lg md:text-xl lg:text-2xl font-medium", // h3
  "text-sm sm:text-base md:text-lg lg:text-xl font-medium", // h4
  "text-sm sm:text-base md:text-lg font-medium", // h5
  "text-xs sm:text-sm md:text-base lg:text-lg font-medium", // h6
  "text-xs sm:text-sm md:text-base font-medium", // h7
  "text-xs sm:text-sm font-medium", // h8
  "text-xs font-medium", // h9
  "text-xs font-normal", // h10
];

export default function Heading({
  level,
  className,
  gradient = false,
  capitalizeFirst = true,
  ellipsis = false,
  fontPrimary  = false,
  lines,
  children,
  style,
}: PropsType) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements as any;

  const ellipsisStyle: React.CSSProperties = lines
    ? {
        display: "-webkit-box",
        WebkitLineClamp: lines,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        width: "100%",
      }
    : ellipsis
    ? {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        width: "100%",
      }
    : {};

  return (
    <Tag
      style={{ ...style, ...ellipsisStyle }}
      className={twMerge(
        baseClasses[level - 1],
        capitalizeFirst ? "capitalize-first" : "capitalize",
        "block",
        gradient
          ? " gradient-text"
          : "",
        fontPrimary
          ? "font-primary !leading-[3.5rem] text-center tracking-[0.125rem]"
          : "",
        className
      )}
    >
      {children}
    </Tag>
  );
}
