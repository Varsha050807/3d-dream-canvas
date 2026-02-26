import { Upload, Printer, Truck } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Design",
    description: "Upload your custom design or choose from our templates. We accept STL, OBJ, and image files.",
    step: "01",
  },
  {
    icon: Printer,
    title: "We Print",
    description: "Our high-precision 3D printers bring your design to life with premium PLA and resin materials.",
    step: "02",
  },
  {
    icon: Truck,
    title: "We Deliver",
    description: "Quality-checked and carefully packed, your creation arrives at your doorstep in 3-5 days.",
    step: "03",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-surface">
      <div className="mb-16 text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">Simple Process</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">How It Works</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.title} className="relative text-center">
            {i < steps.length - 1 && (
              <div className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-primary/50 to-transparent md:block" />
            )}
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-110">
              <step.icon className="h-10 w-10" />
            </div>
            <span className="text-sm font-bold text-primary">{step.step}</span>
            <h3 className="mt-2 text-xl font-display font-bold text-foreground">{step.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
