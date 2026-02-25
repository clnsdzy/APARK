"use client";

import { Activity } from "@/lib/types";
import { cn } from "@/lib/utils";
import { allActivities, allDistricts } from "@/lib/data";
import { SlidersHorizontal, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
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
      {/* Activities filter */}
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
            Activities
            {filters.activities.length > 0 && (
              <Badge className="ml-1.5 h-4 w-4 rounded-full p-0 text-[10px] flex items-center justify-center">
                {filters.activities.length}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          <DropdownMenuLabel className="text-xs">Filter by Activity</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {allActivities.map((activity) => (
            <DropdownMenuCheckboxItem
              key={activity}
              checked={filters.activities.includes(activity as Activity)}
              onCheckedChange={() => toggleActivity(activity as Activity)}
              className="text-xs"
            >
              {activity}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* District filter */}
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
            District
            {filters.districts.length > 0 && (
              <Badge className="ml-1.5 h-4 w-4 rounded-full p-0 text-[10px] flex items-center justify-center">
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

      {/* Crowd level filter */}
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
            Crowd Level
            {filters.crowdLevels.length > 0 && (
              <Badge className="ml-1.5 h-4 w-4 rounded-full p-0 text-[10px] flex items-center justify-center">
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

      {/* Family-friendly toggle */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onChange({ ...filters, familyFriendly: !filters.familyFriendly })}
        className={cn(
          "h-8 rounded-full text-xs",
          filters.familyFriendly && "border-primary bg-primary/10 text-primary"
        )}
      >
        Family-friendly
      </Button>

      {/* Clear all */}
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

      {/* Active filter count */}
      {totalActive > 0 && (
        <div className="flex items-center gap-1 text-xs text-muted-foreground ml-auto">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          <span>{totalActive} filter{totalActive > 1 ? "s" : ""} active</span>
        </div>
      )}
    </div>
  );
}
