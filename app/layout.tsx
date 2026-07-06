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

export const metadata: Metadata = {
  title: "Մերուժան & Սաթենիկ",
  description: "Հարսանեկան հրավիրատոմս — 16 Օգոստոսի, 2026",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hy">
      <body
        className={`${notoSerifArmenian.variable} ${notoSansArmenian.variable} min-h-full overflow-x-hidden bg-stone-dark font-sans-hy text-cream`}
      >
        {children}
      </body>
    </html>
  );
}
