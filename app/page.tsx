import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
