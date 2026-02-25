"use client";

import { Activity } from "@/lib/types";
import { cn } from "@/lib/utils";
import { allActivities, allDistricts } from "@/lib/data";
import { activityIcons } from "@/lib/icon-map";
import { Heart, MapPinned, SlidersHorizontal, Users, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface Filters {
  activities: Activity[];
  districts: string[];
  familyFriendly: boolean;
  crowdLevels: string[];
}

interface FilterBarProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

export function FilterBar({ filters, onChange }: FilterBarProps) {
  const totalActive =
    filters.activities.length +
    filters.districts.length +
    (filters.familyFriendly ? 1 : 0) +
    filters.crowdLevels.length;

  function toggleActivity(activity: Activity) {
    const updated = filters.activities.includes(activity)
      ? filters.activities.filter((a) => a !== activity)
      : [...filters.activities, activity];
    onChange({ ...filters, activities: updated });
  }

  function toggleDistrict(district: string) {
    const updated = filters.districts.includes(district)
      ? filters.districts.filter((d) => d !== district)
      : [...filters.districts, district];
    onChange({ ...filters, districts: updated });
  }

  function toggleCrowdLevel(level: string) {
    const updated = filters.crowdLevels.includes(level)
      ? filters.crowdLevels.filter((c) => c !== level)
      : [...filters.crowdLevels, level];
    onChange({ ...filters, crowdLevels: updated });
  }

  function clearAll() {
    onChange({ activities: [], districts: [], familyFriendly: false, crowdLevels: [] });
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "h-8 rounded-full text-xs",
              filters.activities.length > 0 && "border-primary text-primary"
            )}
          >
            <SlidersHorizontal className="mr-1.5 h-3.5 w-3.5" />
            Activities
            {filters.activities.length > 0 && (
              <Badge className="ml-1.5 flex h-4 w-4 items-center justify-center rounded-full p-0 text-[10px]">
                {filters.activities.length}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel className="text-xs">Filter by Activity</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {allActivities.map((activity) => {
            const ActivityIcon = activityIcons[activity as Activity];

            return (
              <DropdownMenuCheckboxItem
                key={activity}
                checked={filters.activities.includes(activity as Activity)}
                onCheckedChange={() => toggleActivity(activity as Activity)}
                className="text-xs"
              >
                <ActivityIcon className="mr-2 h-3.5 w-3.5" />
                {activity}
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "h-8 rounded-full text-xs",
              filters.districts.length > 0 && "border-primary text-primary"
            )}
          >
            <MapPinned className="mr-1.5 h-3.5 w-3.5" />
            District
            {filters.districts.length > 0 && (
              <Badge className="ml-1.5 flex h-4 w-4 items-center justify-center rounded-full p-0 text-[10px]">
                {filters.districts.length}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-52">
          <DropdownMenuLabel className="text-xs">Filter by District</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {allDistricts.map((district) => (
            <DropdownMenuCheckboxItem
              key={district}
              checked={filters.districts.includes(district)}
              onCheckedChange={() => toggleDistrict(district)}
              className="text-xs"
            >
              {district}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "h-8 rounded-full text-xs",
              filters.crowdLevels.length > 0 && "border-primary text-primary"
            )}
          >
            <Users className="mr-1.5 h-3.5 w-3.5" />
            Crowd
            {filters.crowdLevels.length > 0 && (
              <Badge className="ml-1.5 flex h-4 w-4 items-center justify-center rounded-full p-0 text-[10px]">
                {filters.crowdLevels.length}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-40">
          <DropdownMenuLabel className="text-xs">Filter by Crowd</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {["Low", "Moderate", "High"].map((level) => (
            <DropdownMenuCheckboxItem
              key={level}
              checked={filters.crowdLevels.includes(level)}
              onCheckedChange={() => toggleCrowdLevel(level)}
              className="text-xs"
            >
              {level}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onChange({ ...filters, familyFriendly: !filters.familyFriendly })}
        className={cn(
          "h-8 rounded-full text-xs",
          filters.familyFriendly && "border-primary bg-primary/10 text-primary"
        )}
      >
        <Heart className="mr-1.5 h-3.5 w-3.5" />
        Family-friendly
      </Button>

      {totalActive > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearAll}
          className="h-8 rounded-full text-xs text-muted-foreground"
        >
          <X className="mr-1 h-3.5 w-3.5" />
          Clear
        </Button>
      )}

      {totalActive > 0 && (
        <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          <span>{totalActive} filter{totalActive > 1 ? "s" : ""} active</span>
        </div>
      )}
    </div>
  );
}
