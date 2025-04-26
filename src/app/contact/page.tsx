import SecondaryContainer from "@/components/section/container/SecondaryContainer";
import Section from "@/components/section";
import ClientTrustSection from "@/components/ContactUs/Client-trust";
import TestimonialsSection from "@/components/Home/Testimonials";
import FooterSection from "@/components/section/Footer";
import Container from "@/components/section/container";
import CTASection from "@/components/Home/CTASection";
import HeroSection from "@/components/ContactUs/hero";
import MarqueeSection from "@/components/section/MarqueeSection";
import BackgroundBlob from "@/components/ui/blobBackground";
import FAQsSection from "@/components/ContactUs/FAQs";
import ContactSection from "@/components/ContactUs/OurServices";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Container className="p-0" innerClassName="px-0">
        <Section className="!h-[70vh]">
          <HeroSection />
        </Section>
      </Container>
      <SecondaryContainer>
        <Section className="max-h-[100%] md:h-full">
          <BackgroundBlob />
          <ContactSection />
        </Section>
        <Section className="relative">
          <BackgroundBlob />
          <ClientTrustSection />
        </Section>
      </SecondaryContainer>
      <Section className="green-transparent-gardient !h-[60vw] my-10">
        <MarqueeSection />
      </Section>
      <SecondaryContainer>
        <Section>
          <BackgroundBlob />
          <TestimonialsSection />
        </Section>
        <Section>
          <BackgroundBlob />
          <FAQsSection />
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
