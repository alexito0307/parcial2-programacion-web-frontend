import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Announcement from "@/components/ui/Announcement";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "La Taza",
  description: "Coffee shop website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins">
        <Announcement/>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
