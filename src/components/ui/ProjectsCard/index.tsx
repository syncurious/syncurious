import DisableLink from "@/components/base/DisbableLink";
import Heading from "@/components/base/heading";
import Paragraph from "@/components/base/Paragraph";
import React from "react";

export interface ProjectCardData {
    name: string;
    title: string;
    is_bottom_name: boolean;
    is_link_disable: boolean;
    link: string;
    description: string;
    image: string;
}
interface Props {
  data : ProjectCardData
}

function ProjectCard(props: Props) {
  return (
    <div className="single-Product-Card">
      <div className="relative gradient-border-card w-full h-[250px] max-w-[30rem] max-h-[350px] rounded-2xl">
        <img
          alt="project image"
          height={350}
          width={600}
          src={props?.data?.image}
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
              {props?.data?.name}
            </Heading>
            <DisableLink
              href={props?.data?.link}
              isDisabled={props?.data?.is_link_disable}
              className=" py-1 px-3 bg-primary  rounded-lg font-medium "
            >
              <Paragraph level={4} className="text-black">
                View Project
              </Paragraph>
            </DisableLink>
          </div>
          <div className="flex flex-col gap-2 justify-between py-2 w-full z-10">
            <Heading level={5} className=" text-white">
              {props?.data?.title}
            </Heading>
            <Paragraph level={5} className="">
              {props?.data?.description}
            </Paragraph>
          </div>
        </div>
      </div>
      {props?.data?.is_bottom_name ? (
        <Heading level={3} fontPrimary className="text-center">
          {props?.data?.name}
        </Heading>
      ) : null}
    </div>
  );
}

export default ProjectCard;
