import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-white text-zinc-900 flex flex-col px-4 sm:px-6 lg:px-20 pb-24 pt-8">
      {/* SECTION 1: ELEGANT MODULAR TOP HEADLINE SECTION */}
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center mt-4 mb-14 text-center">
        <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-2">
          Global Logistics & Production
        </span>

        <h1 className="text-[14px] sm:text-[16px] lg:text-[19px] font-black uppercase tracking-wide text-[#2b3a67] leading-snug max-w-3xl">
          Custom Clothing Manufacturer & Exporter of Sports Uniforms and Casual
          Wears
        </h1>

        <div className="w-12 h-[3px] bg-red-600 mt-4 rounded-full" />
      </div>

      {/* SECTION 2: 8-SERVICES GRID CONTAINER */}
      <section className="max-w-6xl mx-auto w-full flex flex-col items-center sm:items-start">
        {/* Updated Subheader - Wording updated and color changed to permanent deep navy blue */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#2b3a67] leading-tight mb-4 w-full">
          Complete Support For Clothing Production
        </h2>

        {/* 8-BOX GRID ENGINE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
          {/* BOX 01: CUSTOM APPAREL */}
          <div className="flex flex-col bg-[#f8f9fa] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 ease-out items-start text-left cursor-pointer">
            {/* Circle badge changed to brand red natively */}
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-black mb-5 shadow-sm">
              01
            </div>
            {/* Title header color changed to brand navy blue natively */}
            <h3 className="text-[14px] sm:text-[15px] font-black uppercase tracking-normal text-[#2b3a67] mb-3 leading-snug">
              Custom Apparel Manufacturing
            </h3>
            <p className="text-[12px] sm:text-[13px] text-zinc-600 font-normal leading-relaxed">
              We manufacture custom clothing based on your designs, samples,
              references, or technical requirements.
            </p>
          </div>

          {/* BOX 02: PRIVATE LABEL */}
          <div className="flex flex-col bg-[#f8f9fa] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 ease-out items-start text-left cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-black mb-5 shadow-sm">
              02
            </div>
            <h3 className="text-[14px] sm:text-[15px] font-black uppercase tracking-normal text-[#2b3a67] mb-3 leading-snug">
              Private Label Production
            </h3>
            <p className="text-[12px] sm:text-[13px] text-zinc-600 font-normal leading-relaxed">
              Complete private label support including custom neck labels, woven
              labels, hang tags, packaging, and brand finishing.
            </p>
          </div>

          {/* BOX 03: CUT & SEW */}
          <div className="flex flex-col bg-[#f8f9fa] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 ease-out items-start text-left cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-black mb-5 shadow-sm">
              03
            </div>
            <h3 className="text-[14px] sm:text-[15px] font-black uppercase tracking-normal text-[#2b3a67] mb-3 leading-snug">
              Cut & Sew Manufacturing
            </h3>
            <p className="text-[12px] sm:text-[13px] text-zinc-600 font-normal leading-relaxed">
              Garment production from patterns, measurements, tech packs, or
              sample references with professional finishing.
            </p>
          </div>

          {/* BOX 04: SAMPLING */}
          <div className="flex flex-col bg-[#f8f9fa] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 ease-out items-start text-left cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-black mb-5 shadow-sm">
              04
            </div>
            <h3 className="text-[14px] sm:text-[15px] font-black uppercase tracking-normal text-[#2b3a67] mb-3 leading-snug">
              Sampling & Product Development
            </h3>
            <p className="text-[12px] sm:text-[13px] text-zinc-600 font-normal leading-relaxed">
              Sample development before bulk production so you can review fit,
              fabric, stitching, and overall product quality.
            </p>
          </div>

          {/* BOX 05: FABRIC SOURCING */}
          <div className="flex flex-col bg-[#f8f9fa] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 ease-out items-start text-left cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-black mb-5 shadow-sm">
              05
            </div>
            <h3 className="text-[14px] sm:text-[15px] font-black uppercase tracking-normal text-[#2b3a67] mb-3 leading-snug">
              Fabric Sourcing & Selection
            </h3>
            <p className="text-[12px] sm:text-[13px] text-zinc-600 font-normal leading-relaxed">
              We source custom high-performance textiles, cotton blends, and
              technical knits curated to meet your precise styling requirements.
            </p>
          </div>

          {/* BOX 06: CUSTOM EMBROIDERY */}
          <div className="flex flex-col bg-[#f8f9fa] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 ease-out items-start text-left cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-black mb-5 shadow-sm">
              06
            </div>
            <h3 className="text-[14px] sm:text-[15px] font-black uppercase tracking-normal text-[#2b3a67] mb-3 leading-snug">
              Custom Embroidery Services
            </h3>
            <p className="text-[12px] sm:text-[13px] text-zinc-600 font-normal leading-relaxed">
              Intricate stitch mapping, custom brand emblems, and 3D puff
              embroidery executed with premium high-density thread lines.
            </p>
          </div>

          {/* BOX 07: SCREEN PRINTING */}
          <div className="flex flex-col bg-[#f8f9fa] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 ease-out items-start text-left cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-black mb-5 shadow-sm">
              07
            </div>
            <h3 className="text-[14px] sm:text-[15px] font-black uppercase tracking-normal text-[#2b3a67] mb-3 leading-snug">
              Bulk Screen Printing
            </h3>
            <p className="text-[12px] sm:text-[13px] text-zinc-600 font-normal leading-relaxed">
              Vibrant, durable silk screen runs, silicone transfers, and
              sublimation prints engineered to withstand rugged wash tests.
            </p>
          </div>

          {/* BOX 08: GLOBAL SHIPPING */}
          <div className="flex flex-col bg-[#f8f9fa] rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 active:scale-[0.98] transition-all duration-300 ease-out items-start text-left cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-black mb-5 shadow-sm">
              08
            </div>
            <h3 className="text-[14px] sm:text-[15px] font-black uppercase tracking-normal text-[#2b3a67] mb-3 leading-snug">
              Global Logistics & Shipping
            </h3>
            <p className="text-[12px] sm:text-[13px] text-zinc-600 font-normal leading-relaxed">
              Secure commercial packaging, customs clearance management, and
              global doorstep express delivery tracking runs.
            </p>
          </div>
        </div>
      </section>
      {/* SECTION 3: WIDE CUSTOMIZATION CLOUD - LEFT ALIGNED ON MOBILE */}
      <section className="bg-white text-zinc-900 px-4 sm:px-6 lg:px-8 py-12 w-full mt-16 sm:mt-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT BLOCK: TEXT INFRASTRUCTURE - Changed text-center to text-left, items-center to items-start */}
          <div className="lg:col-span-5 flex flex-col items-start text-left w-full">
            {/* Small uppercase eyebrow label */}
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-2">
              Customization
            </span>

            {/* Primary Bold Section Title */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#2b3a67] leading-tight mb-4 w-full">
              Flexible Options For Your Brand Requirements
            </h2>

            {/* Subtext Paragraph */}
            <p className="text-[12px] sm:text-sm text-zinc-600 font-normal leading-relaxed max-w-xl">
              Every brand has different product goals. We support a wide range
              of customization options so your apparel can match your brand
              identity, target market, and production standards.
            </p>
          </div>

          {/* RIGHT BLOCK: CLOUD LABELS */}
          <div className="lg:col-span-7 flex flex-wrap justify-center lg:justify-start gap-3 w-full lg:pl-6 mt-6 lg:mt-0">
            <div className="bg-[#f8f9fa] hover:bg-zinc-100 text-[#2b3a67] font-black uppercase text-[11px] sm:text-xs tracking-wider px-5 py-3 rounded-full shadow-sm cursor-default hover:scale-105 transition-transform duration-200">
              Colors
            </div>

            <div className="bg-[#f8f9fa] hover:bg-zinc-100 text-[#2b3a67] font-black uppercase text-[11px] sm:text-xs tracking-wider px-5 py-3 rounded-full shadow-sm cursor-default hover:scale-105 transition-transform duration-200">
              Fabrics
            </div>

            <div className="bg-[#f8f9fa] hover:bg-zinc-100 text-[#2b3a67] font-black uppercase text-[11px] sm:text-xs tracking-wider px-5 py-3 rounded-full shadow-sm cursor-default hover:scale-105 transition-transform duration-200">
              Sizes
            </div>

            <div className="bg-[#f8f9fa] hover:bg-zinc-100 text-[#2b3a67] font-black uppercase text-[11px] sm:text-xs tracking-wider px-5 py-3 rounded-full shadow-sm cursor-default hover:scale-105 transition-transform duration-200">
              Embroidery
            </div>

            <div className="bg-[#f8f9fa] hover:bg-zinc-100 text-[#2b3a67] font-black uppercase text-[11px] sm:text-xs tracking-wider px-5 py-3 rounded-full shadow-sm cursor-default hover:scale-105 transition-transform duration-200">
              Screen Printing
            </div>

            <div className="bg-[#f8f9fa] hover:bg-zinc-100 text-[#2b3a67] font-black uppercase text-[11px] sm:text-xs tracking-wider px-5 py-3 rounded-full shadow-sm cursor-default hover:scale-105 transition-transform duration-200">
              DTF Printing
            </div>

            <div className="bg-[#f8f9fa] hover:bg-zinc-100 text-[#2b3a67] font-black uppercase text-[11px] sm:text-xs tracking-wider px-5 py-3 rounded-full shadow-sm cursor-default hover:scale-105 transition-transform duration-200">
              Custom Labels
            </div>

            <div className="bg-[#f8f9fa] hover:bg-zinc-100 text-[#2b3a67] font-black uppercase text-[11px] sm:text-xs tracking-wider px-5 py-3 rounded-full shadow-sm cursor-default hover:scale-105 transition-transform duration-200">
              Hang Tags
            </div>

            <div className="bg-[#f8f9fa] hover:bg-zinc-100 text-[#2b3a67] font-black uppercase text-[11px] sm:text-xs tracking-wider px-5 py-3 rounded-full shadow-sm cursor-default hover:scale-105 transition-transform duration-200">
              Logo Placement
            </div>

            <div className="bg-[#f8f9fa] hover:bg-zinc-100 text-[#2b3a67] font-black uppercase text-[11px] sm:text-xs tracking-wider px-5 py-3 rounded-full shadow-sm cursor-default hover:scale-105 transition-transform duration-200">
              Zippers & Buttons
            </div>

            <div className="bg-[#f8f9fa] hover:bg-zinc-100 text-[#2b3a67] font-black uppercase text-[11px] sm:text-xs tracking-wider px-5 py-3 rounded-full shadow-sm cursor-default hover:scale-105 transition-transform duration-200">
              Packaging
            </div>

            <div className="bg-[#f8f9fa] hover:bg-zinc-100 text-[#2b3a67] font-black uppercase text-[11px] sm:text-xs tracking-wider px-5 py-3 rounded-full shadow-sm cursor-default hover:scale-105 transition-transform duration-200">
              Export Cartons
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO WE SERVE — TARGET MARKET CHANNELS (2 COLUMNS ON MOBILE) */}
      <section className="bg-white text-zinc-900 px-3 sm:px-6 lg:px-8 py-12 lg:py-16 w-full mt-12">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-start">
          {/* Eyebrow Label Tag */}
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-2">
            Who We Serve
          </span>

          {/* Core Bold Heading Section */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-tight text-[#2b3a67] text-left mb-10 w-full">
            Built For Brands, Buyers & Apparel Businesses
          </h2>

          {/* 4-COLUMN CHANNELS GRID — Forced to stay in 2 columns even on small mobile screens */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 w-full">
            {/* BOX 1 */}
            <div className="bg-[#f8f9fa] rounded-xl px-3 py-6 shadow-sm text-center font-black uppercase text-[10px] sm:text-sm tracking-normal text-[#2b3a67] flex items-center justify-center min-h-[74px] sm:min-h-[84px] hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-default leading-tight">
              Fashion Startups
            </div>

            {/* BOX 2 */}
            <div className="bg-[#f8f9fa] rounded-xl px-3 py-6 shadow-sm text-center font-black uppercase text-[10px] sm:text-sm tracking-normal text-[#2b3a67] flex items-center justify-center min-h-[74px] sm:min-h-[84px] hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-default leading-tight">
              Streetwear Brands
            </div>

            {/* BOX 3 */}
            <div className="bg-[#f8f9fa] rounded-xl px-3 py-6 shadow-sm text-center font-black uppercase text-[10px] sm:text-sm tracking-normal text-[#2b3a67] flex items-center justify-center min-h-[74px] sm:min-h-[84px] hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-default leading-tight">
              Sportswear Brands
            </div>

            {/* BOX 4 */}
            <div className="bg-[#f8f9fa] rounded-xl px-3 py-6 shadow-sm text-center font-black uppercase text-[10px] sm:text-sm tracking-normal text-[#2b3a67] flex items-center justify-center min-h-[74px] sm:min-h-[84px] hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-default leading-tight">
              Fitness Brands
            </div>

            {/* BOX 5 */}
            <div className="bg-[#f8f9fa] rounded-xl px-3 py-6 shadow-sm text-center font-black uppercase text-[10px] sm:text-sm tracking-normal text-[#2b3a67] flex items-center justify-center min-h-[74px] sm:min-h-[84px] hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-default leading-tight">
              Private Labels
            </div>

            {/* BOX 6 */}
            <div className="bg-[#f8f9fa] rounded-xl px-3 py-6 shadow-sm text-center font-black uppercase text-[10px] sm:text-sm tracking-normal text-[#2b3a67] flex items-center justify-center min-h-[74px] sm:min-h-[84px] hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-default leading-tight">
              Wholesalers
            </div>

            {/* BOX 7 */}
            <div className="bg-[#f8f9fa] rounded-xl px-3 py-6 shadow-sm text-center font-black uppercase text-[10px] sm:text-sm tracking-normal text-[#2b3a67] flex items-center justify-center min-h-[74px] sm:min-h-[84px] hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-default leading-tight">
              Corporate Buyers
            </div>

            {/* BOX 8 */}
            <div className="bg-[#f8f9fa] rounded-xl px-3 py-6 shadow-sm text-center font-black uppercase text-[10px] sm:text-xs tracking-normal text-[#2b3a67] flex items-center justify-center min-h-[74px] sm:min-h-[84px] hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-default leading-snug">
              International Apparel Companies
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: COMPLETE VISUAL 8-STEP MANUFACTURING PROCESS BLOCK */}
      <section className="bg-white text-zinc-900 px-4 py-12 lg:px-8 lg:py-16 w-full text-center mt-6">
        <div className="max-w-7xl mx-auto flex flex-col items-start text-left">
          {/* Eyebrow Label Tag — Left Aligned */}
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-red-600 mb-2">
            How We Work
          </span>

          {/* Main Headline — Left Aligned */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-tight text-[#2b3a67] leading-tight mb-3 w-full">
            A Simple Path From Idea To Production
          </h2>

          {/* STEP BUBBLES GRID — 2 Columns on Mobile, 4 Columns on Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-4 sm:gap-x-6 w-full mt-10">
            {/* STEP 1 */}
            <div className="w-full flex flex-col items-center group bg-[#f8f9fa] border border-zinc-200 rounded-lg px-1.5 pb-2.5 sm:p-5 pt-0 shadow-sm relative mt-10 sm:mt-16">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 -mt-12 sm:-mt-14 lg:-mt-16 mb-3">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-zinc-50">
                  <img
                    src="/dandp.webp"
                    alt="Step 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-[#2b3a67] text-white flex items-center justify-center text-xs font-black shadow-md">
                  01
                </div>
              </div>
              <h3 className="text-[11px] sm:text-[13px] lg:text-[14px] font-black uppercase tracking-wide text-[#2b3a67] mb-2">
                Design & Pattern
              </h3>
              <div className="w-full max-w-[120px] text-zinc-400 mb-3">
                <svg
                  viewBox="0 0 100 10"
                  className="w-full h-2 fill-none stroke-current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0,5 L10,1 L20,9 L30,1 L40,9 L50,1 L60,9 L70,1 L80,9 L90,1 L100,5" />
                </svg>
              </div>
              <p className="text-[10px] sm:text-[11px] lg:text-xs text-zinc-600 font-light leading-relaxed text-center px-1">
                We create custom designs and detailed patterns to transform your
                ideas into production-ready apparel. Pamoo ensures precision and
                brand accuracy from the start.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="w-full flex flex-col items-center group bg-[#f8f9fa] border border-zinc-200 rounded-lg px-1.5 pb-2.5 sm:p-5 pt-0 shadow-sm relative mt-10 sm:mt-16">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 -mt-12 sm:-mt-14 lg:-mt-16 mb-3">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-zinc-50">
                  <img
                    src="/fc.webp"
                    alt="Step 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-[#2b3a67] text-white flex items-center justify-center text-xs font-black shadow-md">
                  02
                </div>
              </div>
              <h3 className="text-[11px] sm:text-[13px] lg:text-[14px] font-black uppercase tracking-wide text-[#2b3a67] mb-2">
                Fabric Cutting
              </h3>
              <div className="w-full max-w-[120px] text-zinc-400 mb-3">
                <svg
                  viewBox="0 0 100 10"
                  className="w-full h-2 fill-none stroke-current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0,5 L10,1 L20,9 L30,1 L40,9 L50,1 L60,9 L70,1 L80,9 L90,1 L100,5" />
                </svg>
              </div>
              <p className="text-[10px] sm:text-[11px] lg:text-xs text-zinc-600 font-light leading-relaxed text-center px-1">
                Our experts use advanced fabric cutting techniques for accurate
                sizing and clean edges. This step guarantees consistent quality
                in every garment.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="w-full flex flex-col items-center group bg-[#f8f9fa] border border-zinc-200 rounded-lg px-1.5 pb-2.5 sm:p-5 pt-0 shadow-sm relative mt-10 sm:mt-16">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 -mt-12 sm:-mt-14 lg:-mt-16 mb-3">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-zinc-50">
                  <img
                    src="/custom-embroidry.jpg"
                    alt="Step 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-[#2b3a67] text-white flex items-center justify-center text-xs font-black shadow-md">
                  03
                </div>
              </div>
              <h3 className="text-[11px] sm:text-[13px] lg:text-[14px] font-black uppercase tracking-wide text-[#2b3a67] mb-2">
                Embroidery
              </h3>
              <div className="w-full max-w-[120px] text-zinc-400 mb-3">
                <svg
                  viewBox="0 0 100 10"
                  className="w-full h-2 fill-none stroke-current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0,5 L10,1 L20,9 L30,1 L40,9 L50,1 L60,9 L70,1 L80,9 L90,1 L100,5" />
                </svg>
              </div>
              <p className="text-[10px] sm:text-[11px] lg:text-xs text-zinc-600 font-light leading-relaxed text-center px-1">
                From logos to 3D puff embroidery, we deliver premium stitching
                details that elevate your brand. Custom embroidery adds lasting
                value to sportswear and apparel.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="w-full flex flex-col items-center group bg-[#f8f9fa] border border-zinc-200 rounded-lg px-1.5 pb-2.5 sm:p-5 pt-0 shadow-sm relative mt-10 sm:mt-16">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 -mt-12 sm:-mt-14 lg:-mt-16 mb-3">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-zinc-50">
                  <img
                    src="/printing.webp"
                    alt="Step 4"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-[#2b3a67] text-white flex items-center justify-center text-xs font-black shadow-md">
                  04
                </div>
              </div>
              <h3 className="text-[11px] sm:text-[13px] lg:text-[14px] font-black uppercase tracking-wide text-[#2b3a67] mb-2">
                Printing
              </h3>
              <div className="w-full max-w-[120px] text-zinc-400 mb-3">
                <svg
                  viewBox="0 0 100 10"
                  className="w-full h-2 fill-none stroke-current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0,5 L10,1 L20,9 L30,1 L40,9 L50,1 L60,9 L70,1 L80,9 L90,1 L100,5" />
                </svg>
              </div>
              <p className="text-[10px] sm:text-[11px] lg:text-xs text-zinc-600 font-light leading-relaxed text-center px-1">
                We offer many printing options such as sublimation, screen
                printing, heat transfer, and digital printing. Each technique
                ensures vivid colors and long-lasting results for sports
                uniforms and fashion apparel.
              </p>
            </div>

            {/* STEP 5 */}
            <div className="w-full flex flex-col items-center group bg-[#f8f9fa] border border-zinc-200 rounded-lg px-1.5 pb-2.5 sm:p-5 pt-0 shadow-sm relative mt-10 sm:mt-16">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 -mt-12 sm:-mt-14 lg:-mt-16 mb-3">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-zinc-50">
                  <img
                    src="/Sewing-Stitching.webp"
                    alt="Step 5"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-[#2b3a67] text-white flex items-center justify-center text-xs font-black shadow-md">
                  05
                </div>
              </div>
              <h3 className="text-[11px] sm:text-[13px] lg:text-[14px] font-black uppercase tracking-wide text-[#2b3a67] mb-2">
                Sewing & Stitching
              </h3>
              <div className="w-full max-w-[120px] text-zinc-400 mb-3">
                <svg
                  viewBox="0 0 100 10"
                  className="w-full h-2 fill-none stroke-current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0,5 L10,1 L20,9 L30,1 L40,9 L50,1 L60,9 L70,1 L80,9 L90,1 L100,5" />
                </svg>
              </div>
              <p className="text-[10px] sm:text-[11px] lg:text-xs text-zinc-600 font-light leading-relaxed text-center px-1">
                Our skilled team provides durable stitching with flawless
                finishing, ensuring every piece meets global standards.
              </p>
            </div>

            {/* STEP 6 */}
            <div className="w-full flex flex-col items-center group bg-[#f8f9fa] border border-zinc-200 rounded-lg px-1.5 pb-2.5 sm:p-5 pt-0 shadow-sm relative mt-10 sm:mt-16">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 -mt-12 sm:-mt-14 lg:-mt-16 mb-3">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-zinc-50">
                  <img
                    src="/Quality-Checking.webp"
                    alt="Step 6"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-[#2b3a67] text-white flex items-center justify-center text-xs font-black shadow-md">
                  06
                </div>
              </div>
              <h3 className="text-[11px] sm:text-[13px] lg:text-[14px] font-black uppercase tracking-wide text-[#2b3a67] mb-2">
                Quality Checking
              </h3>
              <div className="w-full max-w-[120px] text-zinc-400 mb-3">
                <svg
                  viewBox="0 0 100 10"
                  className="w-full h-2 fill-none stroke-current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0,5 L10,1 L20,9 L30,1 L40,9 L50,1 L60,9 L70,1 L80,9 L90,1 L100,5" />
                </svg>
              </div>
              <p className="text-[10px] sm:text-[11px] lg:text-xs text-zinc-600 font-light leading-relaxed text-center px-1">
                Each garment passes through strict quality control for
                stitching, printing, and measurements. We guarantee only
                defect-free clothing leaves our factory.
              </p>
            </div>

            {/* STEP 7 */}
            <div className="w-full flex flex-col items-center group bg-[#f8f9fa] border border-zinc-200 rounded-lg px-1.5 pb-2.5 sm:p-5 pt-0 shadow-sm relative mt-10 sm:mt-16">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 -mt-12 sm:-mt-14 lg:-mt-16 mb-3">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-zinc-50">
                  <img
                    src="/Packing-Finishing.webp"
                    alt="Step 7"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-[#2b3a67] text-white flex items-center justify-center text-xs font-black shadow-md">
                  07
                </div>
              </div>
              <h3 className="text-[11px] sm:text-[13px] lg:text-[14px] font-black uppercase tracking-wide text-[#2b3a67] mb-2">
                Packing & Finishing
              </h3>
              <div className="w-full max-w-[120px] text-zinc-400 mb-3">
                <svg
                  viewBox="0 0 100 10"
                  className="w-full h-2 fill-none stroke-current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0,5 L10,1 L20,9 L30,1 L40,9 L50,1 L60,9 L70,1 L80,9 L90,1 L100,5" />
                </svg>
              </div>
              <p className="text-[10px] sm:text-[11px] lg:text-xs text-zinc-600 font-light leading-relaxed text-center px-1">
                We provide custom labels, hangtags, and packaging solutions to
                make your products retail-ready.
              </p>
            </div>

            {/* STEP 8 */}
            <div className="w-full flex flex-col items-center group bg-[#f8f9fa] border border-zinc-200 rounded-lg px-1.5 pb-2.5 sm:p-5 pt-0 shadow-sm relative mt-10 sm:mt-16">
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 -mt-12 sm:-mt-14 lg:-mt-16 mb-3">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-zinc-50">
                  <img
                    src="/Shipping-Worldwide.webp"
                    alt="Step 8"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-[#2b3a67] text-white flex items-center justify-center text-xs font-black shadow-md">
                  08
                </div>
              </div>

              <h3 className="text-[11px] sm:text-[13px] lg:text-[14px] font-black uppercase tracking-wide text-[#2b3a67] mb-2">
                Shipping Worldwide
              </h3>

              <div className="w-full max-w-[120px] text-zinc-400 mb-3">
                <svg
                  viewBox="0 0 100 10"
                  className="w-full h-2 fill-none stroke-current"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M0,5 L10,1 L20,9 L30,1 L40,9 L50,1 L60,9 L70,1 L80,9 L90,1 L100,5" />
                </svg>
              </div>

              <p className="text-[10px] sm:text-[11px] lg:text-xs text-zinc-600 font-light leading-relaxed text-center px-1">
                With DHL, FedEx, UPS, and economy freight options, we deliver
                custom clothing and sports uniforms globally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
