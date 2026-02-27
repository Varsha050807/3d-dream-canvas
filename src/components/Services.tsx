import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [mode, setMode] = useState<"beginner" | "advanced">("beginner");

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 mt-0">
        Services
      </h2>

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
            className={`relative z-10 w-1/2 py-2 text-sm font-semibold transition-colors ${
              mode === "beginner"
                ? "text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            Beginner
          </button>

          <button
            onClick={() => setMode("advanced")}
            className={`relative z-10 w-1/2 py-2 text-sm font-semibold transition-colors ${
              mode === "advanced"
                ? "text-primary-foreground"
                : "text-muted-foreground"
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <ServiceCard
              title="Starter Models"
              desc="Perfect for first-time 3D prints and simple designs."
              image="/images/starter.jpg"
            />
            <ServiceCard
              title="PLA Material"
              desc="Eco-friendly, low-cost, easy-to-print material."
              image="/images/pla.jpg"
            />
            <ServiceCard
              title="Quick Printing"
              desc="Fast production for prototypes and basic parts."
              image="/images/quick.jpg"
            />
          </motion.div>
        ) : (
          <motion.div
            key="advanced"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <ServiceCard
              title="Complex Models"
              desc="High-detail engineering and artistic designs."
              image="/images/complex.jpg"
            />
            <ServiceCard
              title="ABS / Resin"
              desc="Strong, heat-resistant professional materials."
              image="/images/abs.jpg"
            />
            <ServiceCard
              title="Post Processing"
              desc="Sanding, painting and surface finishing included."
              image="/images/post.jpg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ServiceCard = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Image */}
      <motion.img
        src={image}
        alt={title}
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.1 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-64 object-cover"
      />
  
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
  
      {/* Text Content */}
      <div className="absolute bottom-0 p-6 text-white w-full">
        <motion.h3
          variants={{
            rest: { y: 0 },
            hover: { y: -10 },
          }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-bold"
        >
          {title}
        </motion.h3>
  
        <motion.p
          variants={{
            rest: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
          className="text-sm text-gray-200 mt-2"
        >
          {desc}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Services;