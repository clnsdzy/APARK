import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Star,
  Users,
  ArrowLeft,
  Navigation,
  CheckCircle2,
  CircleDollarSign,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Navbar } from "@/components/navbar";
import { parks } from "@/lib/data";
import { cn } from "@/lib/utils";

const crowdColors: Record<string, string> = {
  Low: "bg-green-100 text-green-700",
  Moderate: "bg-amber-100 text-amber-700",
  High: "bg-red-100 text-red-700",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cn(
            "h-3.5 w-3.5",
            i <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-muted text-muted"
          )}
        />
      ))}
    </div>
  );
}

export async function generateStaticParams() {
  return parks.map((park) => ({ id: park.id }));
}

export default async function ParkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const park = parks.find((p) => p.id === id);
  if (!park) notFound();

  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${park.coordinates.lat},${park.coordinates.lng}`;
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${park.coordinates.lat},${park.coordinates.lng}&z=15&output=embed`;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        {/* Back */}
        <Link
          href="/"
          className="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to all parks
        </Link>

        {/* Hero image */}
        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-2xl bg-muted sm:h-80">
          <Image
            src={park.imageUrl}
            alt={park.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
          {/* Rank */}
          <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-sm">
            {park.rank}
          </div>
        </div>

        {/* Header */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold text-foreground text-balance">
              {park.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {park.address}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-sm">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-foreground">{park.rating}</span>
                <span className="text-xs text-muted-foreground">
                  ({park.reviewCount.toLocaleString()} reviews)
                </span>
              </div>
              <span
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-xs font-medium",
                  crowdColors[park.crowdLevel]
                )}
              >
                {park.crowdLevel} crowd
              </span>
              {park.familyFriendly && (
                <span className="text-xs font-medium text-primary">
                  Family-friendly
                </span>
              )}
            </div>
          </div>

          {/* Get Directions CTA */}
          <Button asChild className="shrink-0 rounded-xl">
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="mr-2 h-4 w-4" />
              Get Directions
            </a>
          </Button>
        </div>

        <Separator className="mb-8" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left: main content */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            {/* Description */}
            <section>
              <h2 className="mb-2 text-sm font-semibold text-foreground">About</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {park.description}
              </p>
            </section>

            {/* Activities */}
            <section>
              <h2 className="mb-3 text-sm font-semibold text-foreground">Activities</h2>
              <div className="flex flex-wrap gap-2">
                {park.activities.map((activity) => (
                  <Badge
                    key={activity}
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-xs font-normal"
                  >
                    {activity}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Amenities */}
            <section>
              <h2 className="mb-3 text-sm font-semibold text-foreground">Amenities</h2>
              <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {park.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </section>

            {/* Top Reviews */}
            <section>
              <h2 className="mb-4 text-sm font-semibold text-foreground">Top Reviews</h2>
              <div className="flex flex-col gap-4">
                {park.topReviews.map((review, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-foreground">
                        {review.author}
                      </span>
                      <div className="flex items-center gap-2">
                        <StarRating rating={review.rating} />
                        <span className="text-xs text-muted-foreground">
                          {new Date(review.date).toLocaleDateString("en-NG", {
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {review.comment}
                    </p>
                    {i < park.topReviews.length - 1 && (
                      <Separator className="mt-2" />
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: info sidebar */}
          <div className="flex flex-col gap-6">
            {/* Opening hours */}
            <section className="rounded-xl border border-border bg-card p-4">
              <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Clock className="h-4 w-4 text-primary" />
                Opening Hours
              </h2>
              <ul className="flex flex-col gap-2">
                <li className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Weekdays</span>
                  <span className="font-medium text-foreground">
                    {park.openingHours.weekdays}
                  </span>
                </li>
                <li className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Weekends</span>
                  <span className="font-medium text-foreground">
                    {park.openingHours.weekends}
                  </span>
                </li>
                <li className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Public Holidays</span>
                  <span className="font-medium text-foreground">
                    {park.openingHours.publicHolidays}
                  </span>
                </li>
              </ul>
            </section>

            {/* Entry fee */}
            <section className="rounded-xl border border-border bg-card p-4">
              <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <CircleDollarSign className="h-4 w-4 text-primary" />
                Entry Fee
              </h2>
              <p className="text-sm font-medium text-foreground">{park.entryFee}</p>
            </section>

            {/* Family friendliness */}
            <section className="rounded-xl border border-border bg-card p-4">
              <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Users className="h-4 w-4 text-primary" />
                Family Friendliness
              </h2>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-2 flex-1 rounded-full",
                      i <= park.familyFriendlinessScore
                        ? "bg-primary"
                        : "bg-muted"
                    )}
                  />
                ))}
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">
                {park.familyFriendlinessScore}/5 — {
                  park.familyFriendlinessScore >= 4
                    ? "Highly suitable for families"
                    : park.familyFriendlinessScore >= 3
                    ? "Moderately family-friendly"
                    : "Limited family facilities"
                }
              </p>
            </section>

            {/* Map embed */}
            <section className="rounded-xl border border-border overflow-hidden">
              <iframe
                title={`Map of ${park.name}`}
                src={mapsEmbedUrl}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-3">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-xs font-medium text-primary transition-opacity hover:opacity-80"
                >
                  <Navigation className="h-3.5 w-3.5" />
                  Open in Google Maps
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="mt-16 border-t border-border py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} APARK — Abuja Parks & Recreation.
          </p>
        </div>
      </footer>
    </div>
  );
}
