import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThemeToggle from "./components/ThemeToggle";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "@/pages/ProductsPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import ReviewsPage from "@/pages/ReviewsPage";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Theme toggle fixed on top */}
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/reviews" element={<ReviewsPage />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;