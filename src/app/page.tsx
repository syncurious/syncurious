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
import BackgroundBlob from "@/components/ui/blobBackground";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Container className="p-0">
        <Section>
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
