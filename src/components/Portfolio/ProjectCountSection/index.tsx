"use client";
import React from "react";
import Heading from "@/components/base/heading";
import Paragraph from "@/components/base/Paragraph";

export default function ProjectCountSection() {
  return (
    <div className="flex justify-center items-center mt-10 md:mt-20">
      <div className=" flex flex-row rounded-2xl md:p-6 md:gap-5 gap-2">
        <div className="flex flex-col p-5 md:p-20 rounded-2xl footer-gradient justify-center items-center gap-1">
          <Heading
            className="text-background"
            level={1}
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
            }}
          >
            25+
          </Heading>
          <Paragraph level={4} className="text-background">Web Develop</Paragraph>
        </div>
        <div className="flex flex-col p-5 md:p-20 rounded-2xl footer-gradient justify-center items-center gap-1">
          <Heading
            className="text-background"
            level={1}
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
            }}
          >
            25+
          </Heading>
          <Paragraph level={4} className="text-background">Web Develop</Paragraph>
        </div>
        <div className="flex flex-col p-5 md:p-20 rounded-2xl footer-gradient justify-center items-center gap-3">
          <Heading
            className="text-background"
            level={1}
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
            }}
          >
            25+
          </Heading>
          <Paragraph level={4} className="text-background">Web Develop</Paragraph>
        </div>
      </div>
    </div>
  );
}
