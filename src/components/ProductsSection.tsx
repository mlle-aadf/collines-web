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
    title: "Kiosque à la ferme",
    subtitle: "Libre-service 7/7",
    text: `Le Marché de la Ferme : Fraîcheur en toute liberté
Dès le 1er juillet, nous vous ouvrons les portes de notre kiosque libre-service, situé directement dans notre bâtiment principal. Pensé pour s'adapter à votre horaire, il est ouvert tous les jours de 9h à 18h.

Vous y découvrirez chaque jour une sélection de nos plus belles récoltes. Notre concept repose sur une valeur qui nous tient à cœur : la confiance. Vous choisissez vos légumes et déposez votre paiement en toute simplicité (comptant uniquement). C'est le raccourci idéal entre nos champs et votre cuisine !`,
    image: kiosqueImg,
  },
  {
    title: "Près de chez vous",
    subtitle: "Partenaires locaux",
    text: `Retrouvez La Ferme des Collines chez nos partenaires de confiance

Parce que nous croyons à la force de notre communauté, nos récoltes voyagent aussi jusqu'à vos adresses préférées de Rouyn-Noranda. Vous pouvez savourer la fraîcheur de nos légumes de saison aux points de vente suivants :`,
    partners: [
      { name: "IGA Extra Marché Éric Lambert", address: "105, chemin Sénateur" },
      { name: "Le Cellier (Resto/Bar à vin)", address: "126, avenue Murdoch", href: "https://lenoranda.com/restaurant/" },
      { name: "Marché du Fermier", address: "167, rue Gamble", href: "https://marche-du-fermier.myshopify.com/" },
    ],
    conclusion: `Un gage de qualité : Repérez notre logo ! C’est votre garantie d’un produit local, cueilli avec soin et livré avec toute sa vitalité.`,
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
              <div className="w-full md:w-1/2 flex flex-col items-start text-left">
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

                    <p className="font-body text-base md:text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
                      {p.text}
                    </p>
                  </>
                ) : (
                  <p className="font-body text-base md:text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
                    {p.text}
                  </p>
                )}

                {p.partners && (
                  <div className="mt-6 md:max-w-xl text-muted-foreground space-y-3 text-base md:text-lg">
                    {p.partners.map((partner) => (
                      <div key={partner.name} className="text-left">
                        {partner.href ? (
                          <a href={partner.href} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                            {partner.name}
                          </a>
                        ) : (
                          <span className="font-medium">{partner.name}</span>
                        )}
                        {partner.address && <span className="text-muted-foreground"> &nbsp;|&nbsp; {partner.address}</span>}
                      </div>
                    ))}
                  </div>
                )}

                {p.conclusion && (
                  <p className="mt-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed md:max-w-xl">{p.conclusion}</p>
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
