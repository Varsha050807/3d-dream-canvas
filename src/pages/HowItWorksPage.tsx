import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";

const HowItWorksPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20">
        <section id="how-it-works">
          <HowItWorks />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HowItWorksPage;