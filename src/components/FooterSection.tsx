import { useProcessedLandingPageData } from "@/hooks/useLandingPageData";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import { openPrivacyPolicy } from "./CookieBanner";

// Map contact method IDs to icons
const iconMap = {
  address: MapPin,
  email: Mail,
  phone: Phone,
  facebook: Facebook,
};

const FooterSection = () => {
  const { data: landingPageData, isLoading, error } = useProcessedLandingPageData();

  if (isLoading || !landingPageData) {
    return (
      <footer id="contact" className="bg-muted py-10 md:py-14">
        <div className="container px-4">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-center">
            <div className="flex justify-center md:justify-end">
              <div className="h-32 md:h-44 w-32 bg-gray-200 animate-pulse rounded"></div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="h-8 bg-gray-300 animate-pulse rounded w-64"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-20 bg-gray-200 animate-pulse rounded-xl"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  if (error) {
    console.error('Error loading footer data:', error);
    return (
      <footer id="contact" className="bg-muted py-10 md:py-14">
        <div className="container px-4">
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-center">
            <div className="flex justify-center md:justify-end">
              <span className="text-2xl font-bold">FERME DES COLLINES</span>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center md:text-left">
                Pour nous rejoindre
              </h2>
              <div className="text-center text-muted-foreground">
                Error loading contact information.
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  const footer = landingPageData.footer;

  return (
    <footer id="contact" className="bg-muted py-10 md:py-14">
      <div className="container px-4">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-center">
          <div className="flex justify-center md:justify-end">
            {footer.logo && (
              <img
                src={footer.logo}
                alt="La Ferme des Collines"
                className="h-32 md:h-44 w-auto animate-fade-in"
              />
            )}
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center md:text-left">
              {footer.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body text-muted-foreground">
              {footer.contactMethods.map((method) => {
                const Icon = iconMap[method.id as keyof typeof iconMap] || MapPin;
                return (
                  <a
                    key={method._key || method.id}
                    href={method.href}
                    target={method.href?.startsWith("http") ? "_blank" : undefined}
                    rel={method.href?.startsWith("http") ? "noopener noreferrer" : undefined}
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
            {footer.copyright}
          </p>
          <div className="flex gap-6">
            <button
              onClick={openPrivacyPolicy}
              className="font-body text-[10px] text-muted-foreground/60 tracking-widest uppercase hover:text-primary transition-colors"
            >
              {footer.policyLinkText}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
