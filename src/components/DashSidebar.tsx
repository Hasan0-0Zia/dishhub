import { Link, useRouterState } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";

export type NavItem = { to: string; label: string; icon: LucideIcon };

export function DashSidebar({ title, items }: { title: string; items: NavItem[] }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="hidden w-60 shrink-0 border-r bg-card md:block">
      <div className="border-b p-5">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Dashboard</div>
        <div className="mt-1 text-lg font-bold text-foreground">{title}</div>
      </div>
      <nav className="space-y-1 p-3">
        {items.map((it) => {
          const active = path === it.to;
          const Icon = it.icon;
          return (
            <Link
              key={it.to}
              to={it.to}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
              }`}
            >
              <Icon className="h-4 w-4" /> {it.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}