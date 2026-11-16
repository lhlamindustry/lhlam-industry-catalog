"use client";

export default function Contact() {
  return (
    <main className="bg-white text-zinc-900 flex flex-col px-4 sm:px-6 lg:px-8 pb-24 pt-8">
      {/* SECTION 1: ELEGANT MODULAR TOP HEADLINE SECTION */}
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center mt-6 mb-16 text-center">
        <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-red-600 mb-2">
          Contact Us
        </span>

        <h1 className="text-[15px] sm:text-[18px] lg:text-[21px] font-black uppercase tracking-wide text-[#2b3a67] leading-snug max-w-3xl">
          Let's Build Your Brand Together
        </h1>

        {/* Sleek structural colored anchor rule */}
        <div className="w-12 h-[3px] bg-red-600 mt-4 rounded-full" />
      </div>

      {/* SECTION 2: THREE LARGE SIDE-BY-SIDE CONTACT BOXES — Matches New Screenshot Layout */}
      <section className="max-w-7xl mx-auto w-full flex flex-col items-start mb-12">
        {/* Upgraded to gap-8 and full width matching for larger box dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
          {/* Email */}
          <div className="flex flex-col bg-[#f8f9fa] rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 items-start text-left min-h-[140px] sm:min-h-[160px] justify-center">
            <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-[#2b3a67] mb-3">
              Email
            </h3>
            <a
              href="mailto:lhlamndustry@gmail.com"
              className="text-[13px] sm:text-[14px] text-zinc-600 font-normal hover:text-red-600 transition-colors break-all"
            >
              lhlamindustry@gmail.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col bg-[#f8f9fa] rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 items-start text-left min-h-[140px] sm:min-h-[160px] justify-center">
            <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-[#2b3a67] mb-3">
              WhatsApp
            </h3>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] sm:text-[14px] text-zinc-600 font-normal hover:text-emerald-600 transition-colors"
            >
              +92 3298338669
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col bg-[#f8f9fa] rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-300 items-start text-left min-h-[140px] sm:min-h-[160px] justify-center">
            <h3 className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-[#2b3a67] mb-3">
              Location
            </h3>
            <p className="text-[13px] sm:text-[14px] text-zinc-600 font-normal leading-relaxed">
              Sialkot, Punjab, Pakistan 51310
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2.5: BEFORE YOU CONTACT US — PREMIUM RESPONSIVE MATRIX */}
      <section className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center py-10 border-t border-zinc-100 mt-8">
        {/* LEFT BLOCK: CONTENT TEXT LAYOUT */}
        <div className="lg:col-span-6 flex flex-col items-start text-left w-full">
          {/* Eyebrow Label Tag — Swapped out golden for brand bold Red */}
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.25em] text-red-600 mb-3 block">
            Before You Contact Us
          </span>

          {/* Primary Bold Title Layout */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#2b3a67] leading-tight mb-4 w-full max-w-xl">
            Share The Details That Help Us Understand Your Project
          </h2>

          {/* Core Descriptive Text Paragraph */}
          <p className="text-[12px] sm:text-sm text-zinc-600 font-normal leading-relaxed max-w-xl mb-6 lg:mb-0">
            To give you the best guidance, send us your product category,
            reference images, quantity, fabric preference, branding
            requirements, target market, and any special finishing details.
          </p>
        </div>

        {/* RIGHT BLOCK: COMPACT CENTERING PILLS — No longer stretching edge-to-edge on mobile */}
        <div className="lg:col-span-6 flex flex-col items-center sm:grid sm:grid-cols-2 gap-3 w-full mt-4 lg:mt-0">
          {/* PILL 1 */}
          <div className="bg-[#f8f9fa] rounded-full px-6 py-2.5 shadow-sm text-center font-black uppercase text-[10px] sm:text-xs tracking-wider text-[#2b3a67] w-fit hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default">
            Product category
          </div>

          {/* PILL 2 */}
          <div className="bg-[#f8f9fa] rounded-full px-6 py-2.5 shadow-sm text-center font-black uppercase text-[10px] sm:text-xs tracking-wider text-[#2b3a67] w-fit hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default">
            Reference images
          </div>

          {/* PILL 3 */}
          <div className="bg-[#f8f9fa] rounded-full px-6 py-2.5 shadow-sm text-center font-black uppercase text-[10px] sm:text-xs tracking-wider text-[#2b3a67] w-fit hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default">
            Estimated quantity
          </div>

          {/* PILL 4 */}
          <div className="bg-[#f8f9fa] rounded-full px-6 py-2.5 shadow-sm text-center font-black uppercase text-[10px] sm:text-xs tracking-wider text-[#2b3a67] w-fit hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default">
            Fabric preference
          </div>

          {/* PILL 5 */}
          <div className="bg-[#f8f9fa] rounded-full px-6 py-2.5 shadow-sm text-center font-black uppercase text-[10px] sm:text-xs tracking-wider text-[#2b3a67] w-fit hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default">
            Logo or branding details
          </div>

          {/* PILL 6 */}
          <div className="bg-[#f8f9fa] rounded-full px-6 py-2.5 shadow-sm text-center font-black uppercase text-[10px] sm:text-xs tracking-wider text-[#2b3a67] w-fit hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default">
            Packaging requirements
          </div>
        </div>
      </section>
    </main>
  );
}
