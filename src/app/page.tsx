import Header from "@/components/section/header";
import Image from "next/image";
import backgroundImage from "@/assets/images/moon-bg-dark.png";
import Container from "@/components/section/container";
import HeroSection from "@/components/section/hero";

export default function Home() {
  return (
    <main className="">
      <Container>
        <section>
          <HeroSection />
        </section>
        <section className="h-screen max-h-[600px] bg-blur">
        </section>
      </Container>
    </main>
  );
}
