import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CustomProducts from "@/components/CustomProducts";
import Contact from "@/components/Contact";   // ✅ correct import
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <HeroSection />

        <section id="products">
          <FeaturedProducts />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="custom-products">
          <CustomProducts />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;