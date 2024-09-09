import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DANTE",
  description:
    "La emoción cruda del rock es la mejor manera de describir la música y la voz de Dante. Desde la intensidad energética hasta lo melancólico y melódico, capturamos un espectro completo de emociones.",
  openGraph: {
    images: [
      {
        url: "/img/banner.jpg",
        width: 800,
        height: 600,
        alt: "ALLISON Band Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
