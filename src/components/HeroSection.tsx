import { useProcessedLandingPageData } from "@/hooks/useLandingPageData";

const HeroSection = () => {
  const { data: landingPageData, isLoading, error } = useProcessedLandingPageData();

  if (isLoading || !landingPageData) {
    return (
      <section className="relative h-[80vh] min-h-[500px] flex items-center bg-gray-200">
        <div className="container relative z-10">
          <div className="h-16 bg-gray-300 animate-pulse rounded max-w-3xl"></div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error('Error loading hero data:', error);
    return (
      <section className="relative h-[80vh] min-h-[500px] flex items-center">
        <div className="container relative z-10">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground max-w-3xl leading-tight">
            Bien manger, tout simplement!
          </h1>
        </div>
      </section>
    );
  }

  const hero = landingPageData.hero;

  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center">
      {hero.image && (
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      )}
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="container relative z-10">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground max-w-3xl leading-tight animate-fade-in-up">
          {hero.headline}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
