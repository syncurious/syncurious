import SecondaryContainer from "@/components/section/container/SecondaryContainer";
import Section from "@/components/section";
import ClientTrustSection from "@/components/Portfolio/Client-trust";
import OurTeamSection from "@/components/Portfolio/Our-team";
import OurServicesSection from "@/components/Portfolio/OurServices";
import TestimonialsSection from "@/components/Home/Testimonials";
import FooterSection from "@/components/section/Footer";
import Container from "@/components/section/container";
import CTASection from "@/components/Home/CTASection";
import HeroSection from "@/components/Portfolio/hero";
import MarqueeSection from "@/components/section/MarqueeSection";
import BackgroundBlob from "@/components/ui/blobBackground";
import FAQsSection from "@/components/Portfolio/FAQs";
import PortfolioSection from "@/components/Portfolio/Portfolio";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Container className="p-0" innerClassName="px-0">
        <Section className="!h-[70vh]">
          <HeroSection />
        </Section>
      </Container>
      <SecondaryContainer>
        <Section>
          <BackgroundBlob />
          <PortfolioSection />
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
