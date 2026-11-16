"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white text-zinc-900 flex flex-col px-4 sm:px-6 lg:px-20 py-12 items-center min-h-screen justify-start">
      <section className="max-w-6xl w-full mt-20 sm:mt-24 mb-20 px-4 sm:px-8 text-left flex flex-col items-start">
        {/* Modern left-aligned section header to create a premium division gap */}
        <div className="w-full mb-16 border-b border-zinc-200 pb-6">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-2 block">
            Executive Leadership
          </span>
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#2b3a67]">
            Our Corporate Leadership & Profile
          </h2>
        </div>
        {/* Inner layout container with perfect cross-column vertical alignment */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* LEFT COLUMN: ADAPTIVE EXECUTIVE BIO PROFILE CELL */}
          <div className="lg:col-span-4 w-full flex flex-col items-center">
            {/* DESKTOP PROFILE CARD SYSTEM (Hidden on small mobile screens) */}
            <div className="hidden sm:flex flex-col items-center w-full">
              {/* Clean circular image crop */}
              <div className="w-52 h-52 rounded-full overflow-hidden shadow-xl border-[6px] border-white bg-zinc-50 mb-6">
                <img
                  src="/owner.jpeg"
                  alt="Company Owner & Founder Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://unsplash.com";
                  }}
                />
              </div>
              <h3 className="text-xl font-black text-[#2b3a67] uppercase tracking-wide mb-2">
                Ali Hassan
              </h3>
              <p className="text-sm text-zinc-500 font-semibold uppercase tracking-[0.15em]">
                Company Owner & Founder
              </p>
            </div>

            {/* MOBILE INTERACTIVE SIDE-BY-SIDE HEADER ROW (Visible ONLY on mobile devices) */}
            <div className="flex sm:hidden w-full items-center gap-4 bg-[#f8f9fa] rounded-3xl p-5 border border-zinc-100 shadow-sm">
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-sm border-2 border-white bg-zinc-50 shrink-0">
                <img
                  src="/owner.jpeg"
                  alt="Company Owner Profile Mobile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/";
                  }}
                />
              </div>
              <div className="flex flex-col items-start text-left">
                <h3 className="text-[14px] font-black text-[#2b3a67] uppercase tracking-normal">
                  Ali Hassan
                </h3>
                <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wide mt-0.5">
                  Company Owner & Founder
                </p>
              </div>
            </div>
          </div>
          {/* RIGHT COLUMN: FACTORY PROFILE DATA SHEET CARD */}
          <div className="lg:col-span-8 w-full bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-1.5">
              Company Profile
            </span>
            <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#2b3a67] text-left mb-8 w-full border-b border-zinc-200 pb-5">
              Company Details
            </h3>
            {/* 2-Column Property Value Layout Grid Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 w-full">
              {/* PROPERTY 1: COMPANY */}
              <div className="flex flex-col items-start text-left">
                <span className="text-xs font-black uppercase tracking-wider text-zinc-900 mb-2">
                  Company
                </span>
                <span className="text-base text-zinc-600 font-normal">
                  Lhlam Industry
                </span>
              </div>
              {/* PROPERTY 2: OWNER */}
              <div className="flex flex-col items-start text-left">
                <span className="text-xs font-black uppercase tracking-wider text-zinc-900 mb-2">
                  Owner / Founder
                </span>
                <span className="text-base text-zinc-600 font-normal">
                  Ali Hassan
                </span>
              </div>
              {/* PROPERTY 3: LOCATION */}
              <div className="flex flex-col items-start text-left">
                <span className="text-xs font-black uppercase tracking-wider text-zinc-900 mb-2">
                  Location
                </span>
                <span className="text-base text-zinc-600 font-normal">
                  Sialkot, Punjab, Pakistan 51310
                </span>
              </div>
              {/* PROPERTY 4: CONTACT TELEPHONE */}
              <div className="flex flex-col items-start text-left">
                <span className="text-xs font-black uppercase tracking-wider text-zinc-900 mb-2">
                  Phone / WhatsApp
                </span>
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-zinc-600 hover:text-emerald-600 font-normal transition-colors"
                >
                  +92 3298338669
                </a>
              </div>
              {/* PROPERTY 5: INBOX EMAIL */}
              <div className="flex flex-col items-start text-left sm:col-span-2 border-t border-zinc-200/60 pt-4 mt-1">
                <span className="text-xs font-black uppercase tracking-wider text-zinc-900 mb-2">
                  Email
                </span>
                <a
                  href="mailto:lhlam.industry@gmail.com"
                  className="text-base text-zinc-600 hover:text-red-600 font-normal transition-colors break-all"
                >
                  lhlamindustry@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SOLID BORDER WRAPPER LAYER - Matching your reference image layout specs */}
      <section className="max-w-4xl w-full border-4 border-zinc-400 bg-white p-6 sm:p-10 lg:p-12 shadow-sm rounded-sm flex flex-col items-start relative">
        {/* Main Section Header — Left-aligned, bold brand blue typography */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#2b3a67] text-left mb-8 w-full border-b-2 border-zinc-100 pb-4">
          About Lhlam Industry
        </h1>

        {/* Narrative Paragraph Sheets — Beautiful spacing and clean text alignments */}
        <div className="text-[13px] sm:text-sm lg:text-[15px] text-zinc-700 font-normal leading-relaxed text-left w-full space-y-6">
          <p>
            Lhlam Industry is a Pakistan-based manufacturer and exporter
            specializing in premium-quality custom uniforms, sportswear,
            workwear, corporate apparel, and fashion garments. Based in Sialkot,
            Pakistan, we proudly serve clothing brands, sports clubs, schools,
            businesses, and wholesalers across the USA, Europe, the UK, Canada,
            Australia, and many other international markets.
          </p>

          <p>
            With years of manufacturing expertise, we provide{" "}
            <span className="text-red-600 font-black">
              complete cut-and-sew solutions
            </span>
            , transforming your ideas into high-quality finished garments. From
            fabric sourcing and pattern development to embroidery, printing,
            stitching, quality inspection, custom packaging, and worldwide
            shipping, we manage every stage of the production process under one
            roof.
          </p>

          <p>
            We offer a wide range of customization options to help brands create
            unique products, including custom fabrics, embroidery, screen
            printing, sublimation, DTF printing, woven labels, neck labels, hang
            tags, private labeling, and premium packaging. Whether you're
            launching a new clothing brand or expanding an established business,
            we manufacture products tailored to your exact specifications.
          </p>

          <p>
            At Lhlam Industry, we understand that every brand is different.
            That's why we support{" "}
            <span className="text-[#2b3a67] font-black">
              low minimum order quantities (MOQs)
            </span>
            , making it easier for startups and growing businesses to develop
            their collections without compromising on quality.
          </p>

          <p>
            Our experienced production team follows strict quality control
            procedures throughout every stage of manufacturing to ensure
            consistency, durability, and customer satisfaction. We are committed
            to delivering premium garments, competitive pricing, reliable
            communication, and on-time global delivery, helping our clients
            build successful brands with confidence.
          </p>

          <p className="font-bold text-[#2b3a67] border-t border-zinc-100 pt-4 mt-2">
            Lhlam Industry — Your Trusted Manufacturing Partner for Custom
            Uniforms and Apparel Worldwide.
          </p>
        </div>
      </section>

      {/* SECTION 4: EXECUTIVE PROFILE & COMPANY META METRIC BOARD - BALANCED & SPACED */}
    </main>
  );
}
