import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Section({ style, className, children }: Props) {
  return (
    <section
      style={style}
    className={`w-full h-full md:h-screen max-h-[60rem] ${className}`}
    >
      {children}
    </section>
  );
}
