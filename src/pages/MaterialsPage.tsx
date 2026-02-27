import Navbar from "@/components/Navbar";
import Materials from "@/components/Materials";
import Footer from "@/components/Footer";

const MaterialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <Materials />
      </main>
      <Footer />
    </div>
  );
};

export default MaterialsPage;