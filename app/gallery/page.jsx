import PageHero from "@/components/page-hero";
import GalleryGrid from "@/components/gallery-grid";

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Dokumentasi Visual Hasil Kinerja Kami"
        description="Kumpulan foto dokumentasi pekerjaan konstruksi, renovasi, interior, dan berbagai layanan yang telah kami kerjakan untuk client."
        imageSrc="/gallery/gallery-07.jpeg"
        imageAlt="Hero banner gallery CV. Daraka Wiguna"
      />

      <section className="construction-section py-16 sm:py-20">
        <div className="page-frame">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
