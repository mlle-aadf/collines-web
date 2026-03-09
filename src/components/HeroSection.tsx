import heroImage from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center">
      <img
        src={heroImage}
        alt="Vue aérienne de la ferme maraîchère"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="container relative z-10">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground max-w-3xl leading-tight animate-fade-in-up">
          Une entreprise maraîchère dynamique où passion, fraîcheur et famille se rencontrent
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
