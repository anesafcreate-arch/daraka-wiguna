import { Clock3, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { company } from "@/lib/site-data";

const contactCards = [
  { title: "Alamat Lengkap", text: company.address, icon: MapPin },
  { title: "Nomor WhatsApp", text: company.whatsappDisplay, icon: PhoneCall },
  { title: "Jam Operasional", text: company.hours.join(" | "), icon: Clock3 },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Hubungi kami dengan cara yang cepat, jelas, dan langsung terhubung."
        description="Halaman kontak dibuat terpisah agar informasi perusahaan tetap lengkap tanpa membebani homepage. WhatsApp juga terhubung langsung lewat tombol mengambang di seluruh situs."
      />

      <section className="py-16 sm:py-20">
        <div className="page-frame">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="dark-panel rounded-[32px] px-7 py-8 text-white sm:px-10">
              <p className="section-label">
                <span className="lime-dot"></span>
                Konsultasi Langsung
              </p>
              <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
                Ceritakan kebutuhan proyek Anda dan mulai dari percakapan yang sederhana.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Kami siap membantu kebutuhan konstruksi, renovasi, utilitas, interior, dan landscape.
                Hubungi kami untuk diskusi awal, survey, dan estimasi proyek.
              </p>
              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-lime-700"
              >
                <MessageCircleMore className="h-4 w-4" />
                Mulai Chat WhatsApp
              </a>
            </Reveal>

            <div className="grid gap-5">
              {contactCards.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.05} className="soft-panel rounded-[28px] p-6">
                    <div className="flex items-start gap-4">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-100 text-lime-700">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                        <p className="text-sm leading-7 text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
