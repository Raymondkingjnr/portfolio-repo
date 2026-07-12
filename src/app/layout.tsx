import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raymond Nnaji",
  description: " Nnaji Arinzechukwu Raymond — Frontend Engineer",
  metadataBase: new URL("https://raymonds-nnaji.vercel.app"),
  openGraph:{
    type:"website",
    locale:"en_US",
    url:"https://raymonds-nnaji.vercel.app",
    title: 'Fullstack Developer - Nnaji Raymond',
    siteName:"Raymond Nnaji",
    description:"Raymond Nnaji's Portfolio",
    images:[
      {
        url:"raymond.png",
        width:1200,
        height:630,
        type:"image/png",
        alt:"Raymond Nnaji",
      }
    ]
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
