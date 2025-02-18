import Image from "next/image";
import Logo from "@/assets/icon/logo.png";
import React from "react";
import Container from "./container";

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

function Header(props: Props) {
  const { style, className } = props;
  return (
    <header style={style} className={`${className}`}>
      <Container>
        <nav className="h-[60px] flex absolute z-10 items-center my-2 flex-row justify-between w-[calc(100%-.75rem)]">
          <div className="absolute top-0 left-[-.5rem] w-[calc(100%+1rem)] h-full bg-gradient-to-r from-white/5 to-background/5 p-5 rounded-lg" />
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
      </Container>
    </header>
  );
}

export default Header;
