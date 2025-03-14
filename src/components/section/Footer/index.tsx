"use client";

import Heading from "@/components/base/heading";
import Section from "../";
import Paragraph from "@/components/base/Paragraph";
import Divider from "@/components/base/Divider";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="">
      <Section className=" !h-full p-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5 justify-between grid-flow-col">
          <div className="col-span-4  h-full flex flex-col md:gap-2">
            <div className="flex flex-col gap-2 md:gap-5 md:pr-6 ">
              <Heading level={3} className="font-semibold">
                Let’s Elevate Your Digital Presence
              </Heading>
              <Heading level={6}>
                Ready To Build <br />
                <Heading level={6} className="font-semibold">
                  Something Incredible?
                </Heading>
              </Heading>
              <Paragraph level={5}>
                Reach out and we’ll be in touch soon!
              </Paragraph>
            </div>
            <Divider className="!border md:border-2" />
            <div className="flex flex-col gap-2 md:pr-6">
              <Paragraph level={5}>
                Office # 17, Second Floor, CMA Tower, Block-6, Gulshan-e-Iqbal,
                Karachi, Pakistan.
              </Paragraph>
              <Paragraph level={5}>
                <a href="mailto:Syncurious@gmail.com">Syncurious@gmail.com</a>
              </Paragraph>
              <Paragraph level={5}>
                <a href="tel:+923272199402">+923272199402</a>
              </Paragraph>
            </div>
            <div className="flex flex-col gap-2 md:gap-4 pr-6 mt-4">
              <Paragraph level={4}>Start the conversation!</Paragraph>
              <div className="flex gap-2 flex-wrap md:flex-nowrap">
                <div className="border rounded-md h-8 md:h-10 aspect-square flex items-center justify-center">
                  <a
                    href="https://www.linkedin.com/company/Syncurious"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm" />
                  </a>
                </div>
                <div className="border rounded-md h-8 md:h-10 aspect-square flex items-center justify-center">
                  <a
                    href="https://www.instagram.com/syncurious"
                    target="_blank"
                  >
                    <FaInstagram className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm" />
                  </a>
                </div>
                <div className="border rounded-md h-8 md:h-10 aspect-square flex items-center justify-center">
                  <a href="https://www.facebook.com/syncurious" target="_blank">
                    <FaFacebookF className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm" />
                  </a>
                </div>
                <div className="border rounded-md h-8 md:h-10 aspect-square flex items-center justify-center">
                  <a href="tel:+923272199402" target="_blank">
                    <FaPhoneAlt className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm" />
                  </a>
                </div>
                <div className="border rounded-md h-8 md:h-10 aspect-square flex items-center justify-center">
                  <a
                    href="https://api.whatsapp.com/send?phone=033272199402"
                    target="_blank"
                  >
                    <FaWhatsapp className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm" />
                  </a>
                </div>
                <div className="border rounded-md h-8 md:h-10 aspect-square flex items-center justify-center">
                  <a href="mailto:Syncurious@gmail.com" target="_blank">
                    <FaEnvelope className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-span-3 hidden md:flex  flex-col gap-5 justify-self-center">
            <Heading level={6}>Overview</Heading>
            <ul
              className="flex ml-7 flex-col gap-1"
              style={{ listStyle: "initial" }}
            >
              <li>
                <Paragraph className="hover:underline" level={5}>
                  <Link href={"/About"}>About us</Link>
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  <Link href={"/Service"}>Service</Link>
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  <Link href={"/Portfolio"}>Portfolio</Link>
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  <Link href={"/Blogs"}>Blogs</Link>
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  <Link href={"/Contact"}>Contact</Link>
                </Paragraph>
              </li>
            </ul>
          </div>
          <div className="col-span-3 hidden md:flex  flex-col gap-5">
            <Heading level={6}>Solutions</Heading>
            <ul
              className="flex ml-7 flex-col gap-1"
              style={{ listStyle: "initial" }}
            >
              <li>
                <Paragraph className="hover:underline" level={5}>
                  Content Creation
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  Content Marketing
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  Brand Identity & Design
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  Branding & Communication
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  Digital Marketing
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  Personal Branding
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  Web Development
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  IT Resourcing
                </Paragraph>
              </li>
            </ul>
          </div>
          <div className="col-span-3 hidden md:flex  flex-col gap-5">
            <Heading level={6}>Highlighted Services</Heading>
            <ul
              className="flex ml-7 flex-col gap-1"
              style={{ listStyle: "initial" }}
            >
              <li>
                <Paragraph className="hover:underline" level={5}>
                  Logo Designing
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  Brand Guidelines
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  Influencer Marketing
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  Animation
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  Email Campaigns
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  LinkedIn Marketing
                </Paragraph>
              </li>
              <li>
                <Paragraph className="hover:underline" level={5}>
                  UI | UX
                </Paragraph>
              </li>
            </ul>
          </div>
        </div>
        <Divider  className="!my-6 md:my-8 border md:border-2 " />
        <div className="">
          <Paragraph level={5} className="text-center">
            © 2025 Syncurious. All rights reserved.
          </Paragraph>
        </div>
      </Section>
    </footer>
  );
}
