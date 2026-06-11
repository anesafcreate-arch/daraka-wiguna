import * as Icons from "lucide-react";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Layanan"
        title="Layanan Konstruksi, Renovasi, Eksterior dan Interior"
        description="Kami melayani berbagai kebutuhan konstruksi, renovasi, interior, dan pekerjaan bangunan lainnya untuk rumah tinggal, bangunan usaha, maupun fasilitas lainnya."
        imageSrc="/picture/hero-baner-layanan.jpg"
        imageAlt="Hero banner layanan CV. Daraka Wiguna"
      />

      <section className="construction-section py-16 sm:py-20">
        <div className="page-frame">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = Icons[service.icon] || Icons.BriefcaseBusiness;

              return (
                <Reveal key={service.slug} delay={(index % 3) * 0.05}>
                  <article className="soft-panel brand-grid-card group h-full rounded-[30px] p-6 hover:-translate-y-1">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-52 w-full rounded-[24px] object-cover"
                    />
                    <div className="mt-5 flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-xl font-semibold text-slate-950">{service.title}</h2>
                      </div>
                      <span className="brand-icon-chip inline-flex h-12 w-12 items-center justify-center rounded-2xl backdrop-blur transition group-hover:border-[#6D4CFF] group-hover:bg-[linear-gradient(135deg,#243BDB,#6D4CFF)] group-hover:text-white">
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
