"use client";
import { use } from "react";
import Link from "next/link";

const apparelData = {
  hoodies: {
    title: "Premium Hoodies",
    description:
      "Custom engineered heavy-duty hoodies made with premium fleece fabrics for maximum warmth, casual streetwear styling, and team comfort.",
    products: [
      { id: 1, name: "custom sublimated hoodie", image: "/csh.jfif" },
      { id: 2, name: "custom sublimated hoodie", image: "/csh1.jfif" },
      // { id: 3, name: "custom sublimated hoodie", image: "/csh2.jpg" },
      { id: 4, name: "MMA sublimated hoodie", image: "/mmash.webp" },
      { id: 5, name: "polyester hoodie", image: "/poly.jfif" },
      { id: 6, name: "polyester cotton hoodie", image: "/polycotton.webp" },
      { id: 7, name: "polyester hoodie", image: "/polyy.jfif" },
      { id: 8, name: "fleece hoodie", image: "/fleece.avif" },
      { id: 9, name: "dye sublimated hoodie", image: "/dyesh.webp" },
      { id: 10, name: "camuflage hoodie", image: "/camuf.avif" },
      { id: 11, name: "camuflage hoodie", image: "/camuflage.avif" },
      { id: 11, name: "", image: "/hh.jpeg" },
      { id: 11, name:"" , image: "/hhh.jpeg" },
    ],
  },
  tracksuit: {
    title: "Custom Tracksuits",
    description:
      "High-performance matching tracksuits designed for athletic warmups, travel comfort, and sharp, unified team branding.",
    products: [
      { id: 1, image: "/ts2.png" },
      { id: 2, image: "/ts.avif" },
      { id: 3, image: "/ts3.png" },
      { id: 4, image: "/ts4.png" },
      { id: 4, image: "/tss.jpeg" },
      { id: 4, image: "/tsss.jpeg" },
      { id: 4, image: "/tssss.jpeg" },
    ],
  },
  "t-shirt": {
    title: "Custom T-Shirts",
    description:
      "Lightweight, breathable training and lifestyle t-shirts featuring high-quality fabrics engineered for daily performance.",
    products: [
      { id: 1, image: "/jer.png" },
      { id: 2, image: "/jer4.png" },
      { id: 3, image: "/jer2.webp" },
      { id: 4, image: "/jer1.jfif" },
      { id: 4, image: "/s.jpeg" },
      { id: 4, image: "/ss.jpeg" },
      { id: 4, image: "/sss.jpeg" },
    ],
  },
  shorts: {
    title: "Athletic Shorts",
    description:
      "Flexible, moisture-wicking athletic shorts built with reinforced stitching for high-intensity training sessions.",
    products: [
      { id: 1, image: "/s1.png" },
      { id: 1, image: "/s2.png" },
      { id: 1, image: "/s3.webp" },
      { id: 1, image: "/s4.jpg" },
      { id: 1, image: "/s5.webp" },
      { id: 1, image: "/s6.jfif" },
    ],
  },
  jackets: {
    title: "Jackets",
    description:
      "Weather-resistant custom jackets tailored for outdoor team training, varsity representation, and coaches' sideline wear.",
    products: [
      { id: 1, image: "/vj1.jfif" },
      { id: 1, image: "/vj2.jfif" },
      { id: 1, image: "/vj4.webp" },
      { id: 1, image: "/vjj.jfif" },
      { id: 1, image: "/vjjj.webp" },
      { id: 1, image: "/jj.avif" },
      { id: 1, image: "/o.jpeg" },
      { id: 1, image: "/oo.jpeg" },
      { id: 1, image: "/ooo.jpeg" },
      { id: 1, image: "/oooo.jpeg" },
      { id: 1, image: "/ooooo.jpeg" },
    ],
  },
  sweat: {
    title: "Custom Sweatshirts",
    description:
      "Premium pullover crewneck sweatshirts combining athletic wear durability with everyday street utility.",
    products: [
      { id: 1, image: "/sw.jpg" },
      { id: 1, image: "/sw1.webp" },
      { id: 1, image: "/sw2.jfif" },
      { id: 1, image: "/sw3.jpeg" },
      { id: 1, image: "/sw4.jpeg" },
      { id: 1, image: "/sww.jpeg" },
    ],
  },
  streetwear: {
    title: "Streetwear ",
    description:
      "Oversized, heavy-drop custom streetwear graphic tees tailored for trendy casual collections and fitness lifestyle wear.",
    products: [
      { id: 1, image: "/tu.jfif" },
      { id: 1, image: "/tu1.jfif" },
      { id: 1, image: "/tu2.webp" },
      { id: 1, image: "/tu4.png" },
      { id: 1, image: "/tu5.webp" },
    ],
  },
};

export default function CustomApparelPage({ params }) {
  const resolvedParams = use(params);

  // Safely read the dynamic route slug matching the folder bracket key [category]
  const rawCategory = resolvedParams?.category;
  const slug = rawCategory ? rawCategory.toLowerCase() : "";

  // Dynamic selector falling back to an informative layout if the slug key isn't matched
  const currentApparel = apparelData[slug] || {
    title: "Custom Apparel",
    description:
      "No product descriptions available for this specific category option.",
    products: [],
  };

  return (
    <main className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-10">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto mb-10">
        <span className="uppercase text-red-600 text-xs font-bold tracking-[0.2em]">
          Custom Sportswear Manufacturer
        </span>
        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#2b3a67]">
          {currentApparel.title}
        </h1>
        <p className="mt-4 max-w-3xl text-gray-600 leading-7">
          {currentApparel.description}
        </p>
      </section>

      {/* PRODUCTS DISPLAY GRID */}
      <section className="max-w-7xl mx-auto">
        {currentApparel.products.length === 0 ? (
          <div className="py-16 text-center text-gray-400 border border-dashed border-gray-200 rounded-xl">
            No products available for this item category yet.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {currentApparel.products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition"
              >
                {/* Visual containment - image only style context */}
                <div className="bg-gray-55 p-5">
                  <img
                    src={product.image}
                    alt={`${currentApparel.title} Template Asset`}
                    className="w-full aspect-square object-contain group-hover:scale-105 transition"
                  />
                </div>

                {/* Product Info Section */}
                <div
                  className="p-4 text-center"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <h3
                    className="capitalize"
                    style={{
                      color: "#1a1a1a",
                      fontSize: "16px",
                      fontWeight: "600",
                      display: "block",
                      margin: "0 auto",
                    }}
                  >
                    {product.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA ACTIONS */}
      <section className="max-w-7xl mx-auto mt-16 border-t pt-10 flex justify-center lg:justify-start">
        <Link href="/contact">
          <button className="bg-[#2b3a67] hover:bg-red-600 text-white font-bold uppercase tracking-wider text-sm px-7 py-3.5 rounded-full transition duration-300 shadow-lg hover:shadow-xl">
            Get Bulk Quote
          </button>
        </Link>
      </section>
    </main>
  );
}
