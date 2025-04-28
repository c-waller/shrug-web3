import type { Metadata } from "next";
import NavBarWrapper from "./components/NavBarWrapper";
import "./globals.css";

export const metadata: Metadata = 
{
  title: "Shrug",
  description: "A quiet corner of the internet for whatever's on your mind."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBarWrapper />
        {children}
      </body>
    </html>
  );
}
