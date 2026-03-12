import heroImage from "@/assets/hero-farm.jpg";

const hero = {
  title: "Bienvenue à La Ferme des Collines 🌿", // Actually the H1 text is "Bien manger, tout simplement!" - fixing below. I should check exactly what the text was.
  headline: "Bien manger, tout simplement!",
  imageAlt: "Vue aérienne de la ferme maraîchère"
};

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center">
      <img
        src={heroImage}
        alt={hero.imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
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
