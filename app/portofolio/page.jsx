import PageHero from "@/components/page-hero";
import PortfolioGallery from "@/components/portfolio-gallery";

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portofolio"
        title="Dokumentasi Beberapa Proyek Yang Telah Kami Kerjakan"
        description="Berikut beberapa dokumentasi pekerjaan konstruksi, renovasi, interior, dan layanan lainnya yang telah kami kerjakan sebagai referensi bagi client."
        imageSrc="/picture/portofolio_hero.jpg"
        imageAlt="Hero banner portofolio CV. Daraka Wiguna"
      />

      <section className="py-16 sm:py-20">
        <div className="page-frame">
          <PortfolioGallery />
        </div>
      </section>
    </>
  );
}
