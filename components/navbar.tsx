import Link from "next/link";
import { Compass, Info, TreePine } from "lucide-react";
import { ThemeToggleWrapper } from "./theme-toggle-wrapper";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
            <TreePine className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-foreground">APARK</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
            <Compass className="h-3.5 w-3.5" />
            Explore
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
          >
            <Info className="h-3.5 w-3.5" />
            About
          </Link>
          <ThemeToggleWrapper />
        </nav>
      </div>
    </header>
  );
}
