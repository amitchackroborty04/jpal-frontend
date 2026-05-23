// app/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react"; // icon for mobile menu
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";

export default function Navbar() {
  const [navLinks] = useState([
    { label: "About", href: "/about" },
    { label: "Strategy", href: "/strategy" },
    { label: "Markets", href: "/markets" },
    { label: "Investors", href: "/investors" },
    { label: "Contact", href: "/contact" },
  ]);

  return (
    <section className="bg-[#224262] ">
    <nav className="text-white px-6 py-10  flex justify-between items-center container mx-auto">
      {/* Logo */}
      <div className="flex items-center w-[100px] h-[30px]  ">
        <Link href="/">
          <Image
            src="/logo.png"
            width={1000}
            height={1000}
            alt="Buy-Rite Properties"
            className="h-full w-full object-cover"
          />
        </Link>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex space-x-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-yellow-400 transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Button className="bg-yellow-600 text-white hover:bg-yellow-500">
          Get In Touch
        </Button>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 p-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-[#CE9D3B]  h-[48px] text-white hover:bg-yellow-500 mt-4 font-sans">
                Get In Touch
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
    </section>
  );
}