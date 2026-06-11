import { ArrowUpRight, Clock3, MapPin, MessageCircleMore, PhoneCall } from "lucide-react";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { company } from "@/lib/site-data";

const contactCards = [
  { title: "Alamat Lengkap", text: company.address, icon: MapPin },
  { title: "Nomor WhatsApp", text: company.whatsappDisplay, icon: PhoneCall },
  { title: "Jam Operasional", text: company.hours.join(" | "), icon: Clock3 },
];

const googleMapsEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d2803.3326515375115!2d106.73918634567067!3d-6.45674300574145!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2e69e9b8b8212ef7%3A0x14a471c3c711d1f!2sGPVR%2B96J%20Islamic%20Grand%20Village%2C%20Jl.%20Raya%20Kalisuren%20No.90%2C%20Kalisuren%2C%20Kec.%20Tajur%20Halang%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016320!3m2!1d-6.4570378999999996!2d106.7394308!5e0!3m2!1sid!2sid!4v1781076928851!5m2!1sid!2sid";

const googleMapsOpenLink =
  "https://www.google.com/maps?q=GPVR%2B96J%20Islamic%20Grand%20Village%2C%20Jl.%20Raya%20Kalisuren%20No.90%2C%20Kalisuren%2C%20Kec.%20Tajur%20Halang%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016320";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Hubungi kami dengan cara yang cepat, jelas, dan langsung terhubung."
        description="Silahkan hubungi kami untuk konsultasi kebutuhan proyek, survey lokasi, atau informasi lebih lanjut mengenai layanan konstruksi dan renovasi."
        imageSrc="/picture/kontak_kami.jpg"
        imageAlt="Hero banner kontak CV. Daraka Wiguna"
      />

      <section className="construction-section py-16 sm:py-20">
        <div className="page-frame">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-5">
              <Reveal className="dark-panel rounded-[32px] px-7 py-8 text-white sm:px-10">
                <p className="section-label">
                  <span className="lime-dot"></span>
                  HUBUNGI KAMI
                </p>
                <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
                  Diskusikan kebutuhan proyek Anda bersama kami.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                  Kami dapat membantu memberikan informasi awal terkait pekerjaan konstruksi, renovasi, interior, greenhouse, aluminium, dan kebutuhan bangunan lainnya.
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

              {contactCards.map((item, index) => {
                const Icon = item.icon;
                const isAddress = item.title === "Alamat Lengkap";

                return (
                  <Reveal
                    key={item.title}
                    delay={index * 0.05}
                    className="soft-panel rounded-[28px] border border-[#E6E8F0] bg-white p-6 shadow-[0_18px_40px_rgba(13,27,61,0.08)]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="brand-icon-chip inline-flex h-14 w-14 items-center justify-center rounded-2xl">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-[#0D1B3D]">{item.title}</h3>
                        <p className="text-sm leading-7 text-slate-600">{item.text}</p>
                        {isAddress && (
                          <a
                            href={googleMapsOpenLink}
                            target="_blank"
                            rel="noreferrer"
                            className="brand-outline-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition"
                          >
                            Buka di Google Maps
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal className="soft-panel overflow-hidden rounded-[32px] border border-[#E6E8F0] bg-white shadow-[0_22px_46px_rgba(13,27,61,0.1)]">
              <div className="border-b border-[#E6E8F0] bg-[linear-gradient(135deg,rgba(21,70,216,0.08),rgba(122,63,242,0.08))] px-6 py-5 sm:px-7">
                <p className="surface-label">
                  <span className="lime-dot"></span>
                  LOKASI KAMI
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-[#0D1B3D]">
                  Temukan lokasi CV. Daraka Wiguna
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Lihat titik lokasi perusahaan secara langsung melalui Google Maps untuk memudahkan survey, kunjungan, dan koordinasi proyek.
                </p>
              </div>

              <div className="overflow-hidden">
                <iframe
                  src={googleMapsEmbedSrc}
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Daraka Wiguna di Google Maps"
                  className="h-[260px] w-full sm:h-[300px] lg:h-[320px]"
                ></iframe>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
