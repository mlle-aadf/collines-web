import { useProcessedLandingPageData } from "@/hooks/useLandingPageData";
import { RichText, RichTextList } from "./RichText";

const ProductsSection = () => {
  const { data: landingPageData, isLoading, error } = useProcessedLandingPageData();

  if (isLoading || !landingPageData) {
    return (
      <section id="produits" className="py-20 md:py-32 bg-white">
        <div className="container">
          <header className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
            <div className="h-12 bg-gray-300 animate-pulse rounded mb-6"></div>
            <div className="w-20 h-1.5 bg-gray-200 mx-auto rounded-full"></div>
          </header>
          <div className="flex flex-col gap-24 md:gap-40">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col gap-10 md:gap-16 items-center">
                <div className="w-full md:w-1/2">
                  <div className="rounded-2xl bg-gray-200 aspect-[4/3] animate-pulse"></div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="h-4 bg-gray-300 animate-pulse rounded mb-3 w-32"></div>
                  <div className="h-10 bg-gray-300 animate-pulse rounded mb-6"></div>
                  <div className="h-32 bg-gray-300 animate-pulse rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading products data:', error);
    return (
      <section id="produits" className="py-20 md:py-32 bg-white">
        <div className="container">
          <header className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Où trouver nos produits
            </h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
          </header>
          <div className="text-center text-muted-foreground">
            Error loading products content.
          </div>
        </div>
      </section>
    );
  }

  const products = landingPageData.products;

  return (
    <section id="produits" className="py-20 md:py-32 bg-white">
      <div className="container">
        <header className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {products.title}
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
        </header>

        <div className="flex flex-col gap-24 md:gap-40">
          {products.items.map((p, index) => (
            <div
              key={p._key || p.title}
              id={p.title === "Paniers" ? "abonnement" : undefined}
              className={`flex flex-col gap-10 md:gap-16 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
            >
              {/* Image side */}
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-muted rounded-2xl -z-10 transition-transform group-hover:scale-105 duration-500" />
                  <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                <span className="font-body text-secondary font-bold tracking-widest uppercase text-sm mb-3">
                  {p.subtitle}
                </span>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {p.title}
                </h3>
                
                {/* Market info with link */}
                {p.marketInfo && (
                  <div className="font-body text-base md:text-lg text-muted-foreground mb-4 md:max-w-xl">
                    {p.marketInfo.prefix && <span>{p.marketInfo.prefix}</span>}
                    <a 
                      href={p.marketInfo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline hover:text-primary/80 transition-colors"
                    >
                      {p.marketInfo.linkText}
                    </a>
                    {p.marketInfo.suffix && <span>{p.marketInfo.suffix}</span>}
                  </div>
                )}
                
                {/* Main description - supports markdown-style formatting */}
                <RichText 
                  content={p.description}
                  className="font-body text-base md:text-lg text-muted-foreground whitespace-pre-line leading-relaxed md:max-w-xl"
                />

                {/* Features list */}
                {p.features && p.features.length > 0 && (
                  <RichTextList 
                    items={p.features}
                    className="mt-4 font-body text-base md:text-lg text-muted-foreground md:max-w-xl"
                  />
                )}

                {/* Conclusion */}
                {p.conclusion && (
                  <RichText 
                    content={p.conclusion}
                    className="mt-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed md:max-w-xl"
                  />
                )}

                {/* Partners list */}
                {p.partners && p.partners.length > 0 && (
                  <div className="mt-6 md:max-w-xl text-muted-foreground space-y-3 text-base md:text-lg">
                    {p.partners.map((partner, idx) => (
                      <div key={partner._key || idx} className="text-left">
                        {partner.href ? (
                          <a href={partner.href} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">
                            {partner.name}
                          </a>
                        ) : (
                          <span className="font-medium">{partner.name}</span>
                        )}
                        {partner.address && (
                          <span className="text-muted-foreground"> &nbsp;|&nbsp; {partner.address}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {p.actionButton && (
                  <a
                    href={p.actionButton.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block bg-primary text-primary-foreground font-body font-bold px-8 py-3 rounded-full hover:bg-secondary transition-colors duration-300"
                  >
                    {p.actionButton.text}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
