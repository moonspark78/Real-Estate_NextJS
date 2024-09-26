import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

const font =  Roboto({
    subsets: ["latin"],
    weight: ['100', '300' , '400' , '500' , '700' , '900']
  });

export const metadata: Metadata = {
  title: "Real Estate Project",
  description: "Real Estate Project create by next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}>
          <ResponsiveNav/>
            {children}
          <Footer/>
      </body>
    </html>
  );
}
