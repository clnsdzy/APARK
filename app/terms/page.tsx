'use client';

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <h1 className="mb-8 text-3xl font-semibold tracking-tight text-foreground">
          Terms of Use
        </h1>

        <div className="space-y-6 text-sm leading-relaxed text-foreground">
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the APARK website ("Site"), you accept and agree to be
              bound by the terms and provision of this agreement. If you do not agree to
              abide by the above, please do not use this service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials
              (information or software) on APARK's website for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a transfer of
              title, and under this license you may not:
            </p>
            <ul className="space-y-2 pl-4 list-disc">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>
                Attempt to decompile or reverse engineer any software contained on the site
              </li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>
                Transfer the materials to another person or "mirror" the materials on any
                other server
              </li>
              <li>
                Violate any applicable laws or regulations related to access to or use of
                the Site
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              3. Disclaimer of Warranties
            </h2>
            <p>
              The materials on APARK's website are provided "as is." APARK makes no
              warranties, expressed or implied, and hereby disclaims and negates all other
              warranties including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or non-infringement of
              intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              4. Limitations of Liability
            </h2>
            <p>
              In no event shall APARK or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business
              interruption) arising out of the use or inability to use the materials on
              APARK's website, even if APARK or an authorized representative has been
              notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">5. Accuracy of Materials</h2>
            <p>
              The materials appearing on APARK's website could include technical,
              typographical, or photographic errors. APARK does not warrant that any of the
              materials on its website are accurate, complete, or current. APARK may make
              changes to the materials contained on its website at any time without notice.
            </p>
            <p>
              Park information, opening hours, activities, and facilities may change without
              prior notice. We recommend verifying details directly with park authorities
              before planning your visit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">6. Links</h2>
            <p>
              APARK has not reviewed all of the sites linked to its website and is not
              responsible for the contents of any such linked site. The inclusion of any
              link does not imply endorsement by APARK of the site. Use of any such linked
              website is at the user's own risk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              7. Modifications of Terms of Service
            </h2>
            <p>
              APARK may revise these terms of service for its website at any time without
              notice. By using this website, you are agreeing to be bound by the then current
              version of these terms of service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              8. Governing Law and Jurisdiction
            </h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the
              laws of Nigeria, and you irrevocably submit to the exclusive jurisdiction of
              the courts in Abuja.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">9. User Conduct</h2>
            <p>
              You agree that you will not use the Site for any purpose that is unlawful or
              prohibited by these terms. You further agree not to:
            </p>
            <ul className="space-y-2 pl-4 list-disc">
              <li>Harass or cause distress or inconvenience to any person</li>
              <li>Transmit obscene or offensive content</li>
              <li>Disrupt the normal flow of dialogue within our website</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">10. Intellectual Property</h2>
            <p>
              All content on APARK, including text, graphics, logos, images, and software, is
              the property of APARK or its content suppliers and protected by international
              copyright laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              11. External Data Attribution
            </h2>
            <p>
              APARK utilizes Google Maps API for location services and directions. Google
              Maps data is subject to Google's terms of service. Park information is sourced
              from public records and community data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">12. Limitation Period</h2>
            <p>
              No claim can be brought against APARK more than one year after the cause of
              action has arisen.
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
