import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Materials = () => {
  const [level, setLevel] = useState<"basic" | "pro">("basic");

  return (
    <section className="section-padding">
      <h2 className="text-3xl font-bold text-center mb-8">Materials</h2>

      {/* Toggle pill */}
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
            className={`relative z-10 w-1/2 py-2 text-sm font-semibold transition ${
              level === "basic"
                ? "text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            Basic
          </button>

          <button
            onClick={() => setLevel("pro")}
            className={`relative z-10 w-1/2 py-2 text-sm font-semibold transition ${
              level === "pro"
                ? "text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            Pro
          </button>
        </div>
      </div>

      {/* Animated content */}
      <AnimatePresence mode="wait">
        {level === "basic" ? (
          <motion.div
            key="basic"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <MaterialCard
              title="PLA Filament"
              desc="Eco-friendly and easy-to-print filament for beginners."
            />
            <MaterialCard
              title="Starter Kits"
              desc="Basic kits to get you started with 3D printing."
            />
            <MaterialCard
              title="Quick Prototypes"
              desc="Print simple prototypes quickly and efficiently."
            />
          </motion.div>
        ) : (
          <motion.div
            key="pro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <MaterialCard
              title="ABS / Resin"
              desc="High-quality materials for professional projects."
            />
            <MaterialCard
              title="Advanced Filaments"
              desc="Specialty filaments for complex and detailed prints."
            />
            <MaterialCard
              title="Post-Processing Tools"
              desc="Sandpaper, paints, and finishing tools included."
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const MaterialCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="p-6 rounded-2xl border bg-card shadow-sm hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </motion.div>
  );
};

export default Materials;