import type { ComponentType } from "react";
import { Activity, CrowdLevel } from "@/lib/types";
import {
  Bird,
  Bike,
  Dumbbell,
  Fish,
  Footprints,
  PersonStanding,
  TentTree,
  TreePine,
  Trophy,
  Users,
  Waves,
} from "lucide-react";

export const activityIcons: Record<Activity, ComponentType<{ className?: string }>> = {
  Walking: Footprints,
  Jogging: PersonStanding,
  Cycling: Bike,
  Picnic: TentTree,
  Swimming: Waves,
  Tennis: Trophy,
  Football: Trophy,
  Basketball: Trophy,
  "Nature Trails": TreePine,
  "Bird Watching": Bird,
  Playground: Users,
  Fishing: Fish,
  Yoga: PersonStanding,
  "Outdoor Gym": Dumbbell,
};

export const crowdStyles: Record<CrowdLevel, { badge: string; dot: string }> = {
  Low: {
    badge: "bg-green-100 text-green-700",
    dot: "bg-green-500",
  },
  Moderate: {
    badge: "bg-amber-100 text-amber-700",
    dot: "bg-amber-500",
  },
  High: {
    badge: "bg-red-100 text-red-700",
    dot: "bg-red-500",
  },
};
