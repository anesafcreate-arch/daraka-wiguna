import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title="Visi yang jelas, misi yang praktis, dan pendekatan kerja yang terasa meyakinkan."
        description="Halaman ini memfokuskan siapa kami, bagaimana kami melihat kualitas proyek, dan bagaimana kami menjaga pengalaman klien tetap nyaman dari awal hingga akhir."
      />

      <section className="py-16 sm:py-20">
        <div className="page-frame">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Reveal className="soft-panel rounded-[30px] p-7 sm:p-10">
              <p className="surface-label">
                <span className="lime-dot"></span>
                Visi
              </p>
              <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Menjadi mitra konstruksi dan interior yang dipercaya karena kualitas dan ketepatan.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Kami ingin setiap proyek menghadirkan kesan profesional, minim kompromi pada detail,
                dan menghasilkan ruang yang lebih bernilai bagi pemiliknya.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="overflow-hidden rounded-[30px]">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80"
                alt="Architectural presentation"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </Reveal>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Reveal className="overflow-hidden rounded-[30px]">
              <img
                src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80"
                alt="Interior materials and design"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </Reveal>

            <Reveal delay={0.08} className="soft-panel rounded-[30px] p-7 sm:p-10">
              <p className="surface-label">
                <span className="lime-dot"></span>
                Misi
              </p>
              <div className="mt-5 grid gap-4">
                {[
                  "Menerjemahkan kebutuhan klien menjadi solusi bangunan dan interior yang rapi dan kuat.",
                  "Menjaga komunikasi tetap jelas agar keputusan proyek lebih tenang dan efisien.",
                  "Menghadirkan hasil kerja yang terasa modern, premium, dan proporsional dengan anggaran.",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-7 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
