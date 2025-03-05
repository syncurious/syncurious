import React from "react";
import Container from "../index";
import Heading from "@/components/base/heading";

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
    <Container
      style={style}
      className={`relative h-screen max-h-[650px] ${className}`}
      innerClassName=" !static h-full "
    >
      {extraComponent}
      <div
        style={overlayStyle}
        className={`absolute w-full h-full top-0 z-[1] left-0 bg-blur ${overlayClassName}`}
      />
      <div
        style={innerStyle}
        className={`relative z-[2] w-full h-full ${innerClassName}`}
      >
        {children}
      </div>
    </Container>
  );
}
