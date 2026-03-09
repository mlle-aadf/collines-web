import { Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-primary py-16 md:py-20">
      <div className="container text-center">
        {/* Logo placeholder */}
        <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-primary-foreground font-heading text-2xl font-bold">F</span>
        </div>

        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary-foreground mb-8">
          Nous rejoindre
        </h2>

        <div className="flex flex-col items-center gap-4 font-body text-sm text-primary-foreground/80">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>2485 Rang Gauvin Nord QC, Canada J9X 5L0</span>
          </div>
          <a
            href="mailto:info@fermeslescollines.ca"
            className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
          >
            <Mail size={16} />
            <span>info@fermeslescollines.ca</span>
          </a>
          <a
            href="tel:+18192777446"
            className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
          >
            <Phone size={16} />
            <span>+1 (819) 277-7446</span>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="font-body text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Fermes Les Collines. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
