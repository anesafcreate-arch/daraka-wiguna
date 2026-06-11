import Reveal from "@/components/reveal";

export default function PageHero({ eyebrow, title, description, imageSrc, imageAlt }) {
  return (
    <section className="pt-10 sm:pt-14">
      <div className="page-frame">
        <Reveal className="site-grid dark-panel relative overflow-hidden rounded-[32px] shadow-[0_28px_80px_rgba(59,45,226,0.18)]">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={imageAlt || title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,11,46,0.82)_0%,rgba(11,18,50,0.66)_45%,rgba(38,18,94,0.48)_100%)]" />

          <div className="relative z-10 flex min-h-[360px] flex-col items-center justify-center px-6 py-12 text-center text-white sm:min-h-[420px] sm:px-10 sm:py-16">
            <p className="section-label">
              <span className="lime-dot"></span>
              {eyebrow}
            </p>
            <h1 className="font-display mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/85 sm:text-lg">
              {description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
