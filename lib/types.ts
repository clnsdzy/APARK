export type Activity =
  | "Walking"
  | "Jogging"
  | "Cycling"
  | "Picnic"
  | "Swimming"
  | "Tennis"
  | "Football"
  | "Basketball"
  | "Nature Trails"
  | "Bird Watching"
  | "Playground"
  | "Fishing"
  | "Yoga"
  | "Outdoor Gym";

export type CrowdLevel = "Low" | "Moderate" | "High";

export interface Review {
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface OpeningHours {
  weekdays: string;
  weekends: string;
  publicHolidays: string;
}

export interface Park {
  id: string;
  name: string;
  description: string;
  address: string;
  district: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  openingHours: OpeningHours;
  activities: Activity[];
  rating: number;
  reviewCount: number;
  topReviews: Review[];
  familyFriendly: boolean;
  familyFriendlinessScore: number; // 1-5
  crowdLevel: CrowdLevel;
  imageUrl: string;
  entryFee: string;
  amenities: string[];
  rank: number;
}
