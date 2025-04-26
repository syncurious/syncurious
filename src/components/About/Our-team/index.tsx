"use client";
import Paragraph from "@/components/base/Paragraph";
import React from "react";
import SectionHeader from "../../section/SectionHeader";
import Heading from "@/components/base/heading";
import Image from "next/image";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function OurTeamSection() {
  return (
    <SectionHeader
      underline={false}
      button="Our Team"
      heading="Meet the Professional cyber team"
    >
      <div className="lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
          <div className="gradient-border-card our-team-member-profile-card flex relative rounded-2xl w-full h-[20rem] !bg-[#ffffff0b]">
            <div className="h-full w-full rounuded-2xl">
              <Image
                height={500}
                width={500}
                className="h-full w-full object-contain rounded-2xl"
                src="/assets/images/our-team-member-1.png"
                alt="project image"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full green-to-transparent rounded-2xl">
              <div className="flex flex-col  justify-center items-center gap-2 my-4">
                <Heading level={3}>Mubbashir Hussain</Heading>
                <Paragraph level={5}>Full Stack Developer / Team Lead</Paragraph>
              </div>
            </div>
            <div className="our-team-social-icons absolute  bottom-0 translate-y-0 transition-all duration-150 opacity-0 left-0 w-full green-to-transparent rounded-b-2xl border border-t-0 border-white/40">
              <div className="flex flex-col justify-center items-center gap-2 my-5 mt-10">
                <div className="flex gap-3 flex-wrap md:flex-nowrap">
                  <div className="border rounded-full h-12 md:h-14 aspect-square flex items-center justify-center">
                    <a
                      href="https://www.linkedin.com/company/Syncurious"
                      target="_blank"
                    >
                      <FaLinkedinIn className="text-lg" />
                    </a>
                  </div>
                  <div className="border rounded-full h-12 md:h-14 aspect-square flex items-center justify-center">
                    <a
                      href="https://www.instagram.com/syncurious"
                      target="_blank"
                    >
                      <FaInstagram className="text-lg" />
                    </a>
                  </div>

                  <div className="border rounded-full h-12 md:h-14 aspect-square flex items-center justify-center">
                    <a
                      href="https://api.whatsapp.com/send?phone=033272199402"
                      target="_blank"
                    >
                      <FaWhatsapp className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gradient-border-card our-team-member-profile-card flex relative rounded-2xl w-full h-[20rem] !bg-[#ffffff0b]">
            <div className="h-full w-full rounuded-2xl">
              <Image
                height={500}
                width={500}
                className="h-full w-full object-contain rounded-2xl"
                src="/assets/images/our-team-member-1.png"
                alt="project image"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full green-to-transparent rounded-2xl">
              <div className="flex flex-col  justify-center items-center gap-2 my-4">
                <Heading level={3}>Aqib Iqbal</Heading>
                <Paragraph level={5}>Front-end Developer</Paragraph>
              </div>
            </div>
            <div className="our-team-social-icons absolute  bottom-0 translate-y-0 transition-all duration-150 opacity-0 left-0 w-full green-to-transparent rounded-b-2xl border border-t-0 border-white/40">
              <div className="flex flex-col justify-center items-center gap-2 my-5 mt-10">
                <div className="flex gap-3 flex-wrap md:flex-nowrap">
                  <div className="border rounded-full h-12 md:h-14 aspect-square flex items-center justify-center">
                    <a
                      href="https://www.linkedin.com/company/Syncurious"
                      target="_blank"
                    >
                      <FaLinkedinIn className="text-lg" />
                    </a>
                  </div>
                  <div className="border rounded-full h-12 md:h-14 aspect-square flex items-center justify-center">
                    <a
                      href="https://www.instagram.com/syncurious"
                      target="_blank"
                    >
                      <FaInstagram className="text-lg" />
                    </a>
                  </div>

                  <div className="border rounded-full h-12 md:h-14 aspect-square flex items-center justify-center">
                    <a
                      href="https://api.whatsapp.com/send?phone=033272199402"
                      target="_blank"
                    >
                      <FaWhatsapp className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gradient-border-card our-team-member-profile-card flex relative rounded-2xl w-full h-[20rem] !bg-[#ffffff0b]">
            <div className="h-full w-full rounuded-2xl">
              <Image
                height={500}
                width={500}
                className="h-full w-full object-contain rounded-2xl"
                src="/assets/images/our-team-member-1.png"
                alt="project image"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full green-to-transparent rounded-2xl">
              <div className="flex flex-col  justify-center items-center gap-2 my-4">
                <Heading level={3}>Abdul Sammad</Heading>
                <Paragraph level={5}>Desginer</Paragraph>
              </div>
            </div>
            <div className="our-team-social-icons absolute  bottom-0 translate-y-0 transition-all duration-150 opacity-0 left-0 w-full green-to-transparent rounded-b-2xl border border-t-0 border-white/40">
              <div className="flex flex-col justify-center items-center gap-2 my-5 mt-10">
                <div className="flex gap-3 flex-wrap md:flex-nowrap">
                  <div className="border rounded-full h-12 md:h-14 aspect-square flex items-center justify-center">
                    <a
                      href="https://www.linkedin.com/company/Syncurious"
                      target="_blank"
                    >
                      <FaLinkedinIn className="text-lg" />
                    </a>
                  </div>
                  <div className="border rounded-full h-12 md:h-14 aspect-square flex items-center justify-center">
                    <a
                      href="https://www.instagram.com/syncurious"
                      target="_blank"
                    >
                      <FaInstagram className="text-lg" />
                    </a>
                  </div>

                  <div className="border rounded-full h-12 md:h-14 aspect-square flex items-center justify-center">
                    <a
                      href="https://api.whatsapp.com/send?phone=033272199402"
                      target="_blank"
                    >
                      <FaWhatsapp className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionHeader>
  );
}
