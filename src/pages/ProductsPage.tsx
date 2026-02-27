import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProducts from "@/components/FeaturedProducts";

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20">
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  );
};

export default ProductsPage;