import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center pt-24 md:pt-32">
        {/* pt-24 / pt-32 accounts for fixed navbar height */}

        <section id="services" className="w-full max-w-6xl px-4">
          <Services />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;