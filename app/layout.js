import Link from "next/link";
import "./globals.css";
import AuthControls from "@/components/auth-controls";

export const metadata = {
  title: "CV. NISFI NASBAR",
  description: "Company profile website for CV. NISFI NASBAR.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav-wrap">
            <Link href="/#home" className="brand">
              <span className="brand-mark">NN</span>
              <span>
                <strong>CV. NISFI NASBAR</strong>
                <small>Construction & Interior Solutions</small>
              </span>
            </Link>

            <nav className="site-nav">
              <Link href="/#home">Home</Link>
              <Link href="/#about">About Us</Link>
              <Link href="/#services">Services</Link>
              <Link href="/#portfolio">Portfolio</Link>
              <Link href="/#advantages">Advantages</Link>
              <Link href="/#contact">Contact</Link>
            </nav>

            <AuthControls />
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="container footer-wrap">
            <p>© {new Date().getFullYear()} CV. NISFI NASBAR. All rights reserved.</p>
            <Link href="/#home">Back to top</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
