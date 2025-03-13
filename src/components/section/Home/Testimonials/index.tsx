"use client";
import Paragraph from "@/components/base/Paragraph";
import React from "react";
import SectionHeader from "../../SectionHeader";
import Avatar from "@/components/ui/Avatar";
import Divider from "@/components/base/Divider";

export default function TestimonialsSection() {
  return (
    <SectionHeader button="Testimonials" heading="What Our Clients Say">
      <div className="h-[90%] flex justify-center px-[15rem]">
        <div className="grid grid-cols-3 gap-3 content-center">
        <div className="flex flex-col rounded-2xl p-6 gap-4">
            <div className="flex gap-2 items-center ">
              <div className="h-15 border-2 border-primary rounded-full aspect-square overflow-hidden">
                <Avatar
                  alt="profile"
                  size={50}
                  src="https://photo-cdn2.icons8.com/VZmHco0XQ4XLkYd5NXoAF-rAjI-_4_QG-Kq5klNCSlc/rs:fit:288:192/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNTEzLzc2ODg1/ZmZkLTIxOTUtNGRi/ZC05NGRkLTQ4YWE3/NTQxNTA2Mi5qcGc.webp"
                />
              </div>
            </div>
            <Paragraph level={5}>
              MevensMind elevated our digital presence beyond
              expectations!MevensMind elevated our digital presence beyond
              expectations!
            </Paragraph>
            <Divider color="#ffffff75" />
            <div className="flex justify-between gap-2">
              <Paragraph level={5}>Client Name Company</Paragraph>
              <img src="https://img.icons8.com/?size=40&id=q4Sjf9PaySwr&format=png&color=FFFFFF" />
            </div>
          </div>
          <div className="flex flex-col rounded-2xl p-6 gap-4">
            <div className="flex gap-2 items-center ">
              <div className="h-15 border-2 border-primary rounded-full aspect-square overflow-hidden">
                <Avatar
                  alt="profile"
                  size={50}
                  src="https://photo-cdn2.icons8.com/VZmHco0XQ4XLkYd5NXoAF-rAjI-_4_QG-Kq5klNCSlc/rs:fit:288:192/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNTEzLzc2ODg1/ZmZkLTIxOTUtNGRi/ZC05NGRkLTQ4YWE3/NTQxNTA2Mi5qcGc.webp"
                />
              </div>
            </div>
            <Paragraph level={5}>
              MevensMind elevated our digital presence beyond
              expectations!MevensMind elevated our digital presence beyond
              expectations!
            </Paragraph>
            <Divider color="#ffffff75" />
            <div className="flex justify-between gap-2">
              <Paragraph level={5}>Client Name Company</Paragraph>
              <img src="https://img.icons8.com/?size=40&id=q4Sjf9PaySwr&format=png&color=FFFFFF" />
            </div>
          </div>
          <div className="flex flex-col rounded-2xl p-6 gap-4">
            <div className="flex gap-2 items-center ">
              <div className="h-15 border-2 border-primary rounded-full aspect-square overflow-hidden">
                <Avatar
                  alt="profile"
                  size={50}
                  src="https://photo-cdn2.icons8.com/VZmHco0XQ4XLkYd5NXoAF-rAjI-_4_QG-Kq5klNCSlc/rs:fit:288:192/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvNTEzLzc2ODg1/ZmZkLTIxOTUtNGRi/ZC05NGRkLTQ4YWE3/NTQxNTA2Mi5qcGc.webp"
                />
              </div>
            </div>
            <Paragraph level={5}>
              MevensMind elevated our digital presence beyond
              expectations!MevensMind elevated our digital presence beyond
              expectations!
            </Paragraph>
            <Divider color="#ffffff75" />
            <div className="flex justify-between gap-2">
              <Paragraph level={5}>Client Name Company</Paragraph>
              <img src="https://img.icons8.com/?size=40&id=q4Sjf9PaySwr&format=png&color=FFFFFF" />
            </div>
          </div>
        </div>
      </div>
    </SectionHeader>
  );
}
