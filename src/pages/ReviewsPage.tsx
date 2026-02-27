// src/pages/ReviewsPage.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";

const ReviewsPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen py-20 flex justify-center items-center">
        <section id="reviews" className="w-full max-w-5xl px-4">
          <Reviews />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ReviewsPage;