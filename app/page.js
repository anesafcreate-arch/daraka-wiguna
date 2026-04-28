import Link from "next/link";

const services = [
  "Building Construction",
  "Glass & Aluminum Houses",
  "Wallpaper Partitions",
  "Painting",
  "Kitchen Sets",
  "Electrical Installation",
  "Air Conditioning",
  "Gardening",
];

const advantages = [
  {
    title: "Experienced Field Team",
    description: "Handled by practical workers with real project experience from start to finish.",
  },
  {
    title: "Transparent Work Stages",
    description: "Clear scope, material planning, and ongoing updates during execution.",
  },
  {
    title: "Quality & Durability Focus",
    description: "Neat workmanship and durable material recommendations for long-term value.",
  },
  {
    title: "Fast Response Consultation",
    description: "Quick coordination through WhatsApp for survey, quotation, and scheduling.",
  },
];

const portfolioItems = [
  { src: "/portfolio/minimalis.jpg", title: "Residential Build & Facade Work" },
  { src: "/portfolio/portfolio-2.jpg", title: "Modern Glass & Aluminum Installation" },
  { src: "/portfolio/portfolio-3.jpg", title: "Interior Finishing and Kitchen Set" },
  { src: "/portfolio/portfolio-4.jpg", title: "Painting and Wallpaper Partition" },
  { src: "/portfolio/portfolio-5.jpg", title: "Electrical and AC Setup" },
  { src: "/portfolio/portfolio-6.jpg", title: "Landscape and Gardening Area" },
];

export default function HomePage() {
  return (
    <main>
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Trusted Partner In Bogor Regency</p>
            <h1>Professional Construction & Property Finishing Services</h1>
            <p>
              CV. NISFI NASBAR delivers practical, modern, and well-executed solutions for homes and
              commercial properties, from structural work to final detail finishing.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/#contact">
                Free Consultation
              </Link>
              <Link className="btn btn-light" href="/#services">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hero-highlight">
            <article>
              <h3>About Us</h3>
              <p>Local contractor focused on quality work, clear process, and dependable timelines.</p>
            </article>
            <article>
              <h3>Our Services</h3>
              <p>Comprehensive building, interior, electrical, AC, and gardening services in one team.</p>
            </article>
            <article>
              <h3>Contact</h3>
              <p>Fast WhatsApp response for surveys, cost estimates, and project scheduling.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">About Us</p>
            <h2>CV. NISFI NASBAR</h2>
            <p>
              CV. NISFI NASBAR is a construction and property service company based in Bojong Gede,
              Bogor Regency, West Java. We support new builds, upgrades, and maintenance projects with
              efficient workflows and field-tested craftsmanship.
            </p>
            <p>
              Our team combines technical execution with design awareness, so your project is not only
              functional but also visually strong, modern, and aligned with your budget goals.
            </p>
          </div>

          <div className="feature-card">
            <h3>Operating Hours</h3>
            <ul>
              <li>
                <strong>Monday - Saturday:</strong> 8:00 AM - 5:00 PM WIB
              </li>
              <li>
                <strong>Sunday:</strong> By appointment
              </li>
            </ul>
            <h3>Office Address</h3>
            <p>
              Kampung Pos Muara, Bojong Gede Village No. 36, Bojong Gede Subdistrict, Bojong Gede
              Regency, Bogor Regency, West Java Province.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section alt">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h2>Integrated Service Lines</h2>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service}>{service}</article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section">
        <div className="container">
          <p className="eyebrow">Portfolio</p>
          <h2>Recent Work Highlights</h2>
          <p className="section-note">Project gallery references loaded from your `Portofolio` folder.</p>
          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.title} />
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="section alt">
        <div className="container">
          <p className="eyebrow">Advantages</p>
          <h2>Why Property Owners Choose Us</h2>
          <div className="adv-grid">
            {advantages.map((adv) => (
              <article key={adv.title}>
                <h3>{adv.title}</h3>
                <p>{adv.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container split">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Discuss Your Project With Our Team</h2>
            <p>
              Send your needs, floor area, and expected timeline. We will help with practical
              recommendations and a clear implementation plan.
            </p>
            <a className="btn btn-primary" href="https://wa.me/6281381853922" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </a>
          </div>

          <div className="feature-card contact-card">
            <h3>WhatsApp</h3>
            <p>
              <a href="https://wa.me/6281381853922" target="_blank" rel="noreferrer">
                0813-8185-3922
              </a>
            </p>
            <h3>Support Scope</h3>
            <p>
              Consultation, site checks, work estimation, implementation planning, and technical
              execution support.
            </p>
          </div>
        </div>
      </section>

      <a
        className="whatsapp-float"
        href="https://wa.me/6281381853922"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.05 4.01c-6.62 0-12 5.37-12 12 0 2.12.56 4.2 1.62 6.03L4 28l6.14-1.61a11.95 11.95 0 0 0 5.9 1.55h.01c6.62 0 12-5.37 12-12s-5.38-11.93-12-11.93Zm0 21.84h-.01a9.92 9.92 0 0 1-5.04-1.37l-.36-.21-3.64.95.97-3.54-.24-.36a9.87 9.87 0 0 1-1.52-5.3c0-5.46 4.44-9.91 9.9-9.91 2.64 0 5.11 1.03 6.98 2.91a9.82 9.82 0 0 1 2.9 6.99c0 5.46-4.45 9.9-9.94 9.9Zm5.43-7.44c-.3-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.68.15-.2.3-.78.99-.96 1.19-.18.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.08-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.65-.94-2.27-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.04-1.06 2.54 0 1.5 1.09 2.95 1.24 3.15.15.2 2.14 3.27 5.18 4.58.73.32 1.3.5 1.74.64.73.23 1.4.2 1.93.12.59-.09 1.8-.74 2.06-1.46.25-.72.25-1.33.18-1.45-.07-.12-.27-.2-.57-.35Z" />
        </svg>
        <span>WhatsApp</span>
      </a>
    </main>
  );
}
