import Header from "@/components/section/header";
import Image from "next/image";
import backgroundImage from "@/assets/images/moon-bg-dark.png";
import Container from "@/components/section/container";
import HeroSection from "@/components/section/hero";

export default function Home() {
  return (
    <div className="">
      <Container>
        <Header />
        <HeroSection />
        {/* <Image src={backgroundImage} alt="background image" priority /> */}
      </Container>
    </div>
  );
}
