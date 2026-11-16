"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col relative pb-20">
      {/* SECTION 1: HERO IMAGE CONTAINER */}
      <section
        className="relative min-h-[42vh] lg:min-h-[70vh] flex items-center bg-cover bg-center px-4 py-8 lg:px-20"
        style={{
          backgroundImage: `url('/hrero-bg.jpg')`,
          backgroundColor: "#23387d",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-[14px] sm:text-2xl lg:text-4xl font-extrabold uppercase tracking-tight text-white mb-4 lg:mb-8 leading-snug max-w-[290px] sm:max-w-xl lg:max-w-2xl">
            Radiate Success And Promote Your Brand With Exclusive Designs From
            The Premier <br className="hidden lg:inline" />
            <span className="text-red-600 font-extrabold block mt-1 lg:mt-4">
              Clothing Manufacturer
            </span>
          </h1>

          <div>
            <Link href="/contact">
              <button className="bg-transparent text-white border-[1.5px] border-white font-bold uppercase text-[10px] lg:text-xs tracking-wider px-4 py-1.5 lg:px-6 lg:py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-200">
                Get A Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* SECTION 2: LIGHT TEXT BANNER */}
      <section className="bg-[#e9ecef] text-zinc-900 px-4 py-6 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-[11px] sm:text-base lg:text-lg font-black uppercase tracking-tight text-[#2b3a67] leading-tight max-w-[310px] sm:max-w-2xl lg:max-w-4xl">
            Perfect Clothes Manufacturers, Boasting Supreme Production{" "}
            <br className="hidden sm:inline" />
            <span className="text-red-600 font-black block mt-0.5 sm:inline">
              Capabilities And Awe Inspiring Attention To Detail
            </span>
          </h2>
        </div>
      </section>
      {/* SECTION 3: BRAND QUEST SECTION */}
      <section className="bg-white text-zinc-900 px-2 sm:px-6 lg:px-20 py-10 lg:py-20">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Mobile Image Top Placement Layer */}
          <div className="w-full order-1 lg:order-2 flex justify-center lg:justify-end px-2">
            <div className="w-full max-w-[480px] aspect-[4/3] sm:aspect-[16/11] lg:aspect-square overflow-hidden rounded shadow-lg border border-zinc-100">
              <img
                src="/girl-cut.png"
                alt="Garment Production Workspace Floor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content Block */}
          <div className="w-full order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left px-2 sm:px-6 lg:px-0">
            {/* Split Colored Headline - Expanded layout box */}
            <h3 className="text-[13px] sm:text-lg lg:text-xl font-black uppercase tracking-normal text-[#2b3a67] leading-snug max-w-md sm:max-w-xl mb-4 mt-1 lg:mt-0">
              Are you one of such business owners in the apparel industry on a
              quest for the <br />
              <span className="text-red-600 font-black block mt-0.5">
                Perfect Clothing Manufacturer?
              </span>
            </h3>

            {/* Description Text - Expanded from max-w-sm to max-w-xl to fill screen real estate */}
            <div className="text-[12px] sm:text-sm text-zinc-600 font-normal leading-relaxed max-w-xl text-center lg:text-left">
              <p>
                With hundreds of garment makers available, the hunt can be
                overpowering and time-consuming. But you don't have to look any
                further, as one of the most distinguished largest apparel
                manufacturing companies, we offer a one-stop solution for all
                types of{" "}
                <span className="text-[#3b54a4] font-semibold cursor-pointer hover:underline">
                  expert apparel manufacturing
                </span>
                . As a beacon of stylish innovation, we take pride in being the
                ultimate solution to all your garment manufacturer needs,
                guaranteeing that your brand stands out among the strong
                competition of today's market with our on-demand apparel
                manufacturing services. As a prominent garment manufacturing
                company and exporter, we take huge superiority in delivering
                clothing products that not only meet global standards but exceed
                expectations, certifying that your brand receives nothing short
                of steep excellence.
              </p>
            </div>

            {/* Action Button */}
            <div className="mt-6">
              <Link href="/contact">
                <button className="bg-transparent text-[#2b3a67] border-2 border-[#2b3a67] font-bold uppercase text-[10px] lg:text-xs tracking-wider px-6 py-3 rounded-md hover:bg-[#2b3a67] hover:text-white transition-all duration-200 shadow-sm">
                  Get A Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*SECTION 4:  PRODUCT CATEGORIES SHOWCASE GRID */}
      <section className="bg-white text-zinc-900 px-4 py-8 sm:py-12 lg:px-20 lg:py-16 text-center border-b border-zinc-200">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Main Section Header */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#2b3a67] leading-tight mb-6 sm:mb-10">
            Lhlam Industry
            <br className="sm:hidden" />
            <span className="text-red-600 font-black ml-1 sm:ml-2">
              Exclusive Product Categories
            </span>
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 lg:gap-12 w-full max-w-4xl mx-auto">
            {/* BOX 1 */}
            <div className="relative flex flex-col bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-full aspect-[4/5] bg-zinc-50 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
                <img
                  src="/custom-team.png"
                  alt="Custom Team Uniforms"
                  className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 sm:p-6 border-t border-zinc-100 flex flex-col items-center">
                <h3 className="text-[15px] lg:text-base font-black uppercase text-[#2b3a67] mb-2">
                  CUSTOM TEAM UNIFORMS
                </h3>

                {/* <Link href="/custom-team-uniforms">
                  <button className="flex items-center gap-2 bg-white border-2 border-[#2b3a67] text-[#2b3a67] hover:bg-[#2b3a67] hover:text-white transition-all duration-300 rounded-full px-5 py-2 sm:px-6 sm:py-2.5 text-[11px] font-black uppercase tracking-wider">
                    READ MORE
                    <span className="group-hover:translate-x-1 transition-transform">
                      ➜
                    </span>
                  </button>
                </Link> */}
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
            </div>

            {/* BOX 2 */}
            <div className="relative flex flex-col bg-white rounded-xl overflow-hidden border border-zinc-200 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="w-full aspect-[4/5] bg-zinc-50 flex items-center justify-center p-2 sm:p-4 overflow-hidden">
                <img
                  src="/custom-apparel.webp"
                  alt="Custom Apparel"
                  className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 sm:p-6 border-t border-zinc-100 flex flex-col items-center">
                <h3 className="text-[15px] lg:text-base font-black uppercase text-[#2b3a67] mb-2">
                  CUSTOM APPAREL
                </h3>

                {/* <Link href="/custom-apparel">
                  <button className="flex items-center gap-2 bg-white border-2 border-[#2b3a67] text-[#2b3a67] hover:bg-[#2b3a67] hover:text-white transition-all duration-300 rounded-full px-5 py-2 sm:px-6 sm:py-2.5 text-[11px] font-black uppercase tracking-wider">
                    READ MORE
                    <span className="group-hover:translate-x-1 transition-transform">
                      ➜
                    </span>
                  </button>
                </Link> */}
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PREMIUM SERVICES WITH CONTENT CARDS */}
      <section
        className="relative bg-[#f8f9fa] bg-cover bg-center px-4 py-12 lg:px-20 lg:py-16 text-center"
        style={{
          backgroundImage: `url('/texture-photo.avif')`,
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Main Title Banner Header */}
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#2b3a67] leading-tight max-w-[320px] sm:max-w-xl lg:max-w-3xl mb-6">
            Our Premium Clothing <br />
            <span className="text-red-600 font-black">
              Manufacturers Services
            </span>
          </h2>

          {/* Centered Descriptive Paragraph */}
          <p className="text-[11px] sm:text-xs lg:text-sm text-black font-normal leading-relaxed max-w-sm sm:max-w-xl lg:max-w-3xl text-center px-4 mb-12">
            We are apparel manufacturers offering end-to-end solutions for every
            type of clothing brand. Whether you need a single product line or a
            full collection, our services are built to match your brand’s exact
            requirements.
          </p>

          {/* SERVICE CARDS GRID - Horizontal on Desktop, Stacks vertically on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full px-2 sm:px-4">
            {/* CARD 1: PRIVATE LABEL */}
            <div className="flex flex-col overflow-hidden rounded-2xl shadow-md border border-zinc-200 bg-[#2b3a67] text-white">
              <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src="/private-label.png"
                  alt="Private Label Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-start text-left">
                <h3 className="text-[13px] sm:text-[14px] font-black uppercase tracking-normal mb-3 leading-snug">
                  Private Label Clothing Manufacturer
                </h3>
                <p className="text-[12px] sm:text-[13px] text-white font-light leading-relaxed">
                  Launch your brand with confidence. Our private label clothing
                  manufacturers team produces premium garments under your brand
                  name complete with custom labels, hangtags, and packaging.
                  Perfect for fashion startups and retail brands ready to stand
                  out.
                </p>
              </div>
            </div>

            {/* CARD 2: OEM */}
            <div className="flex flex-col overflow-hidden rounded-2xl shadow-md border border-zinc-200 bg-[#2b3a67] text-white">
              <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src="/custom-embroidry.jpg"
                  alt="OEM Clothing Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-start text-left">
                <h3 className="text-[13px] sm:text-[14px] font-black uppercase tracking-normal mb-3 leading-snug">
                  Custom Embroidery Clothing
                </h3>
                <p className="text-[12px] sm:text-[13px] text-white font-light leading-relaxed">
                  Logos, brand names, or intricate designs our embroidery team
                  handles it all with precision. Every stitch is digitized and
                  quality-checked to make sure your brand identity comes through
                  perfectly on every piece.
                </p>
              </div>
            </div>

            {/* CARD 3: ODM */}
            <div className="flex flex-col overflow-hidden rounded-2xl shadow-md border border-zinc-200 bg-[#2b3a67] text-white">
              <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src="/custmaparl.png"
                  alt="ODM Clothing Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-start text-left">
                <h3 className="text-[13px] sm:text-[14px] font-black uppercase tracking-normal mb-3 leading-snug">
                  Custom Apparel
                </h3>
                <p className="text-[12px] sm:text-[13px] text-white font-light leading-relaxed">
                  Bold graphics. Premium fabrics. Street-ready style. We
                  manufacture custom hoodies, oversized tees, joggers, varsity
                  jackets, tracksuits, and windbreakers for streetwear brands
                  that want to make a statement.
                </p>
              </div>
            </div>

            {/* CARD 4: CUSTOM TEAM UNIFORMS */}
            <div className="flex flex-col overflow-hidden rounded-2xl shadow-md border border-zinc-200 bg-[#2b3a67] text-white">
              <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src="/cstmuni.png"
                  alt="Custom Team Uniforms"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-start text-left">
                <h3 className="text-[13px] sm:text-[14px] font-black uppercase tracking-normal mb-3 leading-snug">
                  Custom Team Uniforms
                </h3>
                <p className="text-[12px] sm:text-[13px] text-white font-light leading-relaxed">
                  Supply your club with premium tennis uniforms, volleyball
                  uniforms, golf polos, basketball warm up suits, ice hockey
                  jerseys, sublimated motocross jerseys, and lacrosse teamwear.
                </p>
              </div>
            </div>

            {/* CARD 5: CUT & SEW PRODUCTION */}
            <div className="flex flex-col overflow-hidden rounded-2xl shadow-md border border-zinc-200 bg-[#2b3a67] text-white md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-full lg:w-full">
              <div className="w-full aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src="/cutandsew.png"
                  alt="Cut & Sew Production"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-start text-left">
                <h3 className="text-[13px] sm:text-[14px] font-black uppercase tracking-normal mb-3 leading-snug">
                  Cut & Sew Apparel Manufacturing
                </h3>
                <p className="text-[12px] sm:text-[13px] text-white font-light leading-relaxed">
                  Formulate custom sizing patterns, heavy fabric choices, and
                  premium design silhouettes completely from scratch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: 8-STEP PROCESS BLOCK */}
      <section className="bg-white text-zinc-900 px-4 py-12 lg:px-20 lg:py-16 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-center text-[15px] sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#2b3a67] leading-tight mb-4">
            How We Manufacture Your Custom Clothing <br />
            <span className="text-red-600 font-black block mt-0.5">
              8-step Process
            </span>
          </h2>

          <p className="text-[10px] sm:text-[11px] lg:text-xs lg:text-sm text-zinc-600 font-normal leading-relaxed max-w-sm sm:max-w-2xl lg:max-w-3xl mb-14 px-2">
            We believe transparency builds trust. Here is exactly how your order
            moves from idea to delivery.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 w-full px-2 sm:px-4">
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

      {/* SECTION 7: WHY CHOOSE US - PERFECT EDGE-TO-EDGE ALIGNMENT */}
      <section className="bg-white text-zinc-900 px-4 py-6 lg:px-20 lg:py-10">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
          {/* Main Headline */}
          <h2 className="text-center text-[15px] sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#2b3a67] leading-tight mb-4">
            Why Sports Brands & Fashion Labels <br />
            <span className="text-red-600 font-black block mt-0.5">
              Choose Lhlam Industry
            </span>
          </h2>
          {/* Description Paragraphs */}
          <div className="text-[12px] sm:text-sm text-zinc-600 font-normal leading-relaxed space-y-0 max-w-2xl text-center mb-12 px-2">
            <p className="mb-4">
              Most custom clothing manufacturers make the same promises. Fast
              delivery. Premium quality. Competitive prices. But when deadlines
              are missed and calls go unanswered, promises mean nothing.
            </p>
            <p>
              At Lhlam, we let our process do the talking. Every order goes
              through the same strict quality control, same transparent
              communication, and same commitment whether you are a startup
              placing your first order or an established brand scaling
              production.
            </p>
          </div>
          {/* HIGH-END MODERN TABLE CONTAINER - Real 2-Column Table on ALL Devices */}
          <div className="w-full max-w-5xl border border-zinc-200 bg-[#f8f9fa] rounded-xl overflow-hidden shadow-sm flex flex-col px-0 text-left">
            {/* TABLE HEADER - Visible on mobile now */}
            <div className="grid grid-cols-12 w-full bg-[#2b3a67] text-white font-black uppercase text-[10px] sm:text-xs tracking-wider px-3 sm:px-6 py-4 border-b border-zinc-200">
              <div className="col-span-5 sm:col-span-4">Benefit</div>
              <div className="col-span-7 sm:col-span-8">Lhlam Capabilities</div>
            </div>

            {/* ROW 1 */}
            <div className="grid grid-cols-12 w-full px-3 sm:px-6 py-3.5 border-b border-zinc-200 bg-white sm:bg-transparent hover:bg-zinc-50/50 transition-colors items-center">
              <div className="col-span-5 sm:col-span-4 text-[10px] sm:text-xs font-black uppercase text-[#2b3a67] sm:text-zinc-900 pr-2">
                Minimum Order
              </div>
              <div className="col-span-7 sm:col-span-8 text-[11px] sm:text-sm text-zinc-600 font-normal leading-snug">
                Just 20 Pieces – Lowest in the Industry
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-12 w-full px-3 sm:px-6 py-3.5 border-b border-zinc-200 bg-white sm:bg-transparent hover:bg-zinc-50/50 transition-colors items-center">
              <div className="col-span-5 sm:col-span-4 text-[10px] sm:text-xs font-black uppercase text-[#2b3a67] sm:text-zinc-900 pr-2">
                Turnaround
              </div>
              <div className="col-span-7 sm:col-span-8 text-[11px] sm:text-sm text-zinc-600 font-normal leading-snug">
                Quote in 24h – Sample in 7d – Bulk 2–4 Weeks
              </div>
            </div>

            {/* ROW 3 */}
            <div className="grid grid-cols-12 w-full px-3 sm:px-6 py-3.5 border-b border-zinc-200 bg-white sm:bg-transparent hover:bg-zinc-50/50 transition-colors items-center">
              <div className="col-span-5 sm:col-span-4 text-[10px] sm:text-xs font-black uppercase text-[#2b3a67] sm:text-zinc-900 pr-2">
                Manufacturing
              </div>
              <div className="col-span-7 sm:col-span-8 text-[11px] sm:text-sm text-zinc-600 font-normal leading-snug">
                Design, Cutting, Stitching, QC – All In-House
              </div>
            </div>

            {/* ROW 4 */}
            <div className="grid grid-cols-12 w-full px-3 sm:px-6 py-3.5 border-b border-zinc-200 bg-white sm:bg-transparent hover:bg-zinc-50/50 transition-colors items-center">
              <div className="col-span-5 sm:col-span-4 text-[10px] sm:text-xs font-black uppercase text-[#2b3a67] sm:text-zinc-900 pr-2">
                Sports Focus
              </div>
              <div className="col-span-7 sm:col-span-8 text-[11px] sm:text-sm text-zinc-600 font-normal leading-snug">
                Cricket, Hockey, Football, Motocross, and Activewear
              </div>
            </div>

            {/* ROW 5 */}
            <div className="grid grid-cols-12 w-full px-3 sm:px-6 py-3.5 bg-white sm:bg-transparent hover:bg-zinc-50/50 transition-colors items-center">
              <div className="col-span-5 sm:col-span-4 text-[10px] sm:text-xs font-black uppercase text-[#2b3a67] sm:text-zinc-900 pr-2">
                Branding
              </div>
              <div className="col-span-7 sm:col-span-8 text-[11px] sm:text-sm text-zinc-600 font-normal leading-snug">
                Full Private Label – Fabric Tags & Custom Neck Labels
              </div>
            </div>
            {/* ROW 6: FABRIC SELECTION */}
            <div className="grid grid-cols-12 w-full px-3 sm:px-6 py-3.5 border-b border-zinc-200 bg-white sm:bg-transparent hover:bg-zinc-50/50 transition-colors items-center">
              <div className="col-span-5 sm:col-span-4 text-[10px] sm:text-xs font-black uppercase text-[#2b3a67] sm:text-zinc-900 pr-2">
                Fabrics
              </div>
              <div className="col-span-7 sm:col-span-8 text-[11px] sm:text-sm text-zinc-600 font-normal leading-snug">
                Premium Cotton Fleece, Organic Ring-Spun Yarns, Mesh Tech
                Fabrics & Luxury Terry
              </div>
            </div>

            {/* ROW 7: SAMPLING POLICY */}
            <div className="grid grid-cols-12 w-full px-3 sm:px-6 py-3.5 border-b border-zinc-200 bg-white sm:bg-transparent hover:bg-zinc-50/50 transition-colors items-center">
              <div className="col-span-5 sm:col-span-4 text-[10px] sm:text-xs font-black uppercase text-[#2b3a67] sm:text-zinc-900 pr-2">
                Sampling
              </div>
              <div className="col-span-7 sm:col-span-8 text-[11px] sm:text-sm text-zinc-600 font-normal leading-snug">
                Fast physical sample mockups dispatched worldwide to verify
                patterns before bulk execution
              </div>
            </div>

            {/* ROW 8: PRINTING SERVICES */}
            <div className="grid grid-cols-12 w-full px-3 sm:px-6 py-3.5 border-b border-zinc-200 bg-white sm:bg-transparent hover:bg-zinc-50/50 transition-colors items-center">
              <div className="col-span-5 sm:col-span-4 text-[10px] sm:text-xs font-black uppercase text-[#2b3a67] sm:text-zinc-900 pr-2">
                Printing
              </div>
              <div className="col-span-7 sm:col-span-8 text-[11px] sm:text-sm text-zinc-600 font-normal leading-snug">
                High-Definition Sublimation, Screen Printing, Silicon Heat
                Transfer & DTG Options
              </div>
            </div>

            {/* ROW 9: GLOBAL LOGISTICS */}
            <div className="grid grid-cols-12 w-full px-3 sm:px-6 py-3.5 border-b border-zinc-200 bg-white sm:bg-transparent hover:bg-zinc-50/50 transition-colors items-center">
              <div className="col-span-5 sm:col-span-4 text-[10px] sm:text-xs font-black uppercase text-[#2b3a67] sm:text-zinc-900 pr-2">
                Bulk Pricing
              </div>
              <div className="col-span-7 sm:col-span-8 text-[11px] sm:text-sm text-zinc-600 font-normal leading-snug">
                Price Drops as Your Volume Grows
              </div>
            </div>

            {/* ROW 10: QUALITY ASSURANCE */}
            <div className="grid grid-cols-12 w-full px-3 sm:px-6 py-3.5 bg-white sm:bg-transparent hover:bg-zinc-50/50 transition-colors items-center">
              <div className="col-span-5 sm:col-span-4 text-[10px] sm:text-xs font-black uppercase text-[#2b3a67] sm:text-zinc-900 pr-2">
                Quality
              </div>
              <div className="col-span-7 sm:col-span-8 text-[11px] sm:text-sm text-zinc-600 font-normal leading-snug">
                Strict multi-point inspections on stitching limits, seam breaks,
                and raw print integrity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CUSTOM DESIGNED FAQ CONTAINER - MUTUALLY EXCLUSIVE TOGGLE ACCORDION */}
      <section
        className="relative bg-[#f8f9fa] bg-cover bg-center px-4 py-12 lg:px-20 lg:py-16 text-center"
        style={{
          backgroundImage: `url('https://unsplash.com')`,
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center w-full">
          {/* Main Headline */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-normal text-[#2b3a67] leading-tight mb-10 text-center">
            FREQUENTLY <span className="text-red-600">ASKED QUESTIONS</span>
          </h2>

          {/* Table Box Wrapper Element */}
          <div className="w-full max-w-4xl bg-white border border-zinc-200 rounded-lg shadow-md divide-y divide-zinc-100 text-left overflow-hidden">
            {/* QUESTION 1 - Added name="faq-accordion" to link group items */}
            <details
              name="faq-accordion"
              className="group p-5 cursor-pointer focus:outline-none bg-white hover:bg-zinc-50/50 transition-colors"
            >
              <summary className="flex items-center text-xs sm:text-sm font-black text-[#2b3a67] list-none justify-between select-none">
                <span className="flex items-center gap-4">
                  <span className="text-[10px] text-zinc-900 group-open:rotate-90 transition-transform duration-200 flex items-center">
                    ▶
                  </span>
                  <span>How do I place a sample order?</span>
                </span>
              </summary>
              <div className="mt-4 pl-7 text-[12px] sm:text-sm text-zinc-600 font-normal leading-relaxed animate-in fade-in duration-200">
                If you place a bulk order, the sample is free of charge. For 1-2
                Samples, only shipping costs are charged. Once payment is made,
                your sample will be delivered within 7–12 working days. Contact
                us via email at lhlamindustry@gmail.com or on
                WhatsApp: +923298338669
              </div>
            </details>

            {/* QUESTION 2 */}
            <details
              name="faq-accordion"
              className="group p-5 cursor-pointer focus:outline-none bg-white hover:bg-zinc-50/50 transition-colors"
            >
              <summary className="flex items-center text-xs sm:text-sm font-black text-[#2b3a67] list-none justify-between select-none">
                <span className="flex items-center gap-4">
                  <span className="text-[10px] text-zinc-900 group-open:rotate-90 transition-transform duration-200 flex items-center">
                    ▶
                  </span>
                  <span>2. What is your minimum order quantity (MOQ)?</span>
                </span>
              </summary>
              <div className="mt-4 pl-7 text-[12px] sm:text-sm text-zinc-600 font-normal leading-relaxed animate-in fade-in duration-200">
                Our flexible MOQ starts at just 20 pieces per style per color,
                making it easy for startups, growing brands, and established
                companies to launch new collections without heavy investment.
                Whether you need small batch runs or bulk production, we can
                accommodate your needs.
              </div>
            </details>

            {/* QUESTION 3 */}
            <details
              name="faq-accordion"
              className="group p-5 cursor-pointer focus:outline-none bg-white hover:bg-zinc-50/50 transition-colors"
            >
              <summary className="flex items-center text-xs sm:text-sm font-black text-[#2b3a67] list-none justify-between select-none">
                <span className="flex items-center gap-4">
                  <span className="text-[10px] text-zinc-900 group-open:rotate-90 transition-transform duration-200 flex items-center">
                    ▶
                  </span>
                  <span>3. How long does production and shipping take?</span>
                </span>
              </summary>
              <div className="mt-4 pl-7 text-[12px] sm:text-sm text-zinc-600 font-normal leading-relaxed animate-in fade-in duration-200">
                Our standard production time is 2 to 4 Weeks, depending on order
                size and complexity. Shipping to international destinations
                typically takes 5–7 days with DHL, FedEx, or UPS, while our
                economical booking option takes 10–15 days. We ensure your
                orders arrive on time, every time.
              </div>
            </details>

            {/* QUESTION 4 */}
            <details
              name="faq-accordion"
              className="group p-5 cursor-pointer focus:outline-none bg-white hover:bg-zinc-50/50 transition-colors"
            >
              <summary className="flex items-center text-xs sm:text-sm font-black text-[#2b3a67] list-none justify-between select-none">
                <span className="flex items-center gap-4">
                  <span className="text-[10px] text-zinc-900 group-open:rotate-90 transition-transform duration-200 flex items-center">
                    ▶
                  </span>
                  <span>4. Can you make samples before bulk production?</span>
                </span>
              </summary>
              <div className="mt-4 pl-7 text-[12px] sm:text-sm text-zinc-600 font-normal leading-relaxed animate-in fade-in duration-200">
                Yes, we offer sample making within 7–10 days so you can check
                the quality, fit, and finishing before confirming mass
                production. We also accept revisions to ensure the final product
                meets your expectations.
              </div>
            </details>

            {/* QUESTION 5 */}
            <details
              name="faq-accordion"
              className="group p-5 cursor-pointer focus:outline-none bg-white hover:bg-zinc-50/50 transition-colors"
            >
              <summary className="flex items-center text-xs sm:text-sm font-black text-[#2b3a67] list-none justify-between select-none">
                <span className="flex items-center gap-4">
                  <span className="text-[10px] text-zinc-900 group-open:rotate-90 transition-transform duration-200 flex items-center">
                    ▶
                  </span>
                  <span>
                    5. Do you work with international clothing brands?
                  </span>
                </span>
              </summary>
              <div className="mt-4 pl-7 text-[12px] sm:text-sm text-zinc-600 font-normal leading-relaxed animate-in fade-in duration-200">
                Absolutely! We proudly manufacture for brands, sports clubs, and
                businesses across the USA, Europe, Australia, and beyond. With
                end-to-end services—from design, pattern making, and sampling to
                packaging and shipping—we help brands build reliable, long-term
                partnerships.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* GLOBAL FLOATING WHATSAPP CHAT BUTTON */}
      <a
        href="https://wa.me"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25d366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-200 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.411 0 11.945 0c3.166.001 6.142 1.233 8.381 3.474 2.239 2.24 3.469 5.213 3.468 8.378-.004 6.533-5.356 11.882-11.892 11.882-2.003-.001-3.972-.511-5.714-1.486L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.748 1.451 5.436 0 9.86-4.413 9.863-9.831.002-2.624-1.023-5.092-2.884-6.956C16.457 1.963 13.99 .939 11.365.939c-5.43 0-9.852 4.414-9.855 9.835-.002 1.761.47 3.483 1.367 5.011l-1.002 3.661 3.753-.984zM16.898 14c-.27-.135-1.59-.785-1.838-.875-.248-.089-.43-.134-.61.135-.181.269-.7 1.12-.857 1.301-.157.18-.314.202-.584.067-.27-.136-1.135-.418-2.162-1.336-.798-.711-1.336-1.59-1.493-1.859-.157-.27-.017-.415.118-.55l.36-.42c.12-.14.16-.24.24-.4.08-.165.04-.308-.02-.443-.06-.135-.61-1.469-.834-2.012-.22-.53-.443-.458-.61-.466l-.514-.01c-.18 0-.472.067-.72.337-.247.269-.943.922-.943 2.251 0 1.33.966 2.615 1.101 2.794.135.179 1.9 2.901 4.604 4.069.643.277 1.144.443 1.535.567.646.205 1.233.176 1.697.107.518-.077 1.591-.651 1.816-1.279.225-.628.225-1.166.157-1.278-.067-.113-.247-.18-.517-.315z" />
        </svg>
      </a>
    </main>
  );
}
