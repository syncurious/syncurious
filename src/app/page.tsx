import Header from "@/components/section/header";
import Image from "next/image";
import backgroundImage from "@/assets/images/moon-bg-dark.png";
import Container from "@/components/section/container";
import ShpareBackgound from "@/lib/three/shpareBackgound";

export default function Home() {
  return (
    <div className="">
      <Container>
        <Header />
        <ShpareBackgound />
        {/* <Image src={backgroundImage} alt="background image" priority /> */}
      </Container>
    </div>
  );
}
