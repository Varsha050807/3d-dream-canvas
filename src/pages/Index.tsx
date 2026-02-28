import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CustomProducts from "@/components/CustomProducts";
import Reviews from "@/components/Reviews";
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

        <section id="reviews">
          <Reviews />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;