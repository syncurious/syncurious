import Divider from "@/components/base/Divider";
import Heading from "@/components/base/heading";
import Paragraph from "@/components/base/Paragraph";
import PillHeading from "@/components/ui/Avatar/PillHeading";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children?: React.ReactNode;
  button?: string;
  heading?: string;
  paragraph?: string;
  className?: string;
  underline?: boolean;
}

export default function SectionHeader({
  children,
  className,
  button,
  heading,
  paragraph,
  underline = true,
}: Props) {
  return (
    <div
      className={twMerge(
        "flex flex-col justify-between gap-10  w-full h-full py-[5%]",
        className
      )}
    >
      <div className="flex flex-col justify-between gap-5">
        {button && (
          <div className="btn w-full flex justify-center">
            <PillHeading>{button}</PillHeading>
          </div>
        )}
        <div className="flex flex-col items-center gap-y-2 md:gap-y-5 text-center">
          {heading && (
            <Heading level={1} fontPrimary gradient className="px-5">
              {heading}
            </Heading>
          )}
          {paragraph && (
            <Paragraph level={4} className="text-white md:w-[50%]  block">
              {paragraph}
            </Paragraph>
          )}
        </div>
      </div>
      {children}
      {underline ? (
        <div className="md:px-10">
          <Divider thickness="2px" className="rounded-full" />
        </div>
      ) : null}
    </div>
  );
}
