import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* 1️⃣ DotRating (standalone) */
const DotRating = ({ label, value }: { label: string; value: number }) => {
  const totalDots = 10;
  const filledDots = Math.round((value / 100) * totalDots);

  return (
    <div className="flex items-center justify-between mt-2">
      <span className="text-sm text-muted-foreground w-32">
        {label}
      </span>
      <div className="flex gap-1">
        {[...Array(totalDots)].map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i < filledDots ? "bg-orange-500" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* 2️⃣ MaterialCard */
const MaterialCard = ({
  title,
  desc,
  ratings,
}: {
  title: string;
  desc: string;
  ratings?: {
    strength: number;
    flexibility: number;
    detail: number;
    heat: number;
  };
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{desc}</p>

      {ratings && (
        <div className="mt-4">
          <DotRating label="Strength" value={ratings.strength} />
          <DotRating label="Flexibility" value={ratings.flexibility} />
          <DotRating label="Detail" value={ratings.detail} />
          <DotRating label="Heat Res." value={ratings.heat} />
        </div>
      )}
    </motion.div>
  );
};

/* 3️⃣ Materials Section */
const Materials = () => {
  const [level, setLevel] = useState<"basic" | "pro">("basic");

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 mt-0">
        Materials
      </h2>

      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="relative flex bg-muted p-1 rounded-full w-[280px]">
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-1 bottom-1 w-1/2 rounded-full bg-primary"
            style={{ left: level === "basic" ? "0%" : "50%" }}
          />

          <button
            onClick={() => setLevel("basic")}
            className={`relative z-10 w-1/2 py-2 text-sm font-semibold ${
              level === "basic"
                ? "text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            Basic
          </button>

          <button
            onClick={() => setLevel("pro")}
            className={`relative z-10 w-1/2 py-2 text-sm font-semibold ${
              level === "pro"
                ? "text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            Pro
          </button>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={level}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <MaterialCard
            title="PLA Filament"
            desc="Eco-friendly and easy-to-print filament."
            ratings={{
              strength: 65,
              flexibility: 35,
              detail: 90,
              heat: 30,
            }}
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Materials;