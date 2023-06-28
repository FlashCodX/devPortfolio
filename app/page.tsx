import Image from "next/image";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main
      className='h-screen snap-y snap-mandatory 
      overflow-x-auto
  '
    >
      <HeroSection />
    </main>
  );
}
