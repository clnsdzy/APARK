'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        {/* Page Header */}
        <div className="mb-12 flex flex-col gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            About APARK
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
            Abuja Parks and Recreation — your guide to outdoor spaces in the Federal Capital Territory.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-10 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-foreground">Our Mission</h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            APARK was created to help residents and visitors discover, explore, and connect with
            outdoor recreation centers across Abuja. We believe that accessible green spaces are
            essential for community wellbeing, family bonding, and active lifestyles. By providing
            comprehensive information about parks, amenities, activities, and crowd levels, we make
            it easier for you to find the perfect outdoor destination.
          </p>
        </section>

        {/* What We Offer Section */}
        <section className="mb-10 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-foreground">What We Offer</h2>
          <div className="space-y-3">
            <div className="rounded-lg bg-secondary p-4">
              <h3 className="mb-1 font-medium text-foreground">Comprehensive Park Directory</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Browse all major parks and recreation centers in Abuja with detailed information including
                opening hours, entry fees, and available amenities.
              </p>
            </div>
            <div className="rounded-lg bg-secondary p-4">
              <h3 className="mb-1 font-medium text-foreground">Smart Filtering</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Filter parks by activity type, district, crowd levels, and family-friendliness to find
                exactly what you're looking for.
              </p>
            </div>
            <div className="rounded-lg bg-secondary p-4">
              <h3 className="mb-1 font-medium text-foreground">Real Reviews & Ratings</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Read authentic reviews from visitors and see ratings to help make informed decisions about
                where to spend your time.
              </p>
            </div>
            <div className="rounded-lg bg-secondary p-4">
              <h3 className="mb-1 font-medium text-foreground">Easy Navigation</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Get directions to parks directly through Google Maps integration and plan your route from
                anywhere in the city.
              </p>
            </div>
          </div>
        </section>

        {/* Why Use APARK Section */}
        <section className="mb-10 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-foreground">Why Use APARK?</h2>
          <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground list-disc list-inside">
            <li>Save time finding the right park for your needs and preferences</li>
            <li>Discover hidden gems and lesser-known recreation spots</li>
            <li>Plan family outings with family-friendliness ratings</li>
            <li>Check crowd levels to avoid peak times or join the action</li>
            <li>Stay informed about available activities and facilities</li>
            <li>Make better decisions with authentic visitor reviews</li>
          </ul>
        </section>

        {/* Data Section */}
        <section className="mb-10 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-foreground">Our Data</h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            APARK maintains its own database of parks and recreation centers across Abuja, regularly
            updated with current information. We verify opening hours, amenities, and contact information
            to ensure accuracy. Park data is supplemented with integration to Google Maps for reliable
            navigation and directions.
          </p>
        </section>

        {/* Contact Section */}
        <section className="mb-12 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-foreground">Get In Touch</h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            Have feedback, suggestions, or found an error? We'd love to hear from you. Help us improve
            APARK by sharing your thoughts and experiences.
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
