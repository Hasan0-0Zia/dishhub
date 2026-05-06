import { Link } from "@tanstack/react-router";
import { ShoppingCart, UtensilsCrossed } from "lucide-react";
import { useApp } from "@/lib/store";
import type { Role } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { role, setRole, cart } = useApp();
  const cartCount = cart.reduce((a, b) => a + b.qty, 0);

  const roles: Role[] = ["buyer", "seller", "admin"];
  const homeFor = (r: Role) => (r === "buyer" ? "/" : r === "seller" ? "/seller" : "/admin");

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <UtensilsCrossed className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-lg font-bold text-foreground">DishHub</div>
            <div className="-mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">Foodies Corner</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {role === "buyer" && (
            <>
              <Link to="/" className="text-sm font-medium text-foreground hover:text-primary" activeOptions={{ exact: true }}>Home</Link>
              <Link to="/browse" className="text-sm font-medium text-foreground hover:text-primary">Browse</Link>
            </>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex rounded-full border bg-muted p-1">
            {roles.map((r) => (
              <Link
                key={r}
                to={homeFor(r)}
                onClick={() => setRole(r)}
                className={`rounded-full px-3 py-1 text-xs font-medium capitalize transition-colors ${
                  role === r ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {r}
              </Link>
            ))}
          </div>
          {role === "buyer" && (
            <Link to="/cart">
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}