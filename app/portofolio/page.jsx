import PageHero from "@/components/page-hero";
import PortfolioGallery from "@/components/portfolio-gallery";

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portofolio"
        title="Galeri proyek dengan citra arsitektur dan interior yang terasa bersih, modern, dan bernilai."
        description="Halaman ini memakai placeholder visual berkualitas tinggi yang mewakili 10 kategori layanan agar presentasi portofolio tetap konsisten dan profesional."
      />

      <section className="py-16 sm:py-20">
        <div className="page-frame">
          <PortfolioGallery />
        </div>
      </section>
    </>
  );
}
