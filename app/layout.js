import Link from "next/link";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import AuthControls from "@/components/auth-controls";
import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import { company } from "@/lib/site-data";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: company.name,
  description: company.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="min-h-screen text-slate-900 antialiased">
        <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
          <div className="page-frame flex items-center justify-between gap-4 py-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black text-sm font-bold tracking-[0.12em] text-white shadow-sm">
                NS
              </span>
              <span className="max-w-[270px] text-[10px] font-semibold uppercase leading-tight tracking-[0.14em] text-slate-950 sm:max-w-none sm:text-xs">
                CV. NISFI SABAR
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <MainNav />
              <AuthControls />
            </div>
          </div>
        </header>

        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
