import type { Metadata, Viewport } from "next";
import { Noto_Serif_Armenian, Noto_Sans_Armenian } from "next/font/google";
import "./globals.css";

const notoSerifArmenian = Noto_Serif_Armenian({
  subsets: ["armenian"],
  weight: ["400", "500", "600"],
  variable: "--font-noto-serif-armenian",
  display: "swap",
});

const notoSansArmenian = Noto_Sans_Armenian({
  subsets: ["armenian"],
  weight: ["300", "400", "700"],
  variable: "--font-noto-sans-armenian",
  display: "swap",
});

const OG_IMAGE =
  "https://cdn-cms-uploads.picsart.com/cms-uploads/d369c622-7a9a-4875-9bb9-5f960ea5d382.jpg?to=min&r=1200&q=90";

export const metadata: Metadata = {
  title: "Մերուժան & Սաթենիկ",
  description: "Հարսանեկան հրավիրատոմս — 16 Օգոստոսի, 2026",
  openGraph: {
    title: "Մերուժան & Սաթենիկ",
    description: "Հարսանեկան հրավիրատոմս — 16 Օգոստոսի, 2026",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        alt: "Մերուժան և Սաթենիկ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Մերուժան & Սաթենիկ",
    description: "Հարսանեկան հրավիրատոմս — 16 Օգոստոսի, 2026",
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#17140f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hy">
      <body
        className={`${notoSerifArmenian.variable} ${notoSansArmenian.variable} min-h-full overflow-x-hidden bg-night font-sans-hy text-cream`}
      >
        {children}
      </body>
    </html>
  );
}
