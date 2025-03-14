import SecondaryContainer from "@/components/section/container/SecondaryContainer";
import Section from "@/components/section";
import ClientTrustSection from "@/components/section/Home/Client-trust";
import WhyChooseUsSection from "@/components/section/Home/WhyChooseUs";
import PortfolioSection from "@/components/section/Home/Portfolio";
import OurServicesSection from "@/components/section/Home/OurServices";
import TestimonialsSection from "@/components/section/Home/Testimonials";
import FooterSection from "@/components/section/Footer";
import Container from "@/components/section/container";
import CTASection from "@/components/section/Home/CTASection";
import HeroSection from "@/components/section/hero";
import MarqueeSection from "@/components/section/MarqueeSection";

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
        <Section>
          <PortfolioSection />
        </Section>
      </SecondaryContainer>
      <Section className="green-transparent-gardient !h-[50vh]">
          <MarqueeSection />
        </Section>
      <SecondaryContainer
        extraComponent={
          <div className="absolute h-full w-full left-0">
            <div className="absolute z-[1] -top-[10%] -right-[10%] gradient-primary-to-transparent h-[30rem] w-[30rem] blur-3xl" />
            <div className="absolute z-[1] -bottom-[10%] -left-[10%] gradient-primary-to-transparent h-[25rem] w-[25rem] blur-3xl" />
          </div>
        }
      >
        <Section>
          <OurServicesSection />
        </Section>
        <Section>
          <TestimonialsSection />
        </Section>
        <Section>
          <CTASection />
        </Section>
      </SecondaryContainer>
      <Container className="footer-gradient">
        <FooterSection />
      </Container>
    </main>
  );
}
