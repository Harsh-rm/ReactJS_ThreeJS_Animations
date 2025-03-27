import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import CustomCursor from '@/components/sub/CustomCursor';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh RM | Portfolio",
  description: "This is my portfolio website built using Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >

        <StarsCanvas />

        {children}        

      </body>
    </html>
  );
}