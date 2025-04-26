"use client";
import Paragraph from "@/components/base/Paragraph";
import React from "react";
import SectionHeader from "../../section/SectionHeader";
import Heading from "@/components/base/heading";

export default function ServicesSection() {
  return (
    <SectionHeader
      underline={false}
      button="Our Services"
      heading="Our Services Speak for Themselves"
      paragraph="We blend innovation with experience to deliver outstanding digital solutions. Our expert team is dedicated to understanding your unique needs."
    >
      <div className="lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
          <div className="gradient-border-card flex flex-col rounded-2xl max-w-[25rem] p-6 gap-2 !bg-[#ffffff0b]">
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
          <div className="gradient-border-card flex flex-col rounded-2xl max-w-[25rem] p-6 gap-2 !bg-[#ffffff0b]">
            <div className="flex gap-2 items-center">
              <div className="h-[30px] w-[30px]">
                <img
                  src="https://img.icons8.com/?size=100&id=61SQFVq3xULD&format=png&color=FFFFFF"
                  alt="project image"
                />
              </div>
              <Heading level={3}>Dynamic Website Development</Heading>
            </div>
            <Paragraph level={5}>
              We design and develop responsive websites tailored for IT, ICT,
              and ELV businesses. Our solutions ensure seamless functionality
              across all devices, providing an engaging user experience that
              reflects your expertise.
            </Paragraph>
          </div>
          <div className="gradient-border-card flex flex-col rounded-2xl max-w-[25rem] p-6 gap-2 !bg-[#ffffff0b]">
            <div className="flex gap-2 items-center">
              <div className="h-[30px] w-[30px]">
                <img
                  src="https://img.icons8.com/?size=100&id=jK0ocuDVKA3W&format=png&color=ffffff"
                  alt="project image"
                />
              </div>
              <Heading level={3}>Social Media Strategies</Heading>
            </div>
            <Paragraph level={5}>
              We specialize in designing and developing responsive websites
              specifically for IT, ICT, and ELV businesses. Our websites are
              crafted to ensure seamless performance across all devices,
              delivering an engaging user.
            </Paragraph>
          </div>
        </div>
      </div>
    </SectionHeader>
  );
}
