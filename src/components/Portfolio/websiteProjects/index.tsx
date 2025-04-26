"use client";
import React from "react";
import SectionHeader from "../../section/SectionHeader";
import ProjectCard from "@/components/ui/ProjectsCard";
import { PortfolioWebsiteProjects } from "@/constant";

export default function PortfolioWebsitesSection() {
  return (
    <SectionHeader
      button="Portfolio"
      heading="Development"
      underline={false}
      paragraph='Printers in the 1500s scrambled the words from Cicero "De Minibus Nongourmet Dolores after mixing the words in each sentence. They abbreviated the word Dolores, which means pain.'
    >
      <div className="md:px-10 flex justify-center">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 px-3 gap-5 justify-items-center">
            {PortfolioWebsiteProjects?.map((item, index) => (
              <ProjectCard data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionHeader>
  );
}
