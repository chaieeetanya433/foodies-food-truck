import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foodies Food Truck - Gourmet on Wheels",
  description: "Experience gourmet on the go with Foodies Food Truck, serving up fresh, mouthwatering dishes at your local events and neighborhoods. Follow us for deliciousness wherever we roll!",
  openGraph: {
    title:
      "Foodies Food Truck - Gourmet on Wheels",
    description:
      "Experience gourmet on the go with Foodies Food Truck, serving up fresh, mouthwatering dishes at your local events and neighborhoods. Follow us for deliciousness wherever we roll!",
    url: "https://foodies-food-truck.vercel.app",
    images: [
      {
        url: "/FoodTruckLogo.png",
        width: 1200,
        height: 630,
        alt: "Foodies Food Truck - Gourmet on Wheels",
      },
    ],
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&family=Open+Sans:wght@400;700&family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
