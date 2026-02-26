import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card section-padding !py-12">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <a href="/" className="text-2xl font-display font-bold">
            <span className="text-primary">GOOGLE </span>LAYERS
          </a>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Custom 3D printed products made with precision, passion, and premium materials.
          </p>
          <div className="mt-4 flex gap-3">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {[
          { title: "Products", links: ["Keychains", "Figurines", "Phone Stands", "Desk Organizers", "Name Plates"] },
          { title: "Company", links: ["About Us", "Blog", "Careers", "Contact"] },
          { title: "Support", links: ["FAQ", "Shipping", "Returns", "Privacy Policy", "Terms"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display font-semibold text-foreground">{col.title}</h4>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © 2026 Google Layers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
