import Container from "@/components/section/container";
import notFound from "@/assets/gif/404.gif"; // Adjust the path as necessary
import Image from "next/image";
import Paragraph from "@/components/base/Paragraph";

export default function NotFound() {
  return (
    <Container className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-center flex justify-center flex-col items-center">
        <Image
          src={notFound}  // Replace with your actual GIF path
          alt="404 Not Found"
          className="w-[50vh] aspect-square mb-4"
        />
        <h1 className="text-8xl font-bold text-white mb-2">404</h1>
        <Paragraph className="text-gray-400 " level={3}>Page not found</Paragraph>
      </div>
    </Container>
  );
}
