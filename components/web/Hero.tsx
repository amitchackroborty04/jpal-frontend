// app/components/Hero.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-white py-[100px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center shadow-lg rounded-md overflow-hidden bg-[#0C1F3F]">
        {/* Text Section */}
        <div className="md:w-1/2 p-8  text-white flex flex-col justify-center ">
          <h1 className="text-3xl md:text-6xl  mb-2 font-normal">
            Florida Real Estate 
          </h1>
          <h2 className="text-3xl md:text-6xl  mb-4 font-normal leading-tight ">
            Investment Disciplined Acquisitions.
          </h2>
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-700 leading-tight mb-10 text-[#C9A84C]" >Exceptional Returns.</h2>
          <div className="flex gap-4 flex-wrap">
            <Button
              asChild
              className=" font-serif border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white h-12 rounded-[0px] font-normal text-base"
            >
              <Link href="#strategy">Our Strategy</Link>
            </Button>
            <Button
              asChild
              className=" font-serif border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-white h-12 rounded-[0px] font-normal text-base"
            >
              <Link href="#investors">Investor Partnerships</Link>
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 w-full relative h-80 md:h-[600px] ">
        <div className="border-2 border-[#C9A84C] w-[600px] h-[550px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hidden lg:block"></div>
          <Image
            src="/hero.png" 
            alt="Florida Real Estate"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
