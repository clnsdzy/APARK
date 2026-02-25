'use client';

import dynamic from 'next/dynamic';

const ThemeToggleDynamic = dynamic(
  () => import('./theme-toggle').then((mod) => mod.ThemeToggle),
  {
    ssr: false,
    loading: () => <div className="h-9 w-9" />,
  }
);

export function ThemeToggleWrapper() {
  return <ThemeToggleDynamic />;
}
