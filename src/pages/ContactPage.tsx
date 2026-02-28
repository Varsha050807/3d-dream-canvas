import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;