import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo placeholder */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading text-lg font-bold">F</span>
          </div>
          <span
            className={`font-heading text-lg font-semibold transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Fermes Les Collines
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("produits")}
            className={`font-body text-sm font-medium transition-colors hover:text-secondary ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Nos produits
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className={`font-body text-sm font-medium transition-colors hover:text-secondary ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Nous rejoindre
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`md:hidden transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          aria-label="Menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md ${
          isMobileOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="container flex flex-col gap-4 py-4">
          <button
            onClick={() => scrollTo("produits")}
            className="font-body text-sm font-medium text-foreground text-left hover:text-primary transition-colors"
          >
            Nos produits
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="font-body text-sm font-medium text-foreground text-left hover:text-primary transition-colors"
          >
            Nous rejoindre
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
