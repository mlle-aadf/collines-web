import { openPrivacyPolicy } from "./CookieBanner";
import { footer } from "@/assets/data";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-muted py-10 md:py-14">
      <div className="container px-4">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-center">
          <div className="flex justify-center md:justify-end">
            <img
              src={footer.logo}
              alt="La Ferme des Collines"
              className="h-32 md:h-44 w-auto animate-fade-in"
            />
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center md:text-left">
              {footer.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body text-muted-foreground">
              {footer.contactMethods.map((method) => {
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
