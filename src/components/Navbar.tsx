import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Products", type: "page", target: "/products" },
  { label: "3D Printing", type: "page", target: "/services" },
  { label: "How It Works", type: "page", target: "/how-it-works" },
  { label: "Reviews", type: "page", target: "/reviews" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="flex items-center justify-between section-padding !py-4">
        <Link to="/" className="text-2xl font-display font-bold tracking-tight">
          <span className="text-primary">GOOGLE </span>LAYERS
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.type === "page" ? (
              <Link
                key={item.label}
                to={item.target}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={`/#${item.target}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Button variant="ghost" size="icon" className="relative text-foreground">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
              3
            </span>
          </Button>

          <Button size="sm" className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col gap-4 p-6">
            {navItems.map((item) =>
              item.type === "page" ? (
                <Link
                  key={item.label}
                  to={item.target}
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={`#${item.target}`}
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              )
            )}
            <Button className="mt-2 bg-primary text-primary-foreground">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;