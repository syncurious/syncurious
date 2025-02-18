import Image from "next/image";
import Header from "../components/section";
import backgroundImage from "@/assets/images/moon-bg-dark.png";
import Container from "@/components/section/container";

export default function Home() {
  return (
    <div className="">
      <Container>
        <Header />
        <Image src={backgroundImage} alt="background image" />
      </Container>
    </div>
  );
}
