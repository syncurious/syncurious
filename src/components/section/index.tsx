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
      className={`w-full h-screen max-h-[40rem] ${className}`}
    >
      {children}
    </section>
  );
}
