import logoFull from "@/assets/logo-full.png";
import { Mail, MapPin, Phone } from "lucide-react";
import { openPrivacyPolicy } from "./CookieBanner";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-muted py-10 md:py-14">
      <div className="container px-4">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-center">
          <div className="flex justify-center md:justify-end">
            <img
              src={logoFull}
              alt="La Ferme des Collines"
              className="h-32 md:h-44 w-auto animate-fade-in"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center md:text-left">
              Pour nous rejoindre
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-body text-muted-foreground">
              <a
                href="https://maps.app.goo.gl/FDmBtcfHhw9VXSdR8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 rounded-xl bg-white/60 hover:bg-white shadow-sm border border-border transition-all duration-300 hover:shadow-md group"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <span className="block font-bold text-foreground text-sm uppercase tracking-wider mb-1">Adresse</span>
                  <span className="text-xs leading-relaxed">2485 Rang Gauvin Nord QC, Canada J9X 5L0</span>
                </div>
              </a>

              <a
                href="mailto:info@fermeslescollines.ca"
                className="flex items-start gap-3 p-4 rounded-xl bg-white/60 hover:bg-white shadow-sm border border-border transition-all duration-300 hover:shadow-md group"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <span className="block font-bold text-foreground text-sm uppercase tracking-wider mb-1">Courriel</span>
                  <span className="text-xs">info@fermesdescollines.ca</span>
                </div>
              </a>

              <a
                href="tel:+18192777446"
                className="flex items-start gap-3 p-4 rounded-xl bg-white/60 hover:bg-white shadow-sm border border-border transition-all duration-300 hover:shadow-md group"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <span className="block font-bold text-foreground text-sm uppercase tracking-wider mb-1">Téléphone</span>
                  <span className="text-xs">+1 (819) 277-7446</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] text-center text-muted-foreground/60 tracking-widest uppercase">
            © {new Date().getFullYear()} LA FERME DES COLLINES. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <button
              onClick={openPrivacyPolicy}
              className="font-body text-[10px] text-muted-foreground/60 tracking-widest uppercase hover:text-primary transition-colors"
            >
              Politique de confidentialité
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
