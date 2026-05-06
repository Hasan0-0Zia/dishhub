import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { DishCard } from "@/components/DishCard";
import { mockDishes, categories } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Search, Truck, ShieldCheck, Utensils } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const featured = mockDishes.slice(0, 6);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="text-primary-foreground">
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
              🇧🇩 Made by local home chefs
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Authentic Bangladeshi food, delivered fresh.
            </h1>
            <p className="mt-4 text-lg opacity-90">
              From Kacchi to Fuchka — order homemade dishes from trusted sellers across Dhaka, Chittagong and beyond.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/browse">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Search className="h-4 w-4" /> Browse Dishes
                </Button>
              </Link>
              <Link to="/seller/register">
                <Button size="lg" variant="outline" className="border-white/40 bg-white/10 text-primary-foreground hover:bg-white/20">
                  Become a Seller
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800"
              alt="Bangladeshi food"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="border-b bg-card">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 md:grid-cols-3">
          {[
            { icon: Utensils, t: "Home-cooked", d: "Made fresh by verified local chefs." },
            { icon: Truck, t: "Cash on Delivery", d: "Pay when your order arrives." },
            { icon: ShieldCheck, t: "Quality Assured", d: "Rated and reviewed by buyers." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-foreground">{t}</div>
                <div className="text-sm text-muted-foreground">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c}
              to="/browse"
              className="rounded-full border bg-card px-4 py-1.5 text-sm font-medium text-foreground hover:border-primary hover:text-primary"
            >
              {c}
            </Link>
          ))}
        </div>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Featured Dishes</h2>
            <p className="text-sm text-muted-foreground">Hand-picked favorites from top sellers.</p>
          </div>
          <Link to="/browse" className="text-sm font-semibold text-primary hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((d) => <DishCard key={d.id} dish={d} />)}
        </div>
      </section>

      <footer className="border-t bg-card py-8 text-center text-sm text-muted-foreground">
        © 2026 DishHub Foodies Corner — Made with ❤️ in Bangladesh
      </footer>
    </div>
  );
}