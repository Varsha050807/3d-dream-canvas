import { Star } from "lucide-react";

const reviews = [
  {
    name: "Alex Chen",
    avatar: "AC",
    rating: 5,
    text: "The custom keychain I ordered was absolutely perfect. The detail was insane for a 3D print. Will definitely order again!",
    product: "Custom Keychain",
  },
  {
    name: "Mia Rodriguez",
    avatar: "MR",
    rating: 5,
    text: "Ordered a personalized name plate as a gift for my boyfriend. He loved it! The LED base makes it look so premium.",
    product: "LED Name Plate",
  },
  {
    name: "Jordan Taylor",
    avatar: "JT",
    rating: 5,
    text: "The desk organizer is both functional and stunning. Great quality PLA, smooth finish, and fast shipping. 10/10!",
    product: "Desk Organizer",
  },
  {
    name: "Sam Patel",
    avatar: "SP",
    rating: 4,
    text: "Bought the phone stand in orange — it matches my setup perfectly. Sturdy and well-made. Love it!",
    product: "Phone Stand",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="mb-12 text-center">
        <span className="text-sm font-medium uppercase tracking-widest text-primary">Testimonials</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">What Our Customers Say</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review) => (
          <div key={review.name} className="card-surface p-6 transition-all duration-300 hover:-translate-y-1">
            <div className="flex gap-1 text-accent">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{review.text}"</p>
            <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                {review.avatar}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{review.name}</div>
                <div className="text-xs text-muted-foreground">Bought: {review.product}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
