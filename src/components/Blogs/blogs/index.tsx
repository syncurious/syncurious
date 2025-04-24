"use client";
import React from "react";
import SectionHeader from "../../section/SectionHeader";
import BlogCard from "@/components/ui/BlogsCard";
import { Blogs } from "@/constant";

export default function BlogsSection() {
  return (
    <SectionHeader
      button="Blogs"
      heading="Our Blogs"
      underline={false}
      paragraph='Stay informed with the latest insights and trends in technology and development. Our blogs offer expert advice, industry updates.'
    >
      <div className="md:px-10 flex justify-center">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 px-3 gap-5 justify-items-center">
            {Blogs?.map((item, index) => (
              <BlogCard data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </SectionHeader>
  );
}
