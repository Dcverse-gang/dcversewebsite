"use client";

import { SignedOut, GoogleOneTap } from "@clerk/nextjs";

import { Suspense } from "react";

export default function OneTapClient() {
  return (
    <Suspense fallback={null}>
      <SignedOut>
        <GoogleOneTap />
      </SignedOut>
    </Suspense>
  );
}
