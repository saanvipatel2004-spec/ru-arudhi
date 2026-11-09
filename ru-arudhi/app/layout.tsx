import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "RU ARUDHI",
  description: "Rutgers University Bharatanatyam Organization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair.className}> 
        <Navbar />{children}
        <Footer />
        </body>
    </html>
  );
}