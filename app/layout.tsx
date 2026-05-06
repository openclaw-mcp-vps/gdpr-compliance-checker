import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Compliance Checker – Scan Websites for GDPR Issues",
  description: "Automated scanner that checks websites for GDPR violations like missing cookie banners, privacy policies, and data processing disclosures."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5896d9e0-ac9a-4463-a3ee-cd2097a5f4d7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
