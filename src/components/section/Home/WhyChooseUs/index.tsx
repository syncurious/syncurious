"use client";
import Paragraph from "@/components/base/Paragraph";
import { WhyChooseUsSectionsOptions } from "@/constant";
import React from "react";
import { twMerge } from "tailwind-merge";
import SectionHeader from "../../SectionHeader";

export default function WhyChooseUsSection() {
  const unselected =
    "gradient-border-card before:[background:linear-gradient(145deg,_rgba(255,255,255,1)_25%,_rgba(0,255,0,0.3)_60%,_rgba(255,255,255,1)_100%)]";

  const [selected, setSelected] = React.useState(0);

  return (
    <SectionHeader
      button="Why Choose Us"
      heading="Why Choose Syncurious"
      paragraph="We blend innovation with experience to deliver outstanding digital solutions. Our expert team is dedicated to understanding your unique needs."
    >
      <div className="flex justify-center">
        <ul className="flex flex-col gap-5">
          {WhyChooseUsSectionsOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => setSelected(index)}
              className={twMerge(
                "py-2 px-5 rounded-lg cursor-pointer",
                selected == index ? "!bg-primary" : unselected
              )}
            >
              <Paragraph
                level={3}
                className={twMerge(
                  "flex gap-3 items-center ",
                  selected == index ? "text-background" : "text-white"
                )}
              >
                <div
                  className={twMerge(
                    "h-5 aspect-square bg-transparent border-2 rounded-full",
                    selected == index ? "bg-white" : ""
                  )}
                />
                {option.lable}
              </Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </SectionHeader>
  );
}
