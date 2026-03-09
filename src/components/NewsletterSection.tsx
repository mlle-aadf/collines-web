import newsletterImg from "@/assets/newsletter-image.jpg";

const NewsletterSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Le meilleur de notre terre, directement dans votre panier.
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Soutenez l’agriculture d’ici en vous abonnant à nos récoltes saisonnières. Une dose de fraîcheur hebdomadaire, cultivée avec soin par notre famille pour la vôtre.
            </p>
            <a
              href="https://forms.gle/5XdKBtnyURd29b3E9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground font-body font-medium text-sm px-8 py-3 rounded-full hover:bg-secondary transition-colors duration-300"
            >
              Je m'abonne
            </a>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={newsletterImg}
              alt="S'abonner à notre infolettre"
              className="w-full h-72 md:h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
