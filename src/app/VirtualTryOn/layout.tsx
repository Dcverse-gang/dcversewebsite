import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VirtualTry - AI-Powered Virtual Try-On",
  description:
    "Experience clothing in the digital realm with our AI-powered virtual try-on",
};

export default function VirtualTryOnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
