import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { DishCard } from "@/components/DishCard";
import { mockDishes, categories, locations } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const Route = createFileRoute("/browse")({
  component: BrowsePage,
});

function BrowsePage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("");
  const [loc, setLoc] = useState<string>("");

  const dishes = mockDishes.filter(
    (d) =>
      (!cat || d.category === cat) &&
      (!loc || d.location === loc) &&
      (!q || d.name.toLowerCase().includes(q.toLowerCase())),
  );

  const Chip = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
        active ? "border-primary bg-primary text-primary-foreground" : "bg-card text-foreground hover:border-primary"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground">Browse Dishes</h1>
        <p className="mt-1 text-muted-foreground">Discover food from sellers across Bangladesh.</p>

        <div className="mt-6 space-y-4 rounded-2xl border bg-card p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search dishes..." className="pl-9" />
          </div>
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Category</div>
            <div className="flex flex-wrap gap-2">
              <Chip active={!cat} onClick={() => setCat("")}>All</Chip>
              {categories.map((c) => <Chip key={c} active={cat === c} onClick={() => setCat(c)}>{c}</Chip>)}
            </div>
          </div>
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</div>
            <div className="flex flex-wrap gap-2">
              <Chip active={!loc} onClick={() => setLoc("")}>All</Chip>
              {locations.map((l) => <Chip key={l} active={loc === l} onClick={() => setLoc(l)}>{l}</Chip>)}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((d) => <DishCard key={d.id} dish={d} />)}
        </div>
        {dishes.length === 0 && (
          <div className="py-16 text-center text-muted-foreground">No dishes match your filters.</div>
        )}
      </div>
    </div>
  );
}