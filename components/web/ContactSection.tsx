// app/components/ContactSection.tsx
"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#eef0f3] px-4 py-16 sm:px-6 md:py-20">
      <div className="container mx-auto grid  gap-12 lg:grid-cols-[1fr_1.08fr] lg:gap-16">
        <div>
          <p className="font-sans text-[13px] font-medium uppercase tracking-[0.2em] text-[#cf9f42]">
            Reach Out
          </p>
          <h2 className="mt-2 text-[52px] leading-tight text-[#153d66] sm:text-[58px]">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-[560px] font-sans text-[16px] leading-relaxed text-[#5a6f85]">
            Whether you&apos;re an investor looking to partner with us, or you want to learn more
            about our acquisition strategy, we&apos;d love to hear from you.
          </p>

          <div className="mt-9 space-y-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#d7dde5]">
                <MapPin className="h-5 w-5 text-[#173e66]" />
              </div>
              <div>
                <p className="font-sans text-[16px] font-medium text-[#132f4f]">Service Area</p>
                <p className="font-sans text-[15px] leading-relaxed text-[#5a6f85]">
                  Palm Beach County &amp; Martin County, Florida
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#d7dde5]">
                <Mail className="h-5 w-5 text-[#173e66]" />
              </div>
              <div>
                <p className="font-sans text-[16px] font-medium text-[#132f4f]">Email</p>
                <p className="font-sans text-[15px] leading-relaxed text-[#5a6f85]">
                  info@buyrite-properties.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <form className="rounded-lg border border-[#d2d7dd] bg-white p-6 shadow-[0_2px_8px_rgba(8,24,44,0.08)] md:p-8">
          <div>
            <label className="mb-2 block font-sans text-[16px] font-medium text-[#132f4f]">
              I am a...
            </label>
            <Select defaultValue="potential-investor">
              <SelectTrigger className="!h-[44px] w-full rounded-md border-[#cfd5dc] px-4 font-sans text-[15px] text-[#132f4f] data-[state=open]:border-[#8f98a3]">
                <SelectValue placeholder="Potential Investor" />
              </SelectTrigger>
              <SelectContent className="rounded-none border border-[#8f98a3] bg-white p-0 shadow-none">
                <SelectItem
                  value="potential-investor"
                  className="rounded-none py-1.5 pl-3 pr-3 font-sans text-[16px] text-[#132f4f] focus:bg-[#1f63c3] focus:text-white data-[state=checked]:bg-[#1f63c3] data-[state=checked]:text-white [&>span:first-child]:hidden"
                >
                  Potential Investor
                </SelectItem>
                <SelectItem
                  value="homebuyer"
                  className="rounded-none py-1.5 pl-3 pr-3 font-sans text-[16px] text-[#132f4f] focus:bg-[#1f63c3] focus:text-white data-[state=checked]:bg-[#1f63c3] data-[state=checked]:text-white [&>span:first-child]:hidden"
                >
                  Homebuyer
                </SelectItem>
                <SelectItem
                  value="business-partner"
                  className="rounded-none py-1.5 pl-3 pr-3 font-sans text-[16px] text-[#132f4f] focus:bg-[#1f63c3] focus:text-white data-[state=checked]:bg-[#1f63c3] data-[state=checked]:text-white [&>span:first-child]:hidden"
                >
                  Business Partner
                </SelectItem>
                <SelectItem
                  value="other-inquiry"
                  className="rounded-none py-1.5 pl-3 pr-3 font-sans text-[16px] text-[#132f4f] focus:bg-[#1f63c3] focus:text-white data-[state=checked]:bg-[#1f63c3] data-[state=checked]:text-white [&>span:first-child]:hidden"
                >
                  Other
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-sans text-[16px] font-medium text-[#132f4f]">
                Full Name
              </label>
              <Input
                placeholder="John Smith"
                className="h-[42px] rounded-md border-[#cfd5dc] px-4 font-sans text-[15px]"
              />
            </div>
            <div>
              <label className="mb-2 block font-sans text-[16px] font-medium text-[#132f4f]">
                Phone (optional)
              </label>
              <Input
                placeholder="(561) 000-0000"
                className="h-[42px] rounded-md border-[#cfd5dc] px-4 font-sans text-[15px]"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block font-sans text-[16px] font-medium text-[#132f4f]">
              Email
            </label>
            <Input
              type="email"
              placeholder="you@example.com"
              className="h-[42px] rounded-md border-[#cfd5dc] px-4 font-sans text-[15px]"
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block font-sans text-[16px] font-medium text-[#132f4f]">
              Message
            </label>
            <Textarea
              placeholder="Tell us how we can help..."
              rows={5}
              className="min-h-[132px] rounded-md border-[#cfd5dc] px-4 py-3 font-sans text-[15px]"
            />
          </div>

          <Button
            type="submit"
            className="mt-7 h-[44px] w-full rounded-[4px] bg-[#173e66] font-sans text-[16px] font-medium text-white hover:bg-[#1e4d7d]"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
