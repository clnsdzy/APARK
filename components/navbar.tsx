'use client';

import Link from "next/link";
import { TreePine } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Suspense } from "react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary">
            <TreePine className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            APARK
          </span>
        </Link>

        {/* Nav links + theme toggle */}
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link
            href="/"
            className="transition-colors hover:text-foreground"
          >
            Explore
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Suspense fallback={<div className="h-10 w-10" />}>
            <ThemeToggle />
          </Suspense>
        </nav>
      </div>
    </header>
  );
}
