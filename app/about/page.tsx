'use client';

import Link from 'next/link';
import { Compass, Leaf, MessageCircleHeart, SearchCheck, Waypoints } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="mb-12 flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">About APARK</h1>
          <p className="inline-flex items-center gap-2 text-sm leading-relaxed text-muted-foreground text-pretty">
            <Leaf className="h-4 w-4 text-primary" />
            Abuja Parks and Recreation — your guide to outdoor spaces in the Federal Capital Territory.
          </p>
        </div>

        <section className="mb-10 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-foreground">Our Mission</h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            APARK was created to help residents and visitors discover, explore, and connect with
            outdoor recreation centers across Abuja. We believe that accessible green spaces are
            essential for community wellbeing, family bonding, and active lifestyles.
          </p>
        </section>

        <section className="mb-10 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-foreground">What We Offer</h2>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div className="rounded-lg bg-secondary p-4 transition-colors duration-300 hover:bg-secondary/70">
              <h3 className="mb-1 inline-flex items-center gap-2 font-medium text-foreground">
                <Compass className="h-4 w-4 text-primary" />
                Comprehensive Park Directory
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Browse major parks and recreation centers in Abuja with opening hours, entry fees,
                and key amenities.
              </p>
            </div>
            <div className="rounded-lg bg-secondary p-4 transition-colors duration-300 hover:bg-secondary/70">
              <h3 className="mb-1 inline-flex items-center gap-2 font-medium text-foreground">
                <SearchCheck className="h-4 w-4 text-primary" />
                Smart Filtering
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Filter parks by activity type, district, crowd levels, and family-friendliness.
              </p>
            </div>
            <div className="rounded-lg bg-secondary p-4 transition-colors duration-300 hover:bg-secondary/70">
              <h3 className="mb-1 inline-flex items-center gap-2 font-medium text-foreground">
                <MessageCircleHeart className="h-4 w-4 text-primary" />
                Real Reviews & Ratings
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Read visitor reviews and ratings to make better decisions before heading out.
              </p>
            </div>
            <div className="rounded-lg bg-secondary p-4 transition-colors duration-300 hover:bg-secondary/70">
              <h3 className="mb-1 inline-flex items-center gap-2 font-medium text-foreground">
                <Waypoints className="h-4 w-4 text-primary" />
                Easy Navigation
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Open Google Maps directions for any listed location and plan your route quickly.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-foreground">Get In Touch</h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            Have feedback or found an error? We'd love to hear from you and keep improving APARK.
          </p>
          <div className="flex gap-3">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/">Back to Parks</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
