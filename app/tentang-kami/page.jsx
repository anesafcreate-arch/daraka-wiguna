"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logoNisfiSabar from "@/picture/logo-nisfi-sabar.png";
import tentangKamiImage from "@/picture/tentang-kami.png";
import visiMisiBgImage from "@/picture/visimisi_1.png";
import styles from "./page.module.css";

export default function AboutPage() {
  const cinematicUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <>
      <section className="pt-10 sm:pt-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="page-frame"
        >
          <motion.div
            variants={cinematicUp}
            className="relative flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-[32px] px-6 py-16 text-center sm:min-h-[480px] sm:px-10 sm:py-20 shadow-floating-banner"
          >
            <Image
              src={tentangKamiImage}
              alt="Latar belakang proyek konstruksi CV. Nisfi Sabar"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-slate-950/60"></div>

            <div className="relative z-10 flex w-full max-w-4xl flex-col items-center justify-center">
              <motion.div variants={cinematicUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md shadow-lg">
                <span className="h-2.5 w-2.5 rounded-full bg-[#84cc16]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-white">
                  Tentang Kami
                </span>
              </motion.div>

              <motion.h1 variants={cinematicUp} className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Kontraktor Profesional Untuk Bangunan{" "}
                <span className="bg-gradient-to-r from-[#84cc16] to-[#06b6d4] bg-clip-text font-extrabold text-transparent">
                  Impian Anda
                </span>
              </motion.h1>

              <motion.p variants={cinematicUp} className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-200 sm:text-base">
                Dari perencanaan presisi hingga eksekusi tanpa kompromi. Kami hadir untuk mengubah visi Anda menjadi ruang nyata yang kokoh, fungsional, dan estetis.
              </motion.p>

              <motion.div variants={cinematicUp} className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="https://wa.me/6281381853922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#84cc16] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:bg-[#65a30d] sm:w-auto"
                >
                  Konsultasi Gratis
                </a>
                <a
                  href="/portofolio"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white/20 sm:w-auto"
                >
                  Lihat Hasil Kerja
                </a>
              </motion.div>

              <motion.div variants={cinematicUp} className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-medium text-gray-300 sm:text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#84cc16]">✓</span> Gratis Survei & RAB
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#84cc16]">✓</span> Tenaga Ahli Profesional
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#84cc16]">✓</span> Tepat Waktu & Bergaransi
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className={styles.aboutSection}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="page-frame"
        >
          <div className={styles.aboutGrid}>
            <motion.div variants={cinematicUp} className={styles.logoWrap}>
              <div className={styles.logoBox}>
                <Image
                  src={logoNisfiSabar}
                  alt="Logo CV. Nisfi Sabar"
                  className={styles.logoImage}
                />
                <p className={styles.logoCaption}>Logo CV. Nisfi Sabar</p>
              </div>
            </motion.div>

            <div className={styles.aboutCopy}>
              <motion.p variants={cinematicUp} className={styles.aboutParagraph}>
                Kini, mewujudkan bangunan dan hunian impian yang nyaman bukan lagi sekadar angan. CV.
                Nisfi Sabar hadir sebagai mitra kontraktor dan spesialis perawatan bangunan terpercaya
                Anda. Bergerak di bidang konstruksi, renovasi, hingga tata ruang, kami selalu
                berkomitmen memberikan pelayanan terbaik kepada setiap klien. Didukung oleh tim tenaga
                kerja yang berpengalaman and profesional, setiap proyek yang kami tangani dikerjakan
                dengan presisi, menggunakan material berkualitas, and sesuai dengan standar keamanan.
              </motion.p>
              <motion.p variants={cinematicUp} className={styles.aboutParagraph}>
                Jangkauan layanan kami sangat komprehensif, dirancang sebagai solusi satu pintu
                (one-stop solution) untuk Anda. Layanan utama kami meliputi konstruksi bangunan dari
                nol, renovasi rumah, hingga pembuatan struktur rumah kaca aluminium yang modern. Untuk
                menyempurnakan estetika and fungsi ruangan, kami ahli dalam instalasi kitchen set,
                pemasangan partisi wallpaper, pengecatan detail, hingga penataan taman and landscape
                yang asri. Tidak berhenti di situ, kami juga memastikan bangunan Anda berfungsi optimal
                melalui layanan instalasi listrik and service AC oleh teknisi ahli.
              </motion.p>
              <motion.p variants={cinematicUp} className={styles.aboutParagraph}>
                Bagi kami, setiap detail sangat berarti. Dalam setiap tahap pekerjaan, kami akan selalu
                menyesuaikan perencanaan dengan anggaran and kebutuhan spesifik yang Anda miliki, tanpa
                mengorbankan kualitas. Berbagai hasil karya konstruksi, interior, and eksterior telah
                berhasil kami wujudkan. Kepuasan and kenyamanan Anda di dalam ruang yang kami bangun
                adalah sebuah kehormatan sekaligus motivasi bagi CV. Nisfi Sabar untuk terus memberikan
                hasil kerja yang rapi, kokoh, and tepat waktu.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className={styles.visionMissionSection}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={cinematicUp}
            className={`${styles.visionFloatingContainer} relative overflow-hidden rounded-[32px]`}
            style={{ backgroundImage: `url(${visiMisiBgImage.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className={styles.visionOverlay}></div>
            <div className={`${styles.visionContent} relative z-10 p-8 sm:p-16`}>
              <div className={styles.visionMissionGrid}>
                <motion.article variants={cinematicUp} className={styles.vmCard}>
                  <h2 className={`mb-4 text-2xl font-bold text-[#84cc16] ${styles.vmTitle}`}>VISI KAMI</h2>
                  <p className={`text-lg leading-relaxed text-white ${styles.vmBody}`}>
                    Menjadi mitra terpercaya and solusi utama dalam industri konstruksi, renovasi, and
                    perawatan tata ruang, yang menghadirkan kualitas kerja terbaik, estetika tinggi, and
                    kenyamanan maksimal untuk setiap hunian and bangunan.
                  </p>
                </motion.article>

                <motion.article variants={cinematicUp} className={styles.vmCard}>
                  <h2 className={`mb-4 mt-10 text-2xl font-bold text-[#84cc16] ${styles.vmTitle}`}>MISI KAMI</h2>
                  <ul className={`list-disc space-y-3 pl-5 text-lg leading-relaxed text-white ${styles.vmBody} ${styles.vmList}`}>
                    <li>
                      Memberikan layanan konstruksi and renovasi yang presisi, kokoh, and tepat waktu.
                    </li>
                    <li>
                      Menghadirkan solusi interior and eksterior yang inovatif, mulai dari instalasi
                      kitchen set, partisi, hingga desain landscape taman yang asri.
                    </li>
                    <li>
                      Menyediakan layanan teknis and pemeliharaan yang handal, termasuk instalasi listrik
                      and servis AC, guna memastikan bangunan berfungsi optimal.
                    </li>
                    <li>
                      Mengutamakan kepuasan klien melalui komunikasi yang transparan, pengerjaan yang rapi,
                      serta penggunaan material berkualitas di setiap proyek.
                    </li>
                  </ul>
                </motion.article>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
