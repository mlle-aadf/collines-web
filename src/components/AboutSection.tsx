import farmImage from "@/assets/farm-about.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Notre ferme
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Nichée au cœur de la nature de l'Abitibi-Témiscamingue, notre ferme cultive avec soin une grande variété de légumes et de fruits de saison.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={farmImage}
              alt="Récolte de légumes frais de la ferme"
              className="w-full h-80 md:h-[420px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
