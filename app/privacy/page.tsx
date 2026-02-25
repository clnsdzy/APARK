'use client';

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight text-foreground">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm leading-relaxed text-foreground">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">1. Introduction</h2>
            <p>
              Welcome to APARK ("we," "us," "our," or "Company"). We are committed to
              protecting your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our website and
              services, including all related features and functionalities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              2. Information We Collect
            </h2>
            <p>We may collect information about you in a variety of ways:</p>
            <div className="space-y-2 pl-4">
              <p>
                <strong>Information You Provide:</strong> Information you directly provide,
                such as contact details if you submit inquiries or feedback about parks or
                activities.
              </p>
              <p>
                <strong>Automatically Collected Information:</strong> When you visit our
                website, we may automatically collect certain information about your device
                and usage patterns, including IP address, browser type, pages visited, and
                time spent on the site.
              </p>
              <p>
                <strong>Google Maps Data:</strong> When you use Google Maps features on our
                platform, your interaction with map services is subject to Google's
                privacy policies. We do not store your location data.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              3. Use of Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="space-y-2 pl-4 list-disc">
              <li>Display parks, recreation centers, and activity information</li>
              <li>Improve and optimize our website and services</li>
              <li>Respond to inquiries or requests from users</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraudulent activity and maintain site security</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              4. Disclosure of Your Information
            </h2>
            <p>
              We do not sell, trade, rent, or otherwise disclose your personal information
              to third parties without your consent, except as required by law. Third-party
              services we use (such as Google Maps) have their own privacy policies that
              govern how they handle your data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">5. Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              information. However, no method of transmission over the internet is completely
              secure. We cannot guarantee absolute security of your data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">6. Cookies</h2>
            <p>
              Our website may use cookies to enhance your experience. You can choose to
              disable cookies through your browser settings, though this may limit certain
              features of our site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible
              for the privacy practices of external sites. Please review their privacy
              policies before providing any information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              8. Your Privacy Rights
            </h2>
            <p>
              You have the right to access, update, or request deletion of your personal
              information. To exercise these rights, please contact us using the information
              provided below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on
              this page with an updated effective date. Continued use of our website
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices,
              please contact us at privacy@apark.ng
            </p>
          </section>

          <p className="pt-6 text-xs text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <Link href="/" className="inline-flex text-sm font-medium text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
