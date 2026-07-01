import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Advocate Venkatesh | Premium Legal Services",
  description: "Elite legal representation by Advocate Venkatesh in civil, criminal, family, property, consumer, labour, cyber law and documentation services.",
  metadataBase: new URL("https://venkatesh-lawyer.com"),
  openGraph: {
    title: "Advocate Venkatesh | Trusted Legal Counsel",
    description: "Trusted legal solutions with integrity and excellence.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-brand-black text-white antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(200,155,60,0.12),_transparent_35%),linear-gradient(180deg,#111111_0%,#0a0a0a_100%)]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
