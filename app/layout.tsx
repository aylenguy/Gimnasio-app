import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer"
import Navbar from "./components/navbar";

export const metadata: Metadata = {
  title: "Pulse Training Club",
  description: "Gimnasio premium con membresías, clases y beneficios exclusivos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-[#0B0B0B] text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}