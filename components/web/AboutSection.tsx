// app/components/AboutSection.tsx
"use client";

import Image from "next/image";
import { CircleCheckBig } from "lucide-react";

export default function AboutSection() {
  const features = [
    "Distressed property acquisitions through foreclosure auctions",
    "Conservative underwriting and due diligence standards",
    "Strategic renovations using licensed, insured trade partners",
    "Residential resale to first-time homebuyers and retail buyers",
    "Disciplined risk management with multiple exit strategies",
    "Transparent, investor-focused business practices",
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Image */}
        <div className="relative w-full md:w-1/2">
          <div className="relative mx-auto w-full max-w-[620px] md:mx-0">
            <div className="pointer-events-none absolute -top-5 -left-5 h-full w-full border-2 border-[#C9A84C]" />
            <div className="relative overflow-hidden rounded-md shadow-[0_14px_30px_rgba(0,0,0,0.14)]">
              <Image
                src="/about.png"
                alt="Florida Real Estate"
                width={600}
                height={400}
                className="block h-auto w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-md border border-white/45" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col">
          <p className="text-[#C9A84C] uppercase tracking-wide text-sm mb-2 font-sans">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-[#224262] mb-4">
            Florida-Based Real Estate Investment
          </h2>
          <p className="text-[#676F7E] mb-6 text-xl font-sans">
            Buy Rite Properties LLC is a Florida-based real estate investment
            company specializing in the acquisition of distressed and
            undervalued residential real estate through county and public
            foreclosure auctions throughout Palm Beach County and Martin County.
          </p>

          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 font-sans">
                <CircleCheckBig className="w-5 h-5 text-[#C9A84C] mt-1 flex-shrink-0" />
                <span className="text-[#676F7E]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
