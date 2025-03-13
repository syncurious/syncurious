import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  overlayClassName?: string;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
  overlayStyle?: React.CSSProperties;
  extraComponent?: React.ReactNode;
}

export default function SecondaryContainer(props: Props) {
  const {
    children,
    className,
    style,
    innerStyle,
    innerClassName,
    overlayClassName,
    overlayStyle,
    extraComponent,
  } = props;

  return (
    <div
      style={style}
      className={`w-full bg-background relative flex justify-center items-center ${className}`}
    >
      <div
        style={overlayStyle}
        className={`absolute w-full h-full top-0 z-[1] left-0 bg-blur ${overlayClassName}`}
      />
      <div
        style={innerStyle}
        className={`w-full max-w-[1440px] h-full px-3 absolute ${innerClassName}`}
      >
        {extraComponent}
      </div>
      <div
        style={innerStyle}
        className={`w-full max-w-[1440px] z-10 px-3 relative ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
