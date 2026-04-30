import Reveal from "@/components/reveal";

export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="pt-10 sm:pt-14">
      <div className="page-frame">
        <Reveal className="dark-panel site-grid overflow-hidden rounded-[32px] px-6 py-12 text-white sm:px-10 sm:py-16">
          <p className="section-label">
            <span className="lime-dot"></span>
            {eyebrow}
          </p>
          <h1 className="font-display mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
