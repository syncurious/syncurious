import Header from "@/components/section/header";
import Image from "next/image";
import backgroundImage from "@/assets/images/moon-bg-dark.png";
import Container from "@/components/section/container";
import HeroSection from "@/components/section/hero";
import SecondaryContainer from "@/components/section/container/SecondaryContainer";
import Section from "@/components/section";
import Heading from "@/components/base/heading";
import Paragraph from "@/components/base/Paragraph";
import ClientTrustSection from "@/components/section/Home/Client-trust";
import WhyChooseUsSection from "@/components/section/Home/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Container>
        <Section>
          <HeroSection />
        </Section>
      </Container>
      <SecondaryContainer
        extraComponent={
          <div className="absolute h-full w-full left-0">
            <div className="absolute z-[1] -top-[10%] -right-[10%] gradient-primary-to-transparent h-[30rem] w-[30rem] blur-3xl" />
            <div className="absolute z-[1] -bottom-[10%] -left-[10%] gradient-primary-to-transparent h-[25rem] w-[25rem] blur-3xl" />
          </div>
        }
      >
        <Section>
          <ClientTrustSection />
        </Section>
        <Section>
          <WhyChooseUsSection />
        </Section>
      </SecondaryContainer>
    </main>
  );
}
