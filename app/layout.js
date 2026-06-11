import Link from "next/link";
import Image from "next/image";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import AuthControls from "@/components/auth-controls";
import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import { company } from "@/lib/site-data";
import logoDarakaWiguna from "@/picture/logo-daraka-wiguna.jpg";
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
  title: "darakawiguna",
  description: company.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="min-h-screen text-slate-900 antialiased">
        <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
          <div className="page-frame flex items-center justify-between gap-4 py-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="relative inline-flex h-11 w-11 overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm sm:h-12 sm:w-12">
                <Image
                  src={logoDarakaWiguna}
                  alt="Logo CV. Daraka Wiguna"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </span>
              <span className="max-w-[270px] text-[10px] font-semibold leading-tight tracking-[0.14em] text-[var(--navy)] sm:max-w-none sm:text-xs">
                {company.name}
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
