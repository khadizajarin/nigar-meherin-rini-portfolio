import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Workshops from "@/components/portfolio/Workshops";
import Research from "@/components/portfolio/Research";
import Stories from "@/components/portfolio/Stories";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Workshops />
      <Research />
      <Stories />
      <Contact />
    </main>
  );
};

export default Index;
