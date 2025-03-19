import Image from "next/image";
import Logo from "@/assets/icon/logo.png";
import React from "react";
import SecondaryContainer from "../container/SecondaryContainer";

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

function Header(props: Props) {
  const { style, className } = props;
  return (
    <header style={style} className={`${className}`}>
      <SecondaryContainer className="!fixed z-20 !h-[60px] !bg-transparent" overlayClassName="!blur-lg"
      >
        <nav className="h-full flex absolute-x-center z-10 items-center flex-row justify-between w-[calc(90%)] fixed">
          <div className="absolute top-0 left-[-.5rem] w-[calc(100%+1rem)] h-full p-5 rounded-lg" />
          <div id="logo">
            <Image src={Logo} alt="Syncurious Logo" width={0} height={50} />
          </div>
          <div id="navigations" className="flex text-white gap-3">
            <ul
              id="navigation-un-order-list"
              className="flex flex-row text-white gap-10"
            >
              <li>
                <a href="Home">Home</a>
              </li>
              <li>
                <a href="AboutUs">About Us</a>
              </li>
              <li>
                <a href="Services">Services</a>
              </li>
              <li>
                <a href="Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="Blogs">Blogs</a>
              </li>
              <li>
                <a href="Contact">Contact</a>
              </li>
            </ul>
            <div className="divider">
              <hr />
            </div>
            <div id="social-links">
              <ul className="flex flex-row gap-2">
                <button>W</button>
                <button>M</button>
              </ul>
            </div>
          </div>
        </nav>
      </SecondaryContainer>
    </header>
  );
}

export default Header;
