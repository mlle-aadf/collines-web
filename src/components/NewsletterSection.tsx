import { useProcessedLandingPageData } from "@/hooks/useLandingPageData";

const NewsletterSection = () => {
  const { data: landingPageData, isLoading, error } = useProcessedLandingPageData();

  if (isLoading || !landingPageData) {
    return (
      <section id="infolettre" className="py-20 md:py-32 bg-white border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="h-4 bg-gray-300 animate-pulse rounded mb-3 w-24"></div>
              <div className="h-10 bg-gray-300 animate-pulse rounded mb-6"></div>
              <div className="h-20 bg-gray-300 animate-pulse rounded mb-8"></div>
              <div className="h-12 bg-gray-300 animate-pulse rounded-full w-32"></div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="rounded-2xl bg-gray-200 aspect-[4/3] animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading newsletter data:', error);
    return (
      <section id="infolettre" className="py-20 md:py-32 bg-white border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-center">
            <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
              <span className="font-body text-secondary font-bold tracking-widest uppercase text-sm mb-3">
                Infolettre
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Restez branchés sur la saison!
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Error loading newsletter content.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const newsletter = landingPageData.newsletter;

  return (
    <section id="infolettre" className="py-20 md:py-32 bg-white border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-center">
          {/* Content side (Right on desktop) */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
            <span className="font-body text-secondary font-bold tracking-widest uppercase text-sm mb-3">
              {newsletter.subtitle}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              {newsletter.title}
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              {newsletter.description}
            </p>
            <a
              href={newsletter.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground font-body font-medium text-sm px-8 py-3 rounded-full hover:bg-secondary transition-colors duration-300"
            >
              {newsletter.buttonText}
            </a>
          </div>

          {/* Image side (Left on desktop) */}
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-muted rounded-2xl -z-10 transition-transform group-hover:scale-105 duration-500" />
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                {newsletter.image && (
                  <img
                    src={newsletter.image}
                    alt={newsletter.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
