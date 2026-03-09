import newsletterImg from "@/assets/newsletter-image.jpg";

const NewsletterSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Restez à l'affût
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              De l'inspiration horticole et nos secrets de jardinage exclusifs chaque semaine.
            </p>
            <button className="bg-primary text-primary-foreground font-body font-medium text-sm px-8 py-3 rounded-full hover:bg-secondary transition-colors duration-300">
              Je m'abonne
            </button>
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
