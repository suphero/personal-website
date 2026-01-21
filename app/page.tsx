"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${defaultLocale}`);
  }, [router]);

  return (
    <html lang={defaultLocale}>
      <head>
        <meta httpEquiv="refresh" content={`0;url=/${defaultLocale}`} />
      </head>
      <body>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Redirecting...
        </div>
      </body>
    </html>
  );
}
