"use client";
import Paragraph from "@/components/base/Paragraph";
import { WhyChooseUsSectionsOptions } from "@/constant";
import React from "react";
import { twMerge } from "tailwind-merge";
import SectionHeader from "../../SectionHeader";
import Heading from "@/components/base/heading";
import Image from "next/image";

export default function PortfolioSection() {
  const unselected =
    "gradient-border-card before:[background:linear-gradient(145deg,_rgba(255,255,255,1)_25%,_rgba(0,255,0,0.3)_60%,_rgba(255,255,255,1)_100%)]";

  const [selected, setSelected] = React.useState(0);

  return (
    <SectionHeader
      button="Portfolio"
      heading="Our Work Speaks for Itself"
      paragraph='Printers in the 1500s scrambled the words from Cicero "De Minibus Nongourmet Dolores after mixing the words in each sentence. They abbreviated the word Dolores, which means pain.'
    >
      <div className="px-10">
        <div className="grid grid-cols-2 px-10 gap-5">
          <div className="relative gradient-border-card w-full h-full max-h-[350px] rounded-2xl">
            <Image
              alt="project image"
              height={350}
              width={600}
              src="https://placehold.jp/24/ccffcc/ffffff/800x350.png?css=%7B%22background%20%22%3A%22transparent%22%7D"
              className="h-full border object-cover bg-center rounded-2xl"
            />
            <div className="flex items-start absolute border top-0 h-full w-full">
              <div className="flex justify-between w-full px-5">
                <Heading level={2} fontPrimary gradient className="px-3">
                  Syncurious<span className="text-clip ">.</span>
                </Heading>
                <button className="py-1 bg-primary px-3 rounded-lg text-white">
                  view Project<span className="text-clip ">.</span>
                </button>
              </div>
            </div>
          </div>
          <div className="relative gradient-border-card w-full h-full max-h-[350px] rounded-2xl">
            <Image
              alt="project image"
              height={350}
              width={600}
              src="https://placehold.jp/24/ccffcc/ffffff/800x350.png?css=%7B%22background%20%22%3A%22transparent%22%7D"
              className="h-full border object-cover bg-center rounded-2xl"
            />
            <div className="flex justify-center items-center h-full">
              <Heading level={2} fontPrimary gradient className="px-3">
                Syncurious<span className="text-clip ">.</span>
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </SectionHeader>
  );
}
