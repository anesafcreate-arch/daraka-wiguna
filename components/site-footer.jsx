import Link from "next/link";
import { Clock3, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";
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
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/16 text-white">
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
    <footer className="border-t border-[#395500] bg-[#486B00]">
      <div className="page-frame py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.9fr]">
          <div className="space-y-5">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-white"></span>
                Kontak Perusahaan
              </p>
              <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Wujudkan proyek yang terasa rapi, modern, dan bernilai tinggi.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-100">
              {company.name} membantu pekerjaan konstruksi, interior, utilitas, dan landscape dengan
              pendekatan yang profesional dan nyaman untuk diajak berkolaborasi.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">Navigasi</p>
            <div className="grid gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-100 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <FooterInfo icon="address" title="Alamat" text={company.address} />
            <FooterInfo icon="phone" title="WhatsApp" text={company.whatsappDisplay} href={company.whatsappLink} />
            <FooterInfo icon="hours" title="Jam Operasional" text={company.hours.join(" | ")} />
            <FooterInfo icon="whatsapp" title="Konsultasi Cepat" text="Chat via WhatsApp sekarang" href={company.whatsappLink} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/25 pt-6 text-sm text-slate-200 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 CV. NISFI SABAR. All rights reserved.</p>
          <Link href="/" className="hover:text-white">
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </footer>
  );
}
