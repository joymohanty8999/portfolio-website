import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Joseph Mohanty Portfolio",
  description: "Joseph Mohanty's personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <title>{metadata.title}</title>
        <meta name="description" content="{metadata.description}" />
        <link rel="icon" href="/favicon.ico"/>
      </head>

      <body className={inter.className}>
        {children}
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
