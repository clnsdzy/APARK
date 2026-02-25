"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ParkCard } from "@/components/park-card";
import { FilterBar, Filters } from "@/components/filter-bar";
import { parks } from "@/lib/data";
import { Activity } from "@/lib/types";

const defaultFilters: Filters = {
  activities: [],
  districts: [],
  familyFriendly: false,
  crowdLevels: [],
};

export function ParksExplorer() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const filtered = useMemo(() => {
    return parks.filter((park) => {
      // Search
      if (query.trim()) {
        const q = query.toLowerCase();
        const matchName = park.name.toLowerCase().includes(q);
        const matchDistrict = park.district.toLowerCase().includes(q);
        const matchDesc = park.description.toLowerCase().includes(q);
        if (!matchName && !matchDistrict && !matchDesc) return false;
      }

      // Activities
      if (filters.activities.length > 0) {
        const hasAll = filters.activities.every((a) =>
          park.activities.includes(a as Activity)
        );
        if (!hasAll) return false;
      }

      // Districts
      if (filters.districts.length > 0) {
        if (!filters.districts.includes(park.district)) return false;
      }

      // Family-friendly
      if (filters.familyFriendly && !park.familyFriendly) return false;

      // Crowd level
      if (filters.crowdLevels.length > 0) {
        if (!filters.crowdLevels.includes(park.crowdLevel)) return false;
      }

      return true;
    });
  }, [query, filters]);

  return (
    <div className="flex flex-col gap-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search parks by name or district..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="h-10 rounded-xl pl-9 text-sm"
        />
      </div>

      {/* Filters */}
      <FilterBar filters={filters} onChange={setFilters} />

      {/* Results count */}
      <p className="text-xs text-muted-foreground">
        {filtered.length === parks.length
          ? `${parks.length} parks in Abuja`
          : `${filtered.length} of ${parks.length} parks`}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((park) => (
            <ParkCard key={park.id} park={park} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 py-20 text-center">
          <p className="text-sm font-medium text-foreground">No parks found</p>
          <p className="text-xs text-muted-foreground">
            Try adjusting your search or removing some filters.
          </p>
        </div>
      )}
    </div>
  );
}
