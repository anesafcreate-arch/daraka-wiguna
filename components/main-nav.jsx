"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/site-data";

export default function MainNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--navy)] shadow-sm lg:hidden"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <nav
        className={[
          "absolute left-4 right-4 top-[calc(100%+12px)] rounded-3xl border border-[var(--line)] bg-white/95 p-3 shadow-2xl backdrop-blur lg:static lg:flex lg:items-center lg:gap-1 lg:rounded-full lg:border lg:border-[var(--line)] lg:bg-white lg:p-1 lg:shadow-sm",
          open ? "block" : "hidden lg:flex",
        ].join(" ")}
      >
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "block rounded-full px-4 py-2 text-sm font-medium transition",
                active
                  ? "bg-[linear-gradient(135deg,#243BDB,#6D4CFF)] text-white shadow-[0_12px_28px_rgba(59,45,226,0.18)]"
                  : "text-slate-700 hover:border-[#D9DEE8] hover:bg-[#F7F8FB] hover:text-[#159BD3]",
              ].join(" ")}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
