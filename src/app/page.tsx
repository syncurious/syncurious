import Header from "@/components/section/header";
import Image from "next/image";
import backgroundImage from "@/assets/images/moon-bg-dark.png";
import Container from "@/components/section/container";
import HeroSection from "@/components/section/hero";
import SecondaryContainer from "@/components/section/container/SecondaryContainer";
import Section from "@/components/section";

export default function Home() {
  return (
    <main className="">
      <Container>
        <Section>
          <HeroSection />
        </Section>
      </Container>
      <SecondaryContainer>
        <div className="z-10">Hello world</div>
      </SecondaryContainer>
    </main>
  );
}
