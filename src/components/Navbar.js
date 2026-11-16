"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Mobile dropdown state tracking
  const [mobileUniformsOpen, setMobileUniformsOpen] = useState(false);
  const [mobileApparelOpen, setMobileApparelOpen] = useState(false);

  return (
    <nav className="bg-black text-white border-b border-zinc-800 sticky top-0 z-50 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* LEFT SIDE: LOGO */}
        <Link
          href="/"
          className="flex items-center justify-center h-full w-24 shrink-0 overflow-hidden"
        >
          <Image
            src="/logo.jpeg"
            alt="Lhlam Sports Logo"
            width={120}
            height={120}
            priority
            className="block h-[72px] w-auto max-w-[96px] object-contain"
          />
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          {/* Custom Team Uniforms Dropdown */}
          <div className="relative group h-20 flex items-center cursor-pointer">
            {" "}
            <span>Custom Team Uniforms</span>
            <span className="text-[10px] text-gray-500 group-hover:rotate-180 transition-transform duration-200">
              ▼
            </span>
            {/* FIND YOUR CUSTOM TEAM UNIFORMS DROPDOWN CONTENT AND REPLACE THE LINKS WITH THESE EXACT PATHS: */}
            <div className="absolute top-full left-0 w-56 mt-1 bg-zinc-950 border border-zinc-800 rounded-md shadow-2xl py-2 hidden group-hover:block z-50">
              <Link
                href="/custom-team-uniforms/football"
                className="block px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Football Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/basketball"
                className="block px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Basketball Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/volleyball"
                className="block px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Volleyball Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/soccer"
                className="block px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Soccer Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/baseball"
                className="block px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Baseball Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/rugby"
                className="block px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Rugby Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/tennis"
                className="block px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Tennis Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/hockey"
                className="block px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Hockey Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/martial-arts"
                className="block px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Martial Arts Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/custom-team-jerseys"
                className="block px-4 py-2 text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Custom Team Jerseys
              </Link>
            </div>
          </div>

          {/* Custom Apparel Dropdown */}
          <div className="relative group h-20 flex items-center cursor-pointer">
            <span>Custom Apparel</span>
            <span className="text-[10px] text-gray-500 group-hover:rotate-180 transition-transform duration-200">
              {" "}
              ▼
            </span>
            {/* Desktop Dropdown Box */}
            <div className="absolute top-full left-0 hidden group-hover:block bg-zinc-950 border border-zinc-800 p-4 rounded shadow-xl w-56 text-gray-400 space-y-2 mt-1">
              <Link
                href="/custom-apparel/hoodies"
                className="block hover:text-white transition text-xs py-1"
              >
                Premium Hoodies
              </Link>
              <Link
                href="/custom-apparel/tracksuit"
                className="block hover:text-white transition text-xs py-1"
              >
                Tracksuit
              </Link>
              <Link
                href="/custom-apparel/t-shirt"
                className="block hover:text-white transition text-xs py-1"
              >
                T-shirt
              </Link>
              <Link
                href="/custom-apparel/shorts"
                className="block hover:text-white transition text-xs py-1"
              >
                Shorts
              </Link>
              <Link
                href="/custom-apparel/jackets"
                className="block hover:text-white transition text-xs py-1"
              >
                Jackets
              </Link>
              <Link
                href="/custom-apparel/sweat"
                className="block hover:text-white transition text-xs py-1"
              >
                Sweat shirts
              </Link>
              <Link
                href="/custom-apparel/streetwear"
                className="block hover:text-white transition text-xs py-1"
              >
                Streetwear T-Shirts
              </Link>
            </div>
          </div>

          <Link href="/services" className="hover:text-white transition">
            Services
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact Us
          </Link>
        </div>

        {/* Right Side: Action Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-white text-black font-bold uppercase text-xs tracking-wider px-6 py-3 hover:bg-gray-200 transition duration-200">
              INQUIRE NOW
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none flex flex-col justify-between w-6 h-4"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`h-[2px] w-full bg-white rounded transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            ></span>
            <span
              className={`h-[2px] w-full bg-white rounded transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`h-[2px] w-full bg-white rounded transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden bg-black border-t border-zinc-900 transition-all duration-300 ease-in-out overflow-y-auto ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-4 flex flex-col space-y-4 text-base font-medium text-gray-300">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition py-1"
          >
            Home
          </Link>

          {/* Mobile Uniforms Clickable Accordion */}
          <div>
            <button
              onClick={() => setMobileUniformsOpen(!mobileUniformsOpen)}
              className="w-full flex items-center justify-between py-1 text-left focus:outline-none hover:text-white"
            >
              <span>Custom Team Uniforms</span>
              <span
                className={`text-xs transition-transform duration-200 ${mobileUniformsOpen ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            <div
              className={`pl-4 flex flex-col space-y-2 mt-2 border-l border-zinc-800 ${
                mobileUniformsOpen ? "block" : "hidden"
              }`}
            >
              <Link
                href="/custom-team-uniforms/football"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Football Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/basketball"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Basketball Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/volleyball"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Volleyball uniform
              </Link>
              <Link
                href="/custom-team-uniforms/soccer"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Soccer Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/baseball"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Baseball Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/rugby"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Rugby Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/tennis"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Tennis Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/hockey"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Hockey Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/martial-arts"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Martial arts Uniforms
              </Link>
              <Link
                href="/custom-team-uniforms/custom-team-jerseys"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Custom team jersey
              </Link>
            </div>
          </div>

          {/* Mobile Apparel Clickable Accordion */}
          <div>
            <button
              onClick={() => setMobileApparelOpen(!mobileApparelOpen)}
              className="w-full flex items-center justify-between py-1 text-left focus:outline-none hover:text-white"
            >
              <span>Custom Apparel</span>
              <span
                className={`text-xs transition-transform duration-200 ${mobileApparelOpen ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            <div
              className={`pl-4 flex flex-col space-y-2 mt-2 border-l border-zinc-800 transition-all duration-200 overflow-hidden ${mobileApparelOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <Link
                href="/custom-apparel/hoodies"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Premium Hoodies
              </Link>
              <Link
                href="/custom-apparel/tracksuit"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Tracksuits
              </Link>
              <Link
                href="/custom-apparel/t-shirt"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                T-Shirts
              </Link>

              <Link
                href="/custom-apparel/shorts"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Shorts
              </Link>
              <Link
                href="/custom-apparel/jackets"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Jackets
              </Link>
              <Link
                href="/custom-apparel/sweat"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Sweatshirts
              </Link>
              <Link
                href="/custom-apparel/streetwear"
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-white"
              >
                Street wear
              </Link>
            </div>
          </div>

          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition py-1"
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition py-1"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition py-1"
          >
            Contact Us
          </Link>

          <div className="pt-4 border-t border-zinc-900">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-white text-black font-bold uppercase text-sm tracking-wider py-3 hover:bg-gray-200 transition">
                INQUIRE NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
