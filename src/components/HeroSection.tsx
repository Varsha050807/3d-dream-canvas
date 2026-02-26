import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";

const slides = [
  { image: hero1, headline: "What do you want to print today?" },
  { image: hero2, headline: "Custom Keychains Made Just for You" },
  { image: hero3, headline: "Bring Your Ideas to Life" },
  { image: hero4, headline: "Personalized 3D Gifts" },
  { image: hero5, headline: "Print Your Imagination" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goToNext = useCallback(() => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setAnimating(false);
    }, 500);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNext, 4000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className={`h-full w-full object-cover ${
              i === current ? "animate-zoom-slow" : ""
            }`}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-40 hero-overlay-bottom" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center section-padding">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Custom 3D Printing
          </div>

          {/* Headline */}
          <div className="h-[140px] md:h-[180px] flex items-start">
            <h1
              key={current}
              className={`text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight ${
                animating ? "animate-fade-slide-out" : "animate-fade-slide-in"
              }`}
            >
              {slides[current].headline}
            </h1>
          </div>

          <p
            className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed"
          >
            From keychains to figurines, desk organizers to personalized gifts — we bring your ideas to life with precision 3D printing.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" className="gap-2 text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
              Start Customizing
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-base px-8 py-6 border-border text-foreground hover:bg-secondary"
            >
              <ShoppingBag className="h-5 w-5" />
              Shop Now
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-10 border-t border-border pt-8">
            {[
              { value: "10K+", label: "Happy Customers" },
              { value: "50+", label: "Product Types" },
              { value: "4.9★", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setAnimating(true); setTimeout(() => { setCurrent(i); setAnimating(false); }, 500); }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-10 bg-primary" : "w-4 bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
