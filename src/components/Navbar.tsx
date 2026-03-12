import { useState, useEffect } from "react";
import { Menu, X, Facebook } from "lucide-react";
import { nav } from "@/assets/data";

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
        {/* Left side group for Desktop / Absolute container for Mobile */}
        <div className="flex items-center">
          {/* Logo (Stays left) */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="z-20 p-1"
          >
            <img
              src={isScrolled ? nav.logoColor : nav.logoWhite}
              alt={nav.logoAlt}
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
              {nav.farmName}
            </span>
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          <div className="flex items-center gap-1 lg:gap-3">
            {nav.links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`font-body text-sm lg:text-base font-semibold px-3 py-2 rounded-full transition-all duration-300 ${isScrolled
                  ? "text-foreground hover:bg-primary/5 hover:text-primary"
                  : "text-primary-foreground hover:bg-white hover:text-primary"
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          
          <div className={`w-px h-5 mx-1 hidden md:block transition-colors duration-300 ${isScrolled ? "bg-border" : "bg-white/20"}`}></div>
          
          <a
            href={nav.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2 rounded-full transition-all duration-300 ${isScrolled
              ? "text-foreground hover:bg-primary/5 hover:text-primary"
              : "text-primary-foreground hover:bg-white hover:text-primary"
              }`}
            aria-label={nav.facebook.ariaLabel}
          >
            <Facebook size={20} />
          </a>
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
        className={`md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md ${isMobileOpen ? "max-h-[300px]" : "max-h-0"
          }`}
      >
        <div className="container flex flex-col gap-4 py-4">
          {nav.links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-body text-sm font-medium text-foreground text-left hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="h-px bg-border/60 w-full my-2"></div>
          <a
            href={nav.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium text-primary text-left flex items-center gap-2 hover:text-secondary transition-colors pb-2"
          >
            <Facebook size={18} />
            {nav.facebook.mobileLabel}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
