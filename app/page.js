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
    text: "Sangat puas dengan hasil kerja CV. Daraka Wiguna. Renovasi rumah saya selesai tepat waktu dengan hasil yang sangat rapi. Harga juga sangat kompetitif dibandingkan kontraktor lain.",
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
    text: "Kitchen set yang dibuat sangat bagus dan presisi. Material berkualitas dan finishing sempurna. Sangat merekomendasikan CV. Daraka Wiguna!",
  },
];

const heroHighlightsIndo = [
  "Pengerjaan bangunan dan interior sesuai kebutuhan",
  "Perencanaan kerja yang terarah dan rapi",
  "Konsultasi cepat terintegrasi WhatsApp",
];

const clientLogos = [
  {
    name: "Heksa Instrumen Sinergi",
    src: "/clients/heksa-instrumen-sinergi.png",
    alt: "Logo Heksa Instrumen Sinergi",
    imgClassName: "h-28 sm:h-32",
  },
  {
    name: "PT Asuransi Kredit Indonesia",
    src: "/clients/asuransi-kredit-indonesia.png",
    alt: "Logo PT Asuransi Kredit Indonesia",
    imgClassName: "h-24 sm:h-28",
  },
];

export default function HomePage() {
  const cinematicUp = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  return (
    <>
      <section className="pt-8 sm:pt-10">
        <motion.div
          initial={false}
          animate="visible"
          variants={staggerContainer}
          className="page-frame"
        >
          <motion.div
            variants={cinematicUp}
            className="relative min-h-[640px] overflow-hidden rounded-[36px] border border-white/10 shadow-[0_28px_80px_rgba(59,45,226,0.18)]"
          >
            <div className="absolute inset-0">
              <img src={springTropis.src} alt="Rumah tropis modern" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,11,46,0.82)_0%,rgba(11,18,50,0.66)_45%,rgba(38,18,94,0.48)_100%)]"></div>
            </div>

            <div className="relative z-10 flex min-h-[640px] items-center p-4 sm:p-8 lg:p-10">
              <div className="mx-auto w-full max-w-5xl rounded-[32px] p-5 text-center text-white sm:p-8 lg:p-10">
                <motion.p variants={cinematicUp} className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/18 bg-[rgba(15,18,28,0.55)] px-4 py-1.5 text-sm font-medium backdrop-blur-md">
                  <span className="lime-dot"></span>
                  Beranda
                </motion.p>

                <motion.div variants={cinematicUp} className="mt-7 space-y-7">
                  <h1 className="font-display mx-auto max-w-6xl text-4xl font-semibold leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Layanan Konstruksi &
                    <br />
                    Renovasi Bangunan
                  </h1>
                  <p className="mx-auto max-w-3xl text-base leading-8 text-white/88 sm:text-lg">
                    CV. Daraka Wiguna melayani pekerjaan konstruksi, renovasi, greenhouse, aluminium,
                    dan kebutuhan bangunan lainnya dengan pengerjaan yang rapi, komunikasi yang jelas,
                    dan menyesuaikan kebutuhan Anda.
                  </p>
                </motion.div>

                <motion.div variants={cinematicUp} className="mx-auto mt-8 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
                  {heroHighlightsIndo.map((item, index) => (
                    <div
                      key={item}
                      className="construction-glass rounded-3xl px-4 py-4 text-center text-sm leading-7 text-white"
                    >
                      <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#EAF6FF] text-[#159BD3]">
                        0{index + 1}
                      </span>
                      <p>{item}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={cinematicUp} className="mt-8 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/kontak"
                    className="brand-primary-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
                  >
                    Hubungi Kami
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/portofolio"
                    className="brand-secondary-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition"
                  >
                    Lihat Portofolio
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="construction-section pt-8 pb-16 sm:pt-10 sm:pb-20">
        <motion.div
          initial={false}
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
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[#07111F] sm:text-5xl">
                Beberapa Layanan Yang Kami Kerjakan
              </h2>
            </div>
            <Link
              href="/layanan"
              className="brand-text-link inline-flex items-center gap-2 text-sm font-semibold transition"
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
                  className="soft-panel brand-grid-card group rounded-[28px] p-6 hover:-translate-y-1"
                >
                  <span className="brand-icon-chip inline-flex h-14 w-14 items-center justify-center rounded-2xl transition group-hover:border-[#6D4CFF] group-hover:bg-[linear-gradient(135deg,#243BDB,#6D4CFF)] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-[#07111F]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{service.text}</p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="construction-section pb-16 sm:pb-20">
        <motion.div
          initial={false}
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
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#07111F] sm:text-5xl">
              Apa Kata Pelanggan Kami?
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
              Pengalaman client yang telah menggunakan layanan kami.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <motion.article
                variants={cinematicUp}
                key={item.name}
                className="relative h-full rounded-3xl border border-[#E1E7F0] bg-white p-6 shadow-[0_18px_50px_rgba(7,17,31,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_56px_rgba(7,17,31,0.1)]"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-[#6D4CFF]/15" />
                <div className="mb-4 flex items-center gap-1 text-[#D6A84F]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={`${item.name}-${starIndex}`}
                      className="h-4 w-4 fill-[#D6A84F] text-[#D6A84F]"
                    />
                  ))}
                </div>
                <p className="text-sm leading-7 text-[color:var(--muted)]">{item.text}</p>

                <div className="mt-6 flex items-center gap-3 border-t border-[#E1E7F0] pt-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#243BDB,#159BD3)] text-sm font-semibold text-white">
                    {item.avatar}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#07111F]">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="construction-section pb-16 sm:pb-20">
        <motion.div
          initial={false}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="page-frame"
        >
          <motion.div variants={cinematicUp} className="space-y-4">
            <p className="surface-label">
              <span className="lime-dot"></span>
              CLIENT KAMI
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-[#07111F] sm:text-5xl">
              Dipercaya Oleh Client Kami
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
              Beberapa perusahaan yang telah bekerja sama dengan CV. Daraka Wiguna.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:gap-6">
            {clientLogos.map((client) => (
              <motion.article
                key={client.name}
                variants={cinematicUp}
                className="soft-panel brand-grid-card group rounded-[26px] border border-[#D9DEE8] bg-white px-4 py-5 text-center shadow-[0_18px_45px_rgba(7,17,31,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(7,17,31,0.12)] sm:px-5 sm:py-6"
              >
                <div className="flex min-h-[118px] items-center justify-center sm:min-h-[126px]">
                  <img
                    src={client.src}
                    alt={client.alt}
                    className={`w-full object-contain transition duration-500 group-hover:scale-[1.03] ${client.imgClassName}`}
                  />
                </div>
                <p className="mt-3 text-base font-semibold text-[#07111F]">
                  {client.name}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
