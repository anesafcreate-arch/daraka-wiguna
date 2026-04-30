import * as Icons from "lucide-react";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Layanan"
        title="Katalog layanan konstruksi dan interior yang lengkap, modern, dan siap dieksekusi."
        description="Setiap layanan dirancang untuk menjawab kebutuhan hunian dan properti secara profesional, dari struktur utama hingga detail finishing yang memperkuat kesan akhir."
      />

      <section className="py-16 sm:py-20">
        <div className="page-frame">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = Icons[service.icon] || Icons.BriefcaseBusiness;

              return (
                <Reveal key={service.slug} delay={(index % 3) * 0.05}>
                  <article className="soft-panel group h-full rounded-[30px] p-6 transition hover:-translate-y-1 hover:shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-52 w-full rounded-[24px] object-cover"
                    />
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-xl font-semibold text-slate-950">{service.title}</h2>
                      </div>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-100 text-lime-700 transition group-hover:bg-lime-600 group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
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
