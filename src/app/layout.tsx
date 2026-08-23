import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le Dinh Hung | Network Security",
  description: "Portfolio of Le Dinh Hung",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}