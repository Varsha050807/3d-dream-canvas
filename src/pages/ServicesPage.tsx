import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Materials from "@/components/Materials";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 md:pt-32">

        {/* Services Section */}
        <section className="w-full max-w-6xl mx-auto px-4">
          <Services />
        </section>

        {/* Materials Section */}
        <section className="w-full max-w-6xl mx-auto px-4">
          <Materials />
        </section>

      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;