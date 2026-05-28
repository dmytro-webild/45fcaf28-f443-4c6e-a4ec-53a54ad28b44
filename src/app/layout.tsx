import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'Unani Ayurved | Authentic Traditional Wellness & Remedies',
  description: 'Discover authentic Unani & Ayurvedic remedies, expert consultations, and holistic wellness products for natural health and healing.',
  openGraph: {
    "title": "Unani Ayurved | Authentic Traditional Wellness & Remedies",
    "description": "Discover authentic Unani & Ayurvedic remedies, expert consultations, and holistic wellness products for natural health and healing.",
    "url": "https://www.unaniayurved.com",
    "siteName": "Unani Ayurved",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/top-view-medicinal-spices-herbs_23-2148776450.jpg",
        "alt": "Traditional Ayurvedic herbs"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Unani Ayurved | Authentic Traditional Wellness & Remedies",
    "description": "Discover authentic Unani & Ayurvedic remedies, expert consultations, and holistic wellness products for natural health and healing.",
    "images": [
      "http://img.b2bpic.net/free-photo/top-view-medicinal-spices-herbs_23-2148776450.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
