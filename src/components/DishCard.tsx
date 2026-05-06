import { Link } from "@tanstack/react-router";
import { Star, MapPin } from "lucide-react";
import type { Dish } from "@/lib/mock-data";
import { taka } from "@/lib/mock-data";

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <Link
      to="/dish/$id"
      params={{ id: dish.id }}
      className="group overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img src={dish.image} alt={dish.name} loading="lazy" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-background/90 px-2 py-0.5 text-xs font-semibold">
          <Star className="h-3 w-3 fill-primary text-primary" /> {dish.rating}
        </div>
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground">{dish.name}</h3>
          <div className="font-bold text-primary">{taka(dish.price)}</div>
        </div>
        <div className="text-xs text-muted-foreground">by {dish.sellerName}</div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" /> {dish.location}
        </div>
      </div>
    </Link>
  );
}