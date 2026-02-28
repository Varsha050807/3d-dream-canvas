import { Mail, Phone, MapPin } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@3ddreamcanvas.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 1234567890",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Main Street, Your City",
  },
];

const Contact = () => {
  return (
    <section className="section-padding bg-surface">
      {/* Header */}
      <div className="mb-16 text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">
          Get In Touch
        </span>
        <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">
          Contact Us
        </h2>
      </div>

      {/* Contact Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {contacts.map((item) => (
          <div
            key={item.label}
            className="relative text-center transition-all duration-300 hover:scale-105"
          >
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 text-primary hover:bg-primary/20">
              <item.icon className="h-10 w-10" />
            </div>
            <h3 className="mt-2 text-xl font-display font-bold text-foreground">
              {item.label}
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="mt-16 max-w-2xl mx-auto">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-border p-3 focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg border border-border p-3 focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full rounded-lg border border-border p-3 focus:ring-2 focus:ring-primary"
          />
          <button className="mt-2 bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Optional Google Map */}
      <div className="mt-16 max-w-4xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019123456!2d-122.41941568468138!3d37.77492977975988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c1a12345%3A0x123456789abcdef!2s123+Main+St%2C+San+Francisco%2C+CA!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="300"
          className="rounded-lg"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Contact;