import newsletterImg from "@/assets/newsletter-image.jpg";

const NewsletterSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row-reverse gap-10 md:gap-16 items-center">
          {/* Content side (Right on desktop) */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
            <span className="font-body text-secondary font-bold tracking-widest uppercase text-sm mb-3">
              Infolettre
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Restez à l'affût
            </h2>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              De l'inspiration horticole et nos secrets de jardinage exclusifs chaque semaine dans notre infolettre.
            </p>
            <a
              href="https://forms.gle/5XdKBtnyURd29b3E9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground font-body font-medium text-sm px-8 py-3 rounded-full hover:bg-secondary transition-colors duration-300"
            >
              Je m'inscris
            </a>
          </div>

          {/* Image side (Left on desktop) */}
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-muted rounded-2xl -z-10 transition-transform group-hover:scale-105 duration-500" />
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img
                  src={newsletterImg}
                  alt="S'abonner à notre infolettre"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
