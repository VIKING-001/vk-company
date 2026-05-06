import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Manifesto from "@/components/Manifesto";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseSection from "@/components/CaseSection";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <main className="relative">
      <Hero />
      <ScrollReveal id="filosofia">
        <Manifesto />
      </ScrollReveal>
      <Stats />
      <ScrollReveal id="servicos">
        <Services />
      </ScrollReveal>
      <ScrollReveal id="cases">
        <CaseSection />
      </ScrollReveal>
      <ScrollReveal id="parceiros">
        <Partners />
      </ScrollReveal>
      <ScrollReveal id="processo">
        <Process />
      </ScrollReveal>
      <ScrollReveal id="sobre">
        <About />
      </ScrollReveal>
      <ScrollReveal id="depoimentos">
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal id="faq">
        <FAQ />
      </ScrollReveal>
      <ScrollReveal id="contato">
        <CtaSection />
      </ScrollReveal>
      <Footer />
    </main>
  );
};

export default Index;
