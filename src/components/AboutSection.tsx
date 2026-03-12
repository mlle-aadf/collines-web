import { about } from "@/assets/data";

const AboutSection = () => {
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
            <img
              src={about.image}
              alt={about.imageAlt}
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
