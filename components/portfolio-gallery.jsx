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
                ? "border-[#0711E0] bg-[linear-gradient(135deg,#0711E0,#6124CF)] text-white shadow-[0_14px_30px_rgba(7,17,224,0.22)]"
                : "border-[var(--line)] bg-white text-slate-700 hover:border-[#1591CC] hover:text-[#1591CC]",
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
            className="soft-panel brand-grid-card group mb-5 break-inside-avoid overflow-hidden rounded-[28px] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(7,17,31,0.12)]"
          >
            <img
              src={item.image}
              alt={item.title}
              className={`w-full object-cover transition duration-500 group-hover:scale-[1.03] ${heightClass[item.height] || "h-72"}`}
            />
            <div className="space-y-3 p-5">
              <span className="inline-flex rounded-full bg-[#eaf4ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1591CC]">
                {item.category}
              </span>
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
