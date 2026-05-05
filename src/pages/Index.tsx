import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Manifesto from "@/components/Manifesto";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseSection from "@/components/CaseSection";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <main className="relative">
      <Hero />
      <Stats />
      <ScrollReveal id="filosofia">
        <Manifesto />
      </ScrollReveal>
      <ScrollReveal id="sobre">
        <About />
      </ScrollReveal>
      <ScrollReveal id="servicos">
        <Services />
      </ScrollReveal>
      <ScrollReveal id="cases">
        <CaseSection />
      </ScrollReveal>
      <ScrollReveal id="depoimentos">
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal id="processo">
        <Process />
      </ScrollReveal>
      <ScrollReveal id="contato">
        <CtaSection />
      </ScrollReveal>
      <Footer />
    </main>
  );
};

export default Index;
