"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logoNisfiSabar from "@/picture/logo-nisfi-sabar.png";
import tentangKamiImage from "@/picture/tentang-kami.png";
import visiMisiBgImage from "@/picture/visimisi_1.png";
import styles from "./page.module.css";

export default function AboutPage() {
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
          initial={false}
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

              <motion.h1 variants={cinematicUp} className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-5xl">
              Mitra Konstruksi dan Renovasi Untuk Berbagai{" "}
                <span className="bg-gradient-to-r from-[#84cc16] to-[#06b6d4] bg-clip-text font-extrabold text-transparent">
                Kebutuhan Bangunan
                </span>
              </motion.h1>

              <motion.p variants={cinematicUp} className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-200 sm:text-base">
              Kami melayani pekerjaan konstruksi, renovasi, dan penataan ruang dengan proses kerja yang jelas, pengerjaan yang rapi, serta menyesuaikan kebutuhan setiap client.
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
                  <span className="text-[#84cc16]">✓</span> Survey & Konsultasi Awal
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#84cc16]">✓</span> Tim Berpengalaman
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#84cc16]">✓</span> Pengerjaan Sesuai Kesepakatan
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className={styles.aboutSection}>
        <motion.div
          initial={false}
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
              CV. NISFI SABAR merupakan perusahaan yang bergerak di bidang konstruksi, renovasi, 
              greenhouse, aluminium, interior, serta berbagai pekerjaan bangunan lainnya. 
              Dengan pengalaman dalam menangani berbagai kebutuhan proyek, kami berkomitmen untuk memberikan layanan yang profesional, 
              mulai dari tahap perencanaan hingga proses pengerjaan di lapangan.
              </motion.p>
              <motion.p variants={cinematicUp} className={styles.aboutParagraph}>
              Kami melayani pembangunan maupun renovasi untuk rumah tinggal, bangunan komersial, 
              fasilitas usaha, serta berbagai kebutuhan konstruksi lainnya. 
              Setiap pekerjaan kami kerjakan dengan memperhatikan kualitas hasil, ketepatan pelaksanaan, 
              dan komunikasi yang baik agar proyek dapat berjalan sesuai harapan dan kebutuhan client.
              </motion.p>
              <motion.p variants={cinematicUp} className={styles.aboutParagraph}>
              Didukung oleh tenaga kerja yang berpengalaman dan memiliki pemahaman di bidangnya masing-masing,
              kami berupaya memberikan hasil pekerjaan yang rapi, fungsional, dan sesuai dengan kondisi lapangan. 
              Bagi kami, setiap proyek memiliki karakteristik yang berbeda, sehingga pendekatan yang kami lakukan selalu disesuaikan dengan kebutuhan, 
              anggaran, dan tujuan yang ingin dicapai oleh client. Melalui komitmen terhadap kualitas pekerjaan dan pelayanan yang baik, 
              CV. NISFI SABAR terus berupaya menjadi mitra yang dapat dipercaya dalam berbagai kebutuhan konstruksi dan renovasi, 
              aik untuk skala kecil maupun proyek yang lebih kompleks.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className={styles.visionMissionSection}>
        <motion.div
          initial={false}
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
                  Menjadi perusahaan konstruksi yang dapat dipercaya melalui kualitas pekerjaan, 
                  pelayanan yang baik, dan hubungan kerja yang profesional dengan setiap client.
                  </p>
                </motion.article>

                <motion.article variants={cinematicUp} className={styles.vmCard}>
                  <h2 className={`mb-4 mt-10 text-2xl font-bold text-[#84cc16] ${styles.vmTitle}`}>MISI KAMI</h2>
                  <ul className={`list-disc space-y-3 pl-5 text-lg leading-relaxed text-white ${styles.vmBody} ${styles.vmList}`}>
                    <li>
                    Melaksanakan pekerjaan konstruksi dan renovasi sesuai kebutuhan client dan kesepakatan proyek.
                    </li>
                    <li>
                    Menyediakan layanan interior, eksterior, dan penataan ruang yang fungsional serta nyaman digunakan.
                    </li>
                    <li>
                    Memberikan dukungan teknis dan pemeliharaan bangunan sesuai kebutuhan client.
                    </li>
                    <li>
                    Menjaga komunikasi yang baik, kualitas pengerjaan, dan tanggung jawab dalam setiap proyek yang dikerjakan.
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
