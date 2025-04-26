import SecondaryContainer from "@/components/section/container/SecondaryContainer";
import Section from "@/components/section";
import FooterSection from "@/components/section/Footer";
import Container from "@/components/section/container";
import CTASection from "@/components/Portfolio/CTASection";
import HeroSection from "@/components/Portfolio/hero";
import BackgroundBlob from "@/components/ui/blobBackground";
import PortfolioWebSitesSection from "@/components/Portfolio/websiteProjects";
import PortfolioGraphicsSection from "@/components/Portfolio/graphicsProjects";
import PortfolioUISection from "@/components/Portfolio/uiProjects";
import ProjectCountSection from "@/components/Portfolio/ProjectCountSection";

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
          <PortfolioWebSitesSection />
        </Section>
        <Section>
          <BackgroundBlob />
          <PortfolioGraphicsSection />
        </Section>
        <Section>
          <BackgroundBlob />
          <PortfolioUISection />
        </Section>
        <Section className="max-h-[30rem] md:h-[40rem] h-[40rem]">
          <BackgroundBlob />
          <ProjectCountSection />
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
