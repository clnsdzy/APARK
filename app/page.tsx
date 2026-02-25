import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ParksExplorer } from "@/components/parks-explorer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        {/* Hero header */}
        <div className="mb-10 flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground text-balance">
            Parks & Recreation in Abuja
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
            Discover outdoor green spaces, recreation centers, and nature trails across
            the Federal Capital Territory. Find activities, opening hours, crowd levels,
            and directions — all in one place.
          </p>
        </div>

        {/* Explorer (search + filters + grid) */}
        <ParksExplorer />
      </main>

      <Footer />
    </div>
  );
}
