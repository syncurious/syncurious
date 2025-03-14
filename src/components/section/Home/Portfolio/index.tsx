"use client";
import Paragraph from "@/components/base/Paragraph";
import React from "react";
import SectionHeader from "../../SectionHeader";
import Heading from "@/components/base/heading";

export default function PortfolioSection() {

  return (
    <SectionHeader
      button="Portfolio"
      heading="Our Work Speaks for Itself"
      paragraph='Printers in the 1500s scrambled the words from Cicero "De Minibus Nongourmet Dolores after mixing the words in each sentence. They abbreviated the word Dolores, which means pain.'
    >
      <div className="px-10">
        <div className="grid grid-cols-2 px-10 gap-5">
          <div className="relative gradient-border-card w-full h-[250px] max-h-[350px] rounded-2xl">
            <img
              alt="project image"
              height={350}
              width={600}
              src="https://i.ytimg.com/vi/vDMyIZ2nsS0/maxresdefault.jpg"
              className="h-full object-cover bg-center rounded-2xl"
            />
            <div
              className="flex items-start absolute gap-3 top-0 h-full w-full flex-col justify-between px-5 cursor-pointer
              opacity-0 hover:opacity-100 before:transition-all duration-700
             before:absolute before:inset-0 before:rounded-lg before:pointer-events-none 
             before:[background:linear-gradient(180deg,_rgba(0,0,0,0.4458)_0%,_rgba(0,0,0,0)_25%,_rgba(255,255,255,0)_55%,_rgba(0,0,0,0.45)_100%)]
            "
            >
              <div className="flex justify-between py-2 items-center w-full z-10">
                <Heading level={1} className=" text-white">
                  Syncurious
                </Heading>
                <button className=" py-1 px-3 bg-primary  rounded-lg font-medium ">
                  <Paragraph level={4} className="text-black">
                    View Project
                  </Paragraph>
                </button>
              </div>
              <div className="flex flex-col gap-2 justify-between py-2 w-full z-10">
                <Heading level={5} className=" text-white">
                  Mobile Application
                </Heading>
                <Paragraph level={5} className="">
                  Printers in the 1500s scrambled the words from Cicero's "De
                  Minibus Nongourmet Dolores'' after mixing the words in each
                  sentence. They abbreviated the word Dolores, which means pain.
                </Paragraph>
              </div>
            </div>
          </div>
          <div className="relative gradient-border-card w-full h-[250px] max-h-[350px] rounded-2xl">
            <img
              alt="project image"
              height={350}
              width={600}
              src="https://s.tmimgcdn.com/scr/800x500/438300/pathway-to-success-presentation-template_438399-original.png"
              className="h-full object-cover bg-center rounded-2xl"
            />
            <div
              className="flex items-start absolute gap-3 top-0 h-full w-full flex-col justify-between px-5 cursor-pointer
              opacity-0 hover:opacity-100 before:transition-all duration-700
             before:absolute before:inset-0 before:rounded-lg before:pointer-events-none 
             before:[background:linear-gradient(180deg,_rgba(0,0,0,0.4458)_0%,_rgba(0,0,0,0)_25%,_rgba(255,255,255,0)_55%,_rgba(0,0,0,0.45)_100%)]
            "
            >
              <div className="flex justify-between py-2 items-center w-full z-10">
                <Heading level={1} className=" text-white">
                  Syncurious
                </Heading>
                <button className=" py-1 px-3 bg-primary  rounded-lg font-medium ">
                  <Paragraph level={4} className="text-black">
                    View Project
                  </Paragraph>
                </button>
              </div>
              <div className="flex flex-col gap-2 justify-between py-2 w-full z-10">
                <Heading level={5} className=" text-white">
                  Mobile Application
                </Heading>
                <Paragraph level={5} className="">
                  Printers in the 1500s scrambled the words from Cicero's "De
                  Minibus Nongourmet Dolores'' after mixing the words in each
                  sentence. They abbreviated the word Dolores, which means pain.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionHeader>
  );
}
