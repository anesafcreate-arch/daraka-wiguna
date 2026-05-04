"use client";

import Link from "next/link";
import { ArrowRight, Building2, PanelsTopLeft, Quote, Star, Trees } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/lib/site-data";
import springTropis from "@/picture/spring_tropis.png";

const briefServices = [
  { title: services[0].title, text: services[0].description, icon: Building2 },
  { title: services[3].title, text: services[3].description, icon: PanelsTopLeft },
  { title: services[8].title, text: services[8].description, icon: Trees },
];

const testimonials = [
  {
    avatar: "B",
    name: "Bapak Ahmad Fauzi",
    role: "Pemilik Rumah - Bogor",
    text: "Sangat puas dengan hasil kerja CV. NISFI SABAR. Renovasi rumah saya selesai tepat waktu dengan hasil yang sangat rapi. Harga juga sangat kompetitif dibandingkan kontraktor lain.",
  },
  {
    avatar: "I",
    name: "Ibu Siti Nurhaliza",
    role: "Pemilik Greenhouse - Cibinong",
    text: "Greenhouse yang dibangun sangat kokoh dan sesuai dengan spesifikasi yang saya inginkan. Tim sangat profesional dan komunikatif selama proses pengerjaan.",
  },
  {
    avatar: "B",
    name: "Bapak Hendra Gunawan",
    role: "Pengusaha - Bojong Gede",
    text: "Kitchen set yang dibuat sangat bagus dan presisi. Material berkualitas dan finishing sempurna. Sangat merekomendasikan CV. NISFI SABAR!",
  },
];


const heroHighlightsIndo = [
  "Konstruksi modern dan eksekusi interior",
  "Detailing premium dengan perencanaan praktis",
  "Konsultasi cepat terintegrasi WhatsApp"
];

export default function HomePage() {
  const cinematicUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  return (
    <>
      <section className="pt-8 sm:pt-10">
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer} 
          className="page-frame"
        >
          <motion.div 
            variants={cinematicUp}
            className="relative min-h-[640px] overflow-hidden rounded-[36px] border border-slate-200/80 shadow-[0_30px_80px_rgba(15,23,42,0.22)]"
          >
            <div className="absolute inset-0">
              <img src={springTropis.src} alt="Rumah tropis modern" className="h-full w-full object-cover" />
              {/* Overlay tipis dipertahankan sedikit agar teks putih tetap kontras jika ada bagian gambar yg terang */}
              <div className="absolute inset-0 bg-slate-950/40"></div>
            </div>

            <div className="relative z-10 flex min-h-[640px] items-center p-4 sm:p-8 lg:p-10">
              {/* Hapus background panel putih, ganti text ke putih */}
              <div className="mx-auto w-full max-w-5xl rounded-[32px] p-5 text-center text-white sm:p-8 lg:p-10">
                <motion.p variants={cinematicUp} className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-md">
                  <span className="lime-dot"></span>
                  Beranda
                </motion.p>

                <motion.div variants={cinematicUp} className="mt-7 space-y-5">
                  <h1 className="font-display mx-auto max-w-4xl text-4xl font-semibold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Wujudkan Bangunan Impian Anda
                  </h1>
                  <p className="mx-auto max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
                    CV. NISFI SABAR hadir sebagai solusi terbaik untuk kebutuhan konstruksi, bangunan,
                    greenhouse, aluminium, dan renovasi properti Anda. Kami berkomitmen memberikan
                    hasil berkualitas dengan harga kompetitif.
                  </p>
                </motion.div>

                <motion.div variants={cinematicUp} className="mx-auto mt-8 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
                  {heroHighlightsIndo.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-white/20 bg-white/10 px-4 py-4 text-center text-sm leading-7 text-white backdrop-blur-md"
                    >
                      <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-lime-500/20 text-lime-300">
                        0{index + 1}
                      </span>
                      <p>{item}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={cinematicUp} className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/kontak"
                    className="inline-flex items-center gap-2 rounded-full bg-lime-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-lime-700"
                  >
                    Konsultasi Sekarang
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/portofolio"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white hover:bg-white/20"
                  >
                    Lihat Portofolio
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 sm:py-20">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer} 
          className="page-frame"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <motion.div variants={cinematicUp} className="space-y-5">
              <p className="surface-label">
                <span className="lime-dot"></span>
                ABOUT US
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
            </motion.div>

            <motion.div variants={cinematicUp} className="grid gap-4 sm:grid-cols-2">
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
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Visi
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-700">
                          Membangun ruang yang kuat, rapi, dan bernilai.
                        </p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 px-4 py-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                          Misi
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-700">
                          Melayani dengan komunikasi jelas dan hasil premium.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="pb-16 sm:pb-20">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer} 
          className="page-frame"
        >
          <motion.div variants={cinematicUp} className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-4">
              <p className="surface-label">
                <span className="lime-dot"></span>
                SERVICES
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Ringkas, fokus, dan langsung menunjukkan standar layanan kami.
              </h2>
            </div>
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-lime-700"
            >
              Lihat Semua Layanan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {briefServices.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  variants={cinematicUp}
                  key={service.title}
                  className="soft-panel group rounded-[28px] p-6 transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 text-lime-700 transition group-hover:bg-lime-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.text}</p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="pb-16 sm:pb-20">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer} 
          className="page-frame"
        >
          <motion.div variants={cinematicUp} className="space-y-4">
              <p className="surface-label">
                <span className="lime-dot"></span>
                TESTIMONIAL
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Apa Kata Pelanggan Kami?
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Kepuasan pelanggan adalah bukti nyata dari kualitas layanan yang kami berikan.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <motion.article
                variants={cinematicUp}
                key={item.name}
                
                className="relative h-full rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-slate-100" />
                <div className="mb-4 flex items-center gap-1 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={`${item.name}-${starIndex}`}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm leading-7 text-slate-600">{item.text}</p>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-700 text-sm font-semibold text-white">
                    {item.avatar}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}