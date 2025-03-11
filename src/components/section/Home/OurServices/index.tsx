"use client";
import Paragraph from "@/components/base/Paragraph";
import React from "react";
import SectionHeader from "../../SectionHeader";
import Heading from "@/components/base/heading";

export default function PortfolioSection() {
  return (
    <SectionHeader
      underline={false}
      button="Our Services"
      heading="Our Services Speak for Themselves"
      paragraph="We blend innovation with experience to deliver outstanding digital solutions. Our expert team is dedicated to understanding your unique needs."
    >
      <div className="px-20">
        <div className="grid grid-cols-3 gap-5">
          <div className="gradient-border-card flex flex-col border rounded-2xl p-6 gap-2">
            <div className="flex gap-2 items-center">
              <div className="h-[30px] w-[30px]">
                <img
                  src="https://img.icons8.com/?size=100&id=77155&format=png&color=FFFFFF"
                  alt="project image"
                />
              </div>
              <Heading level={3}>Brand Identity & Design</Heading>
            </div>
            <Paragraph level={5}>
              We specialize in crafting unique logos that leave a lasting
              impression, developing clear and detailed brand guidelines to
              ensure consistency, and designing cohesive visual identities that
              truly reflect your brand's personality.
            </Paragraph>
          </div>
          <div className="gradient-border-card flex flex-col border rounded-2xl p-6 gap-2">
            <div className="flex gap-2 items-center">
              <div className="h-[30px] w-[30px]">
                <img
                  src="https://img.icons8.com/?size=100&id=61SQFVq3xULD&format=png&color=FFFFFF"
                  alt="project image"
                />
              </div>
              <Heading level={3}>Brand Identity & Design</Heading>
            </div>
            <Paragraph level={5}>
              We specialize in crafting unique logos that leave a lasting
              impression, developing clear and detailed brand guidelines to
              ensure consistency, and designing cohesive visual identities that
              truly reflect your brand's personality.
            </Paragraph>
          </div>
          <div className="gradient-border-card flex flex-col border rounded-2xl p-6 gap-2">
            <div className="flex gap-2 items-center">
              <div className="h-[30px] w-[30px]">
                <img
                  src="https://img.icons8.com/?size=100&id=jK0ocuDVKA3W&format=png&color=ffffff"
                  alt="project image"
                />
              </div>
              <Heading level={3}>Brand Identity & Design</Heading>
            </div>
            <Paragraph level={5}>
              We specialize in crafting unique logos that leave a lasting
              impression, developing clear and detailed brand guidelines to
              ensure consistency, and designing cohesive visual identities that
              truly reflect your brand's personality.
            </Paragraph>
          </div>
        </div>
      </div>
    </SectionHeader>
  );
}
