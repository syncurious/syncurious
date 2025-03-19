'use client'
import Image from "next/image";
import Logo from "@/assets/icon/logo.png";
import React, { useState } from "react";
import SecondaryContainer from "../container/SecondaryContainer";
import Drawer from "../drawer";

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

function Header(props: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { style, className } = props;

  return (
    <header style={style} className={`${className}`}>
      <SecondaryContainer className="!fixed z-20 !h-[60px] !bg-transparent" overlayClassName="!blur-lg">
        <nav className="h-full flex absolute-x-center z-10 items-center flex-row justify-between w-[calc(90%)] fixed">
          <div className="absolute top-0 left-[-.5rem] w-[calc(100%+1rem)] h-full p-5 rounded-lg" />
          <div id="logo">
            <Image src={Logo} alt="Syncurious Logo" width={0} height={50} />
          </div>
          <div id="navigations" className="flex text-white gap-3">
            {/* Desktop Navigation */}
            <ul className="hidden md:flex flex-row text-white gap-10">
              <li><a href="Home">Home</a></li>
              <li><a href="AboutUs">About Us</a></li>
              <li><a href="Services">Services</a></li>
              <li><a href="Portfolio">Portfolio</a></li>
              <li><a href="Blogs">Blogs</a></li>
              <li><a href="Contact">Contact</a></li>
            </ul>
            <div className="hidden md:block divider">
              <hr />
            </div>
            <div id="social-links" className="hidden md:block">
              <ul className="flex flex-row gap-2">
                <button>W</button>
                <button>M</button>
              </ul>
            </div>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsDrawerOpen(true)}
            >
              ☰
            </button>
          </div>
        </nav>
      </SecondaryContainer>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </header>
  );
}

export default Header;
