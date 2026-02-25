import { Compass, MapPinned } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ParksExplorer } from "@/components/parks-explorer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-10 flex flex-col gap-2">
          <p className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-primary">
            <MapPinned className="h-3.5 w-3.5" />
            Abuja Guide
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground text-balance">
            Parks & Recreation in Abuja
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
            Discover outdoor green spaces, recreation centers, and nature trails across
            the Federal Capital Territory.
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Compass className="h-3.5 w-3.5" />
            Browse by district, activity, crowd level, and family fit.
          </p>
        </div>

        <ParksExplorer />
      </main>

      <Footer />
    </div>
  );
}
