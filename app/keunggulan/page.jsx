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
        title="Nilai pembeda yang membuat pelanggan lebih yakin memilih kami."
        description="Bagian ini sengaja dibuat sebagai halaman tersendiri agar USP perusahaan tampil kuat tanpa membuat homepage terlalu padat."
      />

      <section className="py-16 sm:py-20">
        <div className="page-frame">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {advantages.map((item, index) => {
              const Icon = icons[index] || Award;

              return (
                <Reveal key={item.title} delay={(index % 3) * 0.05}>
                  <article className="soft-panel h-full rounded-[30px] p-7">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 text-lime-700">
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
                "Tim profesional yang menjaga komunikasi dan detail kerja.",
                "Pengiriman hasil sesuai timeline yang lebih terukur.",
                "Pemilihan material dan finishing yang mengangkat kualitas visual proyek.",
              ].map((item) => (
                <div key={item} className="rounded-3xl bg-slate-50 px-5 py-5 text-sm leading-7 text-slate-700">
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
