'use client'
import React, { Suspense } from "react";
import BannerSection from "@/components/BannerSection";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div />}>
        <BannerSection />
      </Suspense>
    </>
  );
}
