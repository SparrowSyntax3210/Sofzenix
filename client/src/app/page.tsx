import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#F5F9FF] min-h-screen">

      <Navbar />

      <Hero />

      <About />

      <Features />

      <Contact />

      <Footer />

    </main>
  );
}