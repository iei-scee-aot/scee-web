import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="mx-auto w-[calc(100%-30px)] border-gray-500 border-l-[0.5px] border-r-[0.5px]">
          <div className="p-6 border-t border-[#747474]/30">
            <div className="flex justify-between items-center mb-4">
              <Image
                src="/scee_logo.jpg"
                alt="SCEE Logo"
                width={80}
                height={40}
                className="object-contain"
              />
              <div className="flex flex-col items-start">
                {/* This text goes above the icon + link */}
                <span className="text-xs text-[#747474] mb-1">
                  Follow us on our socials
                </span>

                {/* Linktree icon + /sceeaot in a row */}
                <Link href="#" className="flex items-center gap-1">
                  <img
                    src="/linktree.jpg"
                    alt="Linktree"
                    className="w-4 h-4 object-contain"
                  />
                  <span className="text-xs text-[#747474]">/sceeaot</span>
                </Link>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#747474] text-sm">Have something in mind?</p>
            </div>
            <Link
              href="/contact"
              className="flex items-center justify-center text-center mx-auto gap-2 -mt-[15px] text-[3.49rem] font-light font-apparat group"
            >
              Contact us
              <ArrowUpRight
                size={50}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </footer>
    </>
  )
}

export default Footer