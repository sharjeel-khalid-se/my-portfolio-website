import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <SelectedWork />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
