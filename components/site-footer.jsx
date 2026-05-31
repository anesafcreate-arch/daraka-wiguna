import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";
import { company, navItems } from "@/lib/site-data";

const footerIcons = {
  address: MapPin,
  phone: PhoneCall,
  hours: Clock3,
  whatsapp: MessageCircleMore,
};

function FooterInfo({ icon, title, text, href }) {
  const Icon = footerIcons[icon];

  return (
    <div className="flex items-start gap-3 text-left">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/16 text-white">
        <Icon className="h-5 w-5" />
      </span>
      <div className="space-y-1">
        <p className="text-sm font-semibold text-white">{title}</p>
        {href ? (
          <a href={href} target="_blank" rel="noreferrer" className="text-sm text-slate-100 hover:text-white">
            {text}
          </a>
        ) : (
          <p className="text-sm leading-6 text-slate-100">{text}</p>
        )}
      </div>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="mt-0">
      <div className="bg-emerald-800">
        <div className="page-frame py-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-5 text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-50">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-200"></span>
                Kontak Perusahaan
              </p>
              <h3 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Siap Mewujudkan Proyek Anda?
              </h3>
              <p className="text-sm leading-7 text-emerald-50/90">
                {company.name} melayani kebutuhan konstruksi, renovasi, greenhouse, aluminium, 
                interior, dan berbagai pekerjaan bangunan lainnya sesuai kebutuhan client.
              </p>
              <div className="space-y-4">
                <FooterInfo icon="address" title="Alamat" text={company.address} />
                <FooterInfo icon="phone" title="WhatsApp" text={company.whatsappDisplay} href={company.whatsappLink} />
                <FooterInfo icon="hours" title="Jam Operasional" text={company.hours.join(" | ")} />
              </div>
            </div>

            <div className="space-y-5 rounded-[30px] border border-white/20 bg-white/10 p-6 text-left backdrop-blur-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100">Kirim Pesan</p>
              <p className="text-sm leading-7 text-emerald-50/90">
              Ceritakan kebutuhan proyek Anda, tim kami akan membantu memberikan informasi awal dan arahan pekerjaan yang sesuai.
              </p>
              <div className="space-y-3 text-sm text-emerald-50">
                <p className="flex items-center justify-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-200" />
                  Konsultasi kebutuhan proyek
                </p>
                <p className="flex items-center justify-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-200" />
                  Respon cepat dan komunikatif
                </p>
                <p className="flex items-center justify-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-200" />
                  Rencana kerja jelas dan terukur
                </p>
              </div>
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                <MessageCircleMore className="h-4 w-4" />
                Hubungi via WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-950">
        <div className="page-frame py-10">
          <div className="grid gap-8 text-left sm:grid-cols-2">
            <div className="space-y-4 sm:order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">Navigasi</p>
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm text-emerald-100/90 transition hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4 sm:order-1">
              <Link href="/" className="inline-flex items-center gap-2 text-sm text-emerald-100/90 transition hover:text-white">
                Kembali ke beranda
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex justify-start">
                <FooterInfo icon="whatsapp" title="Konsultasi Cepat" text="Chat via WhatsApp sekarang" href={company.whatsappLink} />
              </div>
              <p className="mt-6 text-sm text-emerald-100/90">
                &copy; 2026 CV. NISFI SABAR. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
