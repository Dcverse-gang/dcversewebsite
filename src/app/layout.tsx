import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import OneTapClient from "./provider/OneTapClient";

export const metadata: Metadata = {
  title: "Dcverse",
  description: "Dcverse is a new way to create and share your content",
  icons: [{ rel: "icon", url: "/Dcverse_logo.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
        >
          <OneTapClient />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
