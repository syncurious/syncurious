import SecondaryContainer from "@/components/section/container/SecondaryContainer";
import Section from "@/components/section";
import ClientTrustSection from "@/components/About/Client-trust";
import WhyChooseUsSection from "@/components/Home/WhyChooseUs";
import PortfolioSection from "@/components/Home/Portfolio";
import OurServicesSection from "@/components/Home/OurServices";
import TestimonialsSection from "@/components/Home/Testimonials";
import FooterSection from "@/components/section/Footer";
import Container from "@/components/section/container";
import CTASection from "@/components/Home/CTASection";
import HeroSection from "@/components/About/hero";
import MarqueeSection from "@/components/section/MarqueeSection";
import BackgroundBlob from "@/components/ui/blobBackground";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Container className="p-0" innerClassName="px-0">
        <Section className="!h-[70vh]">
          <HeroSection />
        </Section>
      </Container>
      <SecondaryContainer>
        <Section className="relative">
          <BackgroundBlob />
          <ClientTrustSection />
        </Section>
        <Section>
          <BackgroundBlob />
          <WhyChooseUsSection />
        </Section>
        <Section>
          <BackgroundBlob />
          <PortfolioSection />
        </Section>
      </SecondaryContainer>
      <Section className="green-transparent-gardient !h-[60vw] my-10">
        <MarqueeSection />
      </Section>
      <SecondaryContainer>
        <Section>
          <BackgroundBlob />
          <OurServicesSection />
        </Section>
        <Section>
          <BackgroundBlob />
          <TestimonialsSection />
        </Section>
        <Section>
          <BackgroundBlob />
          <CTASection />
        </Section>
      </SecondaryContainer>
      <Container className="footer-gradient">
        <FooterSection />
      </Container>
    </main>
  );
}
