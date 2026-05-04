import PageHero from "@/components/page-hero";
import PortfolioGallery from "@/components/portfolio-gallery";

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portofolio"
        title="Galeri proyek dengan citra arsitektur dan interior yang terasa bersih, modern, dan bernilai."
        description="Jelajahi deretan ruang dan bangunan yang telah berhasil kami wujudkan. Dari struktur konstruksi yang kokoh hingga detail interior yang presisi, setiap portofolio ini adalah bukti nyata komitmen kami terhadap kualitas kerja."
        imageSrc="/picture/portofolio_hero.jpg"
        imageAlt="Hero banner portofolio CV Nisfi Sabar"
      />

      <section className="py-16 sm:py-20">
        <div className="page-frame">
          <PortfolioGallery />
        </div>
      </section>
    </>
  );
}
