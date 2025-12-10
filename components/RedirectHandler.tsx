// components/RedirectHandler.tsx - Client component (separate file for 'use client' logic)
'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const routePaths = [
  '/offer',
  '/smsconsent/',
  '/delete-account/',
  '/privacy/',
  '/disclaimer/',
  '/terms/',
  '/legal-terms-of-service/en/',
  '/about-us/'
];

export default function RedirectHandler({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const pathname = window.location.pathname;
    if (routePaths.includes(pathname)) {
      const redirectUrl = `https://account.cttis.cc${pathname}`;
      window.location.href = redirectUrl; // Full redirect (works in static export too)
      // router.replace(redirectUrl); // Alternative for SPA navigation (if not static)
    }
  }, [router]);

  return <>{children}</>;
}