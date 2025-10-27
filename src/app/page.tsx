import About from "@/components/AboutUs";
import Contact from "@/components/Contact";
import ScrollTracker from "@/components/Header/components/ScrollTracker";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <ScrollTracker />
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
