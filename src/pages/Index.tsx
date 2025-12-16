import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Expertise } from "@/components/Expertise";
import { Experience } from "@/components/Experience";
import { QuoteGenerator } from "@/components/QuoteGenerator";
import { Projects } from "@/components/Projects";
import { Guides } from "@/components/Guides";
import { Freelancing } from "@/components/Freelancing";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Expertise />
        <Experience />
        <QuoteGenerator />
        <Projects />
        <Guides />
        <Freelancing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
