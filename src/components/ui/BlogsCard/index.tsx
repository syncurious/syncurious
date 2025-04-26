import DisableLink from "@/components/base/DisbableLink";
import Heading from "@/components/base/heading";
import Paragraph from "@/components/base/Paragraph";
import React from "react";

export interface BlogCardData {
  name: string;
  title: string;
  is_bottom_name: boolean;
  is_link_disable: boolean;
  link: string;
  description: string;
  image: string;
}
interface Props {
  data: BlogCardData;
}

function BlogCard(props: Props) {
  return (
    <div className="single-Blog-Card flex flex-col relative w-full max-w-[20rem] rounded-2xl gap-5">
      <div className="">
        <img
          alt="project image"
          height={650}
          width={300}
          style={{ aspectRatio: "1/1" }}
          src={props?.data?.image}
          className="w-full object-cover bg-center rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-2 justify-between py-2 w-full z-10">
        <div className="flex flex-row justify-between">
          <Heading level={5} className=" text-white">
            {props?.data?.title}
          </Heading>
          <DisableLink
            href={props?.data?.link}
            isDisabled={props?.data?.is_link_disable}
            className="py-1 px-3 bg-primary  rounded-lg font-medium "
          >
            <Paragraph level={4} className="text-black">
              View
            </Paragraph>
          </DisableLink>
        </div>
        <Paragraph level={5} className="">
          {props?.data?.description}
        </Paragraph>
      </div>
    </div>
  );
}

export default BlogCard;
