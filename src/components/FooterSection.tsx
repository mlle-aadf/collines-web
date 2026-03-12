import logoFull from "@/assets/logo-full.png";
import { Mail, MapPin, Phone, Facebook } from "lucide-react";
import { openPrivacyPolicy } from "./CookieBanner";

const footerData = {
  title: "Pour nous rejoindre",
  copyright: `© ${new Date().getFullYear()} LA FERME DES COLLINES. Tous droits réservés.`,
  policyLinkText: "Politique de confidentialité",
  contactMethods: [
    {
      id: "address",
      icon: MapPin,
      label: "Adresse",
      value: "2485 Rang Gauvin Nord QC, Canada J9X 5L0",
      href: "https://maps.app.goo.gl/FDmBtcfHhw9VXSdR8",
    },
    {
      id: "email",
      icon: Mail,
      label: "Courriel",
      value: "info@fermesdescollines.ca",
      href: "mailto:info@fermeslescollines.ca",
    },
    {
      id: "phone",
      icon: Phone,
      label: "Téléphone",
      value: "+1 (819) 277-7446",
      href: "tel:+18192777446",
    },
    {
      id: "facebook",
      icon: Facebook,
      label: "Facebook",
      value: "Rejoignez la communauté",
      href: "https://www.facebook.com/people/Ferme-des-collines/100069650700211/?sk=about",
    },
  ],
};

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
              {footerData.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body text-muted-foreground">
              {footerData.contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.id}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/60 hover:bg-white shadow-sm border border-border transition-all duration-300 hover:shadow-md group"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <span className="block font-bold text-foreground text-sm uppercase tracking-wider mb-1">
                        {method.label}
                      </span>
                      <span className="text-xs leading-relaxed">{method.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] text-center text-muted-foreground/60 tracking-widest uppercase">
            {footerData.copyright}
          </p>
          <div className="flex gap-6">
            <button
              onClick={openPrivacyPolicy}
              className="font-body text-[10px] text-muted-foreground/60 tracking-widest uppercase hover:text-primary transition-colors"
            >
              {footerData.policyLinkText}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
