import Paragraph from "@/components/base/Paragraph";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PillHeading(props: Props) {
  const { children } = props;

  return (
    <Paragraph
      className="rounded-full py-1 px-4 border border-white
       hover:border-primary hover:text-primary text-white"
      level={5}
    >
      {children}
    </Paragraph>
  );
}
