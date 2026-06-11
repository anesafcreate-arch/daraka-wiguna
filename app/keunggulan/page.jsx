import { Award, BadgeCheck, Boxes, Clock3, MessagesSquare, ShieldCheck } from "lucide-react";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { advantages } from "@/lib/site-data";

const icons = [Award, Clock3, Boxes, ShieldCheck, MessagesSquare, BadgeCheck];

export default function AdvantagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Keunggulan"
        title="Alasan Client Mempercayakan Proyek Kepada Kami"
        description="Kami berusaha memberikan pelayanan yang baik melalui komunikasi yang jelas, pengerjaan yang rapi, serta tanggung jawab dalam setiap proyek yang kami kerjakan."
        imageSrc="/picture/keunggulan_kami.jpg"
        imageAlt="Hero banner keunggulan CV. Daraka Wiguna"
      />

      <section className="construction-section py-16 sm:py-20">
        <div className="page-frame">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {advantages.map((item, index) => {
              const Icon = icons[index] || Award;

              return (
                <Reveal key={item.title} delay={(index % 3) * 0.05}>
                  <article className="soft-panel brand-grid-card group h-full rounded-[30px] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(7,17,31,0.12)]">
                    <span className="brand-icon-chip inline-flex h-14 w-14 items-center justify-center rounded-2xl">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-6 text-2xl font-semibold text-slate-950">{item.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1} className="mt-8 soft-panel rounded-[32px] p-8 sm:p-10">
            <p className="surface-label">
              <span className="lime-dot"></span>
              Ringkasan USP
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {[
                "Tim berpengalaman dengan komunikasi yang baik selama proyek berlangsung.",
                "Pengerjaan dilakukan sesuai tahapan dan jadwal yang telah disepakati.",
                "Material dan metode pengerjaan disesuaikan dengan kebutuhan proyek.",
              ].map((item) => (
                <div key={item} className="brand-info-tile rounded-3xl px-5 py-5 text-sm leading-7 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
