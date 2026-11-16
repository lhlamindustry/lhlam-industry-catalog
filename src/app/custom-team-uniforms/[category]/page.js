"use client";
import { use } from "react";
import Link from "next/link";

const categoryData = {
  football: {
    title: "Football Uniforms",
    description:
      "Premium engineered custom football jerseys, shorts, and fully sublimated team kits tailored for elite performance and rugged durability.",
    products: [
      { id: 1, image: "/emj.avif" },
      { id: 2, image: "/stk.avif" },
      { id: 3, image: "/tjj.avif" },
      { id: 4, image: "/gk.png" },
    ],
  },
  basketball: {
    title: "Basketball Uniforms",
    description:
      "Lightweight moisture-wicking basketball jerseys and shorts engineered for maximum comfort and court performance.",
    products: [
      { id: 1, image: "/38-basketball-uniform-700x700.webp" },
      { id: 2, image: "/bb.jpg" },
      { id: 3, image: "/bb1.jpg" },
      { id: 4, image: "/1-3-copy.jpg" },
    ],
  },
  volleyball: {
    title: "Volleyball Uniforms",
    description:
      "Professional volleyball jerseys designed for flexibility and comfort.",
    products: [
      { id: 1, image: "/vb2.webp" },
      { id: 2, image: "/vb3.jpg" },
      { id: 3, image: "/vb4.jpg" },
      { id: 4, image: "/vb5.jpg" },
    ],
  },
  soccer: {
    title: "Soccer Uniforms",
    description:
      "Lightweight, breathable custom soccer kits engineered for swift movement and pitch dominance.",
    products: [
      { id: 1, image: "/sc.avif" },
      { id: 2, image: "/sc1.avif" },
      { id: 3, image: "/sc2.avif" },
      { id: 4, image: "/sc3.avif" },
    ],
  },
  baseball: {
    title: "Baseball Uniforms",
    description:
      "Premium custom baseball jerseys and pants manufactured for professional teams.",
    products: [
      { id: 1, image: "/bb1.jpg" },
      { id: 2, image: "/bb2.webp" },
      { id: 3, image: "/bb3.jpg" },
      { id: 4, image: "/bb4.jfif" },
    ],
  },
  rugby: {
    title: "Rugby Uniforms",
    description: "Heavy-duty reinforced rugby kits built for intense matches.",
    products: [
      { id: 1, image: "/rb.avif" },
      { id: 2, image: "/rb1.jfif" },
      { id: 3, image: "/rrb2.jfif" },
      { id: 4, image: "/rb3.jfif" },
    ],
  },
  tennis: {
    title: "Tennis Uniforms",
    description: "Lightweight tennis apparel with breathable premium fabrics.",
    products: [
      { id: 1, image: "/tn.jpg" },
      { id: 2, image: "/tn1.webp" },
      { id: 3, image: "/tn2.jpg" },
    ],
  },
  hockey: {
    title: "Hockey Uniforms",
    description:
      "Professional hockey jerseys built for durability and comfort.",
    products: [
      { id: 1, image: "/hk.jfif" },
      { id: 2, image: "/hk1.jfif" },
      { id: 3, image: "/hk2.avif" },
      { id: 4, image: "/hk3.jpg" },
    ],
  },
  "martial-arts": {
    title: "Martial Arts Uniforms",
    description:
      "Premium martial arts uniforms manufactured with durable fabrics.",
    products: [
      { id: 1, image: "/ma.webp" },
      { id: 2, image: "/ma2.jpg" },
      { id: 3, image: "/ma3.webp" },
      { id: 4, image: "/ma4.webp" },
    ],
  },
  "custom-team-jerseys": {
    title: "Custom Team Jerseys",
    description:
      "Fully customized jerseys with unlimited colors, logos, names, and numbers.",
    products: [
      { id: 1, image: "/cu.webp" },
      { id: 2, image: "/cu1.jpg" },
      { id: 3, image: "/cu2.avif" },
      { id: 4, image: "/cu3.jfif" },
    ],
  },
};

export default function CategoryPage({ params }) {
  const resolvedParams = use(params);

  // Safely extract parameter string regardless if Next.js parses it as a string or array
  const rawCategory = Array.isArray(resolvedParams?.category)
    ? resolvedParams.category[0]
    : resolvedParams?.category;

  const slug = rawCategory ? rawCategory.toLowerCase() : "";

  const currentCategory = categoryData[slug] || {
    title: "All Sportswear Categories",
    description:
      "Explore our comprehensive catalog of high-performance custom team wear and engineered sports apparel.",
    products: [],
  };

  return (
    <main className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-10">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto mb-10">
        <span className="uppercase text-red-600 text-xs font-bold tracking-[0.2em]">
          Custom Sportswear Manufacturer
        </span>
        <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-[#2b3a67]">
          {currentCategory.title}
        </h1>
        <p className="mt-4 max-w-3xl text-gray-600 leading-7">
          {currentCategory.description}
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto">
        {currentCategory.products.length === 0 ? (
          <div className="py-16 text-center text-gray-400">
            Select a specific category from the menu to view custom options.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {currentCategory.products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-[#2b3a67] hover:shadow-xl transition duration-300"
              >
                <div className="bg-gray-50 p-5">
                  <img
                    src={product.image}
                    alt={`${currentCategory.title} Specimen`}
                    className="w-full aspect-square object-contain group-hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
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
