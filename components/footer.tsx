import Link from "next/link";
import { Copyright, Mail, MapPin, ShieldCheck, Trees } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-3">
            <h3 className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <Trees className="h-4 w-4 text-primary" />
              APARK
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Explore Parks
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Legal
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <Mail className="h-4 w-4 text-primary" />
              Contact
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a href="mailto:hello@apark.ng" className="hover:text-foreground transition-colors">
                  hello@apark.ng
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Location
            </h3>
            <p className="text-xs text-muted-foreground">Abuja, Nigeria</p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Copyright className="h-3.5 w-3.5" />
            {new Date().getFullYear()} APARK — Abuja Parks & Recreation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
