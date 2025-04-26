"use client";

import Heading from "@/components/base/heading";
import Paragraph from "@/components/base/Paragraph";
import React from "react";

type Step = {
  title: string;
  description: string;
};

type Props = {
  steps: Step[];
  color?: string; // Tailwind color like 'green'
};

const VerticalStepper: React.FC<Props> = ({ steps }) => {
  return (
    <div className="relative">
      <div
        className="h-full w-1 absolute  top-[1.2%] green-to-transparent rotate-180"></div>
      {steps.map((step, index) => (
        <div key={index} className="mb-12 relative">
          {/* Dot */}
          <span
            className="absolute -left-[1.5%] w-5 h-5 rounded-full"
            style={{
              backgroundColor: "#00FF00", // neon green
              top: "0.25rem",
            }}
          ></span>

          {/* Content */}
          <div className="pl-8">
            <Heading level={3} className="text-white text-xl font-bold">
              {step.title}
            </Heading>
            <Paragraph level={5} className="text-white text-sm mt-2">
              {step.description}
            </Paragraph>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalStepper;
