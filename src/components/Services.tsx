import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [mode, setMode] = useState<"beginner" | "advanced">("beginner");

  return (
    <section className="section-padding">
      <h2 className="text-3xl font-bold text-center mb-8">Services</h2>

      {/* Toggle pill */}
      <div className="flex justify-center mb-12">
        <div className="relative flex bg-muted p-1 rounded-full w-[280px]">
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-1 bottom-1 w-1/2 rounded-full bg-primary"
            style={{ left: mode === "beginner" ? "0%" : "50%" }}
          />

          <button
            onClick={() => setMode("beginner")}
            className={`relative z-10 w-1/2 py-2 text-sm font-semibold transition ${
              mode === "beginner" ? "text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            Beginner
          </button>

          <button
            onClick={() => setMode("advanced")}
            className={`relative z-10 w-1/2 py-2 text-sm font-semibold transition ${
              mode === "advanced" ? "text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            Advanced
          </button>
        </div>
      </div>

      {/* Animated content */}
      <AnimatePresence mode="wait">
        {mode === "beginner" ? (
          <motion.div
            key="beginner"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <ServiceCard
              title="Starter Models"
              desc="Perfect for first-time 3D prints and simple designs."
            />
            <ServiceCard
              title="PLA Material"
              desc="Eco-friendly, low-cost, easy-to-print material."
            />
            <ServiceCard
              title="Quick Printing"
              desc="Fast production for prototypes and basic parts."
            />
          </motion.div>
        ) : (
          <motion.div
            key="advanced"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <ServiceCard
              title="Complex Models"
              desc="High-detail engineering and artistic designs."
            />
            <ServiceCard
              title="ABS / Resin"
              desc="Strong, heat-resistant professional materials."
            />
            <ServiceCard
              title="Post Processing"
              desc="Sanding, painting and surface finishing included."
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ServiceCard = ({ title, desc }: { title: string; desc: string }) => {
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

export default Services;