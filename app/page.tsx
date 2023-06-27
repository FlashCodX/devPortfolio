import Image from "next/image";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main
      className='h-screen snap-y snap-mandatory 
    overflow-x-hidden overflow-y-hidden z-0 
  '
    >
      <HeroSection />
    </main>
  );
}
