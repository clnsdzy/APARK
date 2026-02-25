"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Ticket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Park } from "@/lib/types";
import { activityIcons, crowdStyles } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

interface ParkCardProps {
  park: Park;
  priority?: boolean;
}

export function ParkCard({ park, priority }: ParkCardProps) {
  return (
    <Link
      href={`/parks/${park.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
    >
      <div className="relative h-44 w-full overflow-hidden bg-muted">
        <Image
          src={park.imageUrl}
          alt={park.name}
          fill
          priority={priority}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span
          className={cn(
            "absolute right-3 top-3 h-3.5 w-3.5 rounded-full ring-1 ring-border",
            crowdStyles[park.crowdLevel].dot
          )}
          aria-label={`${park.crowdLevel} crowd`}
          title={`${park.crowdLevel} crowd`}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {park.name}
          </h3>
          <div className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="font-medium text-foreground">{park.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          <span>{park.district}</span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Ticket className="h-3.5 w-3.5 shrink-0" />
          <span>{park.entryFee}</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {park.activities.slice(0, 2).map((activity) => {
            const ActivityIcon = activityIcons[activity];

            return (
              <Badge
                key={activity}
                variant="secondary"
                className="rounded-full px-2.5 py-0.5 text-xs font-normal"
              >
                <ActivityIcon className="mr-1 h-3 w-3" />
                {activity}
              </Badge>
            );
          })}
          {park.activities.length > 2 && (
            <Badge
              variant="secondary"
              className="rounded-full px-2.5 py-0.5 text-xs font-normal"
            >
              +{park.activities.length - 2}
            </Badge>
          )}
        </div>

        <div className="mt-auto pt-1" />
      </div>
    </Link>
  );
}
