import { ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import productKeychain from "@/assets/product-keychain.jpg";
import productFigurine from "@/assets/product-figurine.jpg";
import productPhonestand from "@/assets/product-phonestand.jpg";
import productOrganizer from "@/assets/product-organizer.jpg";
import productNameplate from "@/assets/product-nameplate.jpg";
import productGift from "@/assets/product-gift.jpg";

const products = [
  { name: "Custom Keychain", price: "$12.99", rating: 4.9, image: productKeychain, tag: "Best Seller" },
  { name: "Action Figurine", price: "$29.99", rating: 4.8, image: productFigurine, tag: "Popular" },
  { name: "Phone Stand", price: "$14.99", rating: 4.7, image: productPhonestand, tag: null },
  { name: "Desk Organizer", price: "$19.99", rating: 4.9, image: productOrganizer, tag: "New" },
  { name: "LED Name Plate", price: "$24.99", rating: 5.0, image: productNameplate, tag: "Trending" },
  { name: "Gift Box", price: "$17.99", rating: 4.6, image: productGift, tag: null },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="mb-12 text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">Our Collection</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">
          Featured Products
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Discover our most popular 3D printed creations, crafted with precision and love.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.name}
            className="group card-surface overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:glow-border"
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {product.tag && (
                <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {product.tag}
                </span>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-lg text-foreground">{product.name}</h3>
                <div className="flex items-center gap-1 text-accent">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-display font-bold text-primary">{product.price}</span>
                <Button size="sm" className="gap-1.5 bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
