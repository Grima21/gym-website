import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"], // títulos
  variable: "--font-title",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // párrafos y botones
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Gym Website",
  description: "Landing del gym",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="font-body bg-fondo text-white">{children}</body>
    </html>
  );
}
