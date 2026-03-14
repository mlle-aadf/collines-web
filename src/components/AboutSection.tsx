import { useProcessedLandingPageData } from "@/hooks/useLandingPageData";

const AboutSection = () => {
  const { data: landingPageData, isLoading, error } = useProcessedLandingPageData();

  if (isLoading || !landingPageData) {
    return (
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="md:order-1">
              <div className="h-10 bg-gray-300 animate-pulse rounded mb-6"></div>
              <div className="h-32 bg-gray-300 animate-pulse rounded"></div>
            </div>
            <div className="rounded-lg overflow-hidden md:order-2 shadow-lg">
              <div className="w-full h-80 md:h-[420px] bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading about data:', error);
    return (
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="md:order-1">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                Bienvenue à la Ferme des Collines
              </h2>
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed md:leading-loose md:max-w-xl">
                Error loading content.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const about = landingPageData.about;

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="md:order-1">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              {about.title}
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed md:leading-loose md:max-w-xl whitespace-pre-line">
              {about.description}
            </p>
          </div>
          <div className="rounded-lg overflow-hidden md:order-2 shadow-lg">
            {about.image && (
              <img
                src={about.image}
                alt={about.imageAlt}
                className="w-full h-80 md:h-[420px] object-cover"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
