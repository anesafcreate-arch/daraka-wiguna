"use client";

import { useState } from "react";
import { portfolioFilters, portfolioItems } from "@/lib/site-data";

const heightClass = {
  short: "h-64",
  medium: "h-80",
  tall: "h-[26rem]",
};

export default function PortfolioGallery() {
  const [filter, setFilter] = useState("Semua");

  const filteredItems =
    filter === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {portfolioFilters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={[
              "rounded-full border px-4 py-2 text-sm font-medium transition",
              filter === item
                ? "border-lime-600 bg-lime-600 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:border-lime-300 hover:text-lime-700",
            ].join(" ")}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
        {filteredItems.map((item) => (
          <article
            key={`${item.title}-${item.category}`}
            className="soft-panel mb-5 break-inside-avoid overflow-hidden rounded-[28px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className={`w-full object-cover ${heightClass[item.height] || "h-72"}`}
            />
            <div className="space-y-3 p-5">
              <span className="inline-flex rounded-full bg-lime-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-lime-700">
                {item.category}
              </span>
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="text-sm leading-7 text-slate-600">
                Placeholder visual yang disusun agar selaras dengan karakter layanan dan suasana proyek premium.
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
