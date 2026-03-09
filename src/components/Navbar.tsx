import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import logoColor from "@/assets/logo-color.png";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-card"
        : "bg-transparent"
        }`}
    >
      <div className="container relative flex items-center justify-between h-16 md:h-20">
        {/* Logo (Left) */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="z-20"
        >
          <img
            src={isScrolled ? logoColor : logoWhite}
            alt="La Ferme des Collines"
            className="h-8 min-[390px]:h-10 md:h-12 w-auto transition-all duration-300"
          />
        </button>

        {/* Title (Centered on mobile, next to logo on desktop) */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`absolute left-1/2 -translate-x-1/2 z-10 transition-all duration-300 
            md:static md:translate-x-0 md:ml-4`}
        >
          <span
            className={`font-heading text-[12px] min-[330px]:text-[13px] min-[400px]:text-sm sm:text-base md:text-xl font-bold tracking-wider sm:tracking-widest whitespace-nowrap transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
          >
            LA FERME DES COLLINES
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollTo("produits")}
            className={`font-body text-base font-semibold px-4 py-2 rounded-full transition-all duration-300 ${isScrolled
              ? "text-foreground hover:bg-primary/5 hover:text-primary"
              : "text-primary-foreground hover:bg-white hover:text-primary"
              }`}
          >
            Nos produits
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className={`font-body text-base font-semibold px-4 py-2 rounded-full transition-all duration-300 ${isScrolled
              ? "text-foreground hover:bg-primary/5 hover:text-primary"
              : "text-primary-foreground hover:bg-white hover:text-primary"
              }`}
          >
            Nous rejoindre
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`md:hidden absolute right-4 transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          aria-label="Menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md ${isMobileOpen ? "max-h-40" : "max-h-0"
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
