import farmImage from "@/assets/farm-about.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="md:order-1">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Bienvenue à La Ferme des Collines 🌿
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed md:leading-loose md:max-w-xl">
              Située au sud de Rouyn-Noranda, la Ferme des Collines est une entreprise familiale née d’un désir tout simple :
              cultiver des légumes savoureux pour faciliter la vie des familles d'ici.
            </p>

            <ul className="list-disc pl-6 space-y-3 mt-6 text-muted-foreground md:max-w-xl">
              <li><strong>Sains :</strong> Cultivés avec respect pour la terre et pour votre santé.</li>
              <li><strong>Frais :</strong> Récoltés à maturité pour que vous profitiez du vrai goût des aliments.</li>
              <li><strong>Simples :</strong> Des produits authentiques, faciles à cuisiner, qui ramènent l'essentiel dans l'assiette.</li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden md:order-2 shadow-lg">
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
