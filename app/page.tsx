import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ComparisonSection from "./components/ComparisonSection";
import AboutSection from "./components/AboutSection";
import ProductSection from "./components/ProductSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <Hero />
      <ComparisonSection />
      <AboutSection />
      <ProductSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
