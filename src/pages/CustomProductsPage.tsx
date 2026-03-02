import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomProducts from "@/components/CustomProducts";

const CustomProductsPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20">
        <section id="custom-products">
          <CustomProducts />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CustomProductsPage;