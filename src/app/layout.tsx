import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Donatuz",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black bg-[url('../../public/background1.png')] bg-cover min-h-[100vh]">
        {children}
      </body>
    </html>
  );
}