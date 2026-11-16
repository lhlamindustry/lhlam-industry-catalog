import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lhlam Industry",
  description: "Premium Clothing Manufacturer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black min-h-screen flex flex-col`}
      >
        {/* Top Sticky Navbar */}
        <Navbar />

        {/* Dynamic Page Content Injector */}
        <main className="flex-1 flex flex-col">{children}</main>

        {/* GLOBAL BLACK BRAND FOOTER - Tightened Spacing & Premium Typography */}
        <footer className="bg-black text-white pt-6 pb-6 px-6 lg:px-20 w-full mt-auto">
          <div className="max-w-6xl mx-auto w-full">
            {/* Main Content Multi-Column Grid with enhanced layout typography */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-4 text-left">
              {/* COLUMN 1: BRAND LOGO & PROFILE */}
              <div className="flex flex-col space-y-3">
                <h3 className="text-sm font-black uppercase tracking-wider text-white">
                  Lhlam Industry
                </h3>
                <div className="text-[13px] sm:text-[14px] text-zinc-300 font-normal leading-relaxed space-y-1.5">
                  <p>Premium clothing manufacturing.</p>
                  <p>Export solutions for global fashion brands.</p>
                  <p>Provide with premium private labels.</p>
                </div>
              </div>

              {/* COLUMN 2: CLICKABLE CONTACT MATRIX */}
              <div className="flex flex-col space-y-3">
                <h3 className="text-sm font-black uppercase tracking-wider text-white">
                  Contact
                </h3>
                <div className="text-[13px] sm:text-[14px] text-zinc-300 font-normal leading-relaxed space-y-2.5 flex flex-col items-start">
                  <a
                    href="mailto:lhlam.industry@gmail.com"
                    className="hover:text-red-500 transition-colors duration-150 break-all"
                  >
                    lhlamindustry@gmail.com
                  </a>
                  <a
                    href="https://wa.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-500 transition-colors duration-150"
                  >
                    +92 3298338669
                  </a>
                  <p className="text-zinc-400 cursor-default">
                    Sialkot, Punjab, Pakistan 51310
                  </p>
                </div>
              </div>

              {/* COLUMN 3: CLICKABLE SOCIAL LINKS */}
              <div className="flex flex-col space-y-3">
                <h3 className="text-sm font-black uppercase tracking-wider text-white">
                  Follow Us
                </h3>
                <div className="text-[13px] sm:text-[14px] text-zinc-300 font-normal space-y-2.5 flex flex-col items-start">
                  <a
                    href="https://www.tiktok.com/@lhlam.sports3?_r=1&_t=ZS-9BGL8eHn7no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition-colors duration-150 flex items-center gap-2"
                  >
                    <span>f</span> Tiktok
                  </a>
                  <a
                    href="https://www.instagram.com/lhlam_sports?obrf=MWtydXp3ejQxM25teg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition-colors duration-150 flex items-center gap-2"
                  >
                    <span>📷</span> Instagram
                  </a>
                  {/* <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-600 transition-colors duration-150 flex items-center gap-2"
                  >
                    <span>in</span> LinkedIn
                  </a> */}
                </div>
              </div>
            </div>

            {/* BOTTOM COPYRIGHT SUMMARY LINE - Separator border line removed completely */}
            <div className="pt-4 text-center text-[11px] text-zinc-500 font-normal tracking-wide">
              © 2026 Lhlam Industry. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
