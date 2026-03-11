import detaillantImg from "@/assets/product-detaillant.jpg";
import kiosqueImg from "@/assets/product-kiosque.jpg";
import marcheImg from "@/assets/product-marche.jpg";
import paniersImg from "@/assets/product-paniers.jpg";

const products = [
  {
    title: "Paniers",
    subtitle: "Abonnement saisonnier",
    text: `Bénéficiez d'un accès privilégié à nos produits toute la saison et profitez d'un rabais de 5 à 10 % (payable d'avance à l'inscription).

QUAND : 15 semaines (29 juin au 5 octobre 2026)
RÉCUPÉRATION : Les lundis entre 15h30 et 18h
LIEU : Sous le chapiteau du marché public (222 Av. Dallaire)

Abonnements disponibles :
- Le mini: 23$/semaine (Total: 345$)
- Le régulier: 35$/semaine (Total: 525$)
- Le grand: 45$/semaine (Total: 675$)`,
    image: paniersImg,
  },
  {
    title: "Marché public",
    subtitle: "Directement du producteur",
    marketLink: "https://www.facebook.com/MPRouynNoranda/?locale=fr_CA",
    text: `Retrouvez toute la saveur de nos champs au cœur de la ville ! Tous les mercredis de la saison estivale, nous vous accueillons avec nos plus belles récoltes.

Découvrez : Nos nouveautés et variétés de saison.

Échangez : Posez vos questions sur notre agriculture durable.

Liberté : Choisissez exactement ce dont vous avez besoin.

Paiements faciles : Argent comptant, cartes de débit et de crédit acceptées.
`,
    image: marcheImg,
  },
  {
    title: "Kiosque",
    subtitle: "Libre-service 7/7",
    text: `Notre kiosque libre-service est situé juste à côté de notre serre principale. Il est ouvert tous les jours de la semaine pour vous offrir une flexibilité maximale.

Vous y trouverez une sélection de nos récoltes du jour, fraîchement cueillies. Le fonctionnement repose sur l'honneur et la confiance, avec un système de paiement simple et efficace sur place.`,
    image: kiosqueImg,
  },
  {
    title: "Détaillant",
    subtitle: "Près de chez vous",
    text: `Nos produits sont également disponibles chez nos partenaires locaux de confiance :

IGA Extra Marché Éric Lambert
105 Chem. Sénateur, Rouyn-Noranda, QC

Cherchez notre logo en magasin pour garantir la provenance locale et la fraîcheur exceptionnelle de vos légumes de saison.`,
    image: detaillantImg,
  },
];

const ProductsSection = () => {
  return (
    <section id="produits" className="py-20 md:py-32 bg-white">
      <div className="container">
        <header className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Où trouver nos produits
          </h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
        </header>

        <div className="flex flex-col gap-24 md:gap-40">
          {products.map((p, index) => (
            <div
              key={p.title}
              className={`flex flex-col gap-10 md:gap-16 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
            >
              {/* Image side */}
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-muted rounded-2xl -z-10 transition-transform group-hover:scale-105 duration-500" />
                  <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <span className="font-body text-secondary font-bold tracking-widest uppercase text-sm mb-3">
                  {p.subtitle}
                </span>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {p.title}
                </h3>
                {p.marketLink ? (
                  <>
                    <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed md:leading-loose md:max-w-xl">
                      Rendez-vous hebdomadaire :{' '}
                      <a
                        href={p.marketLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        Le Marché public de Rouyn-Noranda
                      </a>{' '}
                      🧺
                    </p>

                    <p className="font-body text-base md:text-lg text-muted-foreground whitespace-pre-line leading-relaxed italic md:not-italic">
                      {p.text}
                    </p>
                  </>
                ) : (
                  <p className="font-body text-base md:text-lg text-muted-foreground whitespace-pre-line leading-relaxed italic md:not-italic">
                    {p.text}
                  </p>
                )}

                {p.title === "Paniers" && (
                  <a
                    href="https://forms.gle/5XdKBtnyURd29b3E9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block bg-primary text-primary-foreground font-body font-bold px-8 py-3 rounded-full hover:bg-secondary transition-colors duration-300"
                  >
                    Réserver mon panier
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
