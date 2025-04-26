"use client";
import Paragraph from "@/components/base/Paragraph";
import React from "react";
import SectionHeader from "../../section/SectionHeader";
import Heading from "@/components/base/heading";
import { TbLocationFilled } from "react-icons/tb";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <SectionHeader
      underline={false}
      button="Contact"
      heading="Get in Touch"
      paragraph="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
    >
      <div className="lg:px-20">
        <div className="gap-5 justify-items-center">
          <div className="gradient-border-card flex flex-row justify-around w-full md:max-w-[30rem] rounded-2xl p-6 !bg-[#ffffff0b]">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex gap-2 items-center">
                <Heading
                className="text-primary"
                  level={1}
                  style={{
                    fontSize: "clamp(2rem, 6vw, 5rem)",
                  }}
                >
                  <TbLocationFilled />
                </Heading>
              </div>
              <Paragraph level={5}>Address</Paragraph>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex gap-2 items-center">
                <Heading
                className="text-primary"
                  level={1}
                  style={{
                    fontSize: "clamp(2rem, 6vw, 5rem)",
                  }}
                >
                  <FaPhoneAlt />
                </Heading>
              </div>
              <Paragraph level={5}>Address</Paragraph>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="flex gap-2 items-center">
                <Heading
                className="text-primary"
                  level={1}
                  style={{
                    fontSize: "clamp(2rem, 6vw, 5rem)",
                  }}
                >
                  <FaWhatsapp />
                </Heading>
              </div>
              <Paragraph level={5}>Address</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </SectionHeader>
  );
}
