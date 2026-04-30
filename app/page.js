import Link from "next/link";
import {
  ArrowRight,
  Building2,
  MessageCircleMore,
  PanelsTopLeft,
  Trees,
} from "lucide-react";
import Reveal from "@/components/reveal";
import { company, homeHighlights, services } from "@/lib/site-data";
import rumahTropis from "@/picture/rumah_tropis.png";

const briefServices = [
  { title: services[0].title, text: services[0].description, icon: Building2 },
  { title: services[3].title, text: services[3].description, icon: PanelsTopLeft },
  { title: services[9].title, text: services[9].description, icon: Trees },
];

export default function HomePage() {
  return (
    <>
      <section className="pt-8 sm:pt-10">
        <div className="page-frame">
          <div className="relative min-h-[640px] overflow-hidden rounded-[36px] border border-slate-200/80 shadow-[0_30px_80px_rgba(15,23,42,0.22)]">
            <div className="absolute inset-0">
              <img
                src={rumahTropis.src}
                alt="Rumah tropis modern"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/28"></div>
            </div>

            <div className="relative z-10 flex min-h-[640px] items-end p-4 sm:p-8 lg:p-10">
              <div className="soft-panel w-full rounded-[32px] bg-white/96 p-5 text-slate-900 sm:p-8 lg:p-10">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <Reveal className="space-y-7">
                    <p className="surface-label">
                      <span className="lime-dot"></span>
                      Beranda
                    </p>
                    <div className="space-y-5">
                      <h1 className="font-display max-w-4xl text-4xl font-semibold leading-none tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                        Professional Construction & Interior Website
                      </h1>
                      <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                        {company.name} menghadirkan solusi konstruksi, interior, utilitas, dan landscape
                        dengan pendekatan minimal, modern, dan terasa premium sejak kesan pertama.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      {homeHighlights.map((item, index) => (
                        <div
                          key={item}
                          className="rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm leading-7 text-slate-600"
                        >
                          <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-lime-100 text-lime-700">
                            0{index + 1}
                          </span>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/kontak"
                        className="inline-flex items-center gap-2 rounded-full bg-lime-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-lime-700"
                      >
                        Konsultasi Sekarang
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href="/portofolio"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-lime-400 hover:text-lime-700"
                      >
                        Lihat Portofolio
                      </Link>
                    </div>
                  </Reveal>

                  <Reveal delay={0.1} className="lg:justify-self-end">
                    <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80"
                        alt="Modern architecture and interior"
                        className="h-[320px] w-full rounded-[22px] object-cover sm:h-[420px]"
                      />
                      <div className="grid gap-4 px-1 pb-1 pt-5 sm:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                            FOKUS UTAMA
                          </p>
                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            Hunian, renovasi, interior built-in, utilitas, dan eksterior dengan
                            pendekatan rapi serta terstruktur.
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                            RESPONS CEPAT
                          </p>
                          <a
                            href={company.whatsappLink}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-lime-700 hover:text-lime-800"
                          >
                            <MessageCircleMore className="h-4 w-4" />
                            {company.whatsappDisplay}
                          </a>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="page-frame">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal className="space-y-5">
              <p className="surface-label">
                <span className="lime-dot"></span>
                Brief About Us
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Tentang kami dalam versi singkat, jelas, dan tetap terasa premium.
              </h2>
              <p className="max-w-xl text-base leading-8 text-slate-600">
                Kami membantu klien mewujudkan ruang yang lebih fungsional dan bernilai tinggi
                melalui perpaduan konstruksi yang kuat, detail interior yang bersih, dan koordinasi
                proyek yang nyaman diajak bekerja.
              </p>
              <Link
                href="/tentang-kami"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-lime-700"
              >
                Baca Tentang Kami
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={0.1} className="grid gap-4 sm:grid-cols-2">
              <div className="soft-panel rounded-[28px] p-6 sm:col-span-2">
                <div className="grid gap-6 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                    alt="Company overview"
                    className="h-56 w-full rounded-[22px] object-cover"
                  />
                  <div className="space-y-4">
                    <p className="text-sm leading-7 text-slate-600">
                      Pendekatan kami menekankan visi desain, pemilihan material, dan konsistensi
                      kualitas agar proyek terasa matang dari konsep sampai finishing.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-slate-50 px-4 py-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Visi</p>
                        <p className="mt-2 text-sm leading-7 text-slate-700">Membangun ruang yang kuat, rapi, dan bernilai.</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 px-4 py-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Misi</p>
                        <p className="mt-2 text-sm leading-7 text-slate-700">Melayani dengan komunikasi jelas dan hasil premium.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="page-frame">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal className="space-y-4">
              <p className="surface-label">
                <span className="lime-dot"></span>
                Brief Services
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Ringkas, fokus, dan langsung menunjukkan standar layanan kami.
              </h2>
            </Reveal>
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-lime-700"
            >
              Lihat Semua Layanan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {briefServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} delay={0.05 * index}>
                  <article className="soft-panel group rounded-[28px] p-6 transition hover:-translate-y-1 hover:shadow-2xl">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 text-lime-700 transition group-hover:bg-lime-600 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-slate-950">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
