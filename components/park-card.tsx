"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Star, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Park } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ParkCardProps {
  park: Park;
}

const crowdColors: Record<string, string> = {
  Low: "bg-green-100 text-green-700",
  Moderate: "bg-amber-100 text-amber-700",
  High: "bg-red-100 text-red-700",
};

export function ParkCard({ park }: ParkCardProps) {
  return (
    <Link
      href={`/parks/${park.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
    >
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden bg-muted">
        <Image
          src={park.imageUrl}
          alt={park.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Rank badge */}
        <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
          {park.rank}
        </div>
        {/* Entry fee */}
        <div className="absolute right-3 top-3 rounded-full bg-card/90 px-2.5 py-0.5 text-xs font-medium text-foreground backdrop-blur-sm">
          {park.entryFee}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Name + rating */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
            {park.name}
          </h3>
          <div className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="font-medium text-foreground">{park.rating}</span>
            <span>({park.reviewCount.toLocaleString()})</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span>{park.district}</span>
        </div>

        {/* Hours */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="h-3.5 w-3.5 shrink-0" />
          <span>Weekdays: {park.openingHours.weekdays}</span>
        </div>

        {/* Activities */}
        <div className="flex flex-wrap gap-1.5">
          {park.activities.slice(0, 3).map((activity) => (
            <Badge
              key={activity}
              variant="secondary"
              className="rounded-full px-2.5 py-0.5 text-xs font-normal"
            >
              {activity}
            </Badge>
          ))}
          {park.activities.length > 3 && (
            <Badge
              variant="secondary"
              className="rounded-full px-2.5 py-0.5 text-xs font-normal"
            >
              +{park.activities.length - 3}
            </Badge>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-xs font-medium",
                crowdColors[park.crowdLevel]
              )}
            >
              {park.crowdLevel} crowd
            </span>
          </div>
          {park.familyFriendly && (
            <span className="text-xs text-primary font-medium">Family-friendly</span>
          )}
        </div>
      </div>
    </Link>
  );
}
