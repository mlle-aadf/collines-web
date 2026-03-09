import paniersImg from "@/assets/product-paniers.jpg";
import marcheImg from "@/assets/product-marche.jpg";
import kiosqueImg from "@/assets/product-kiosque.jpg";
import detaillantImg from "@/assets/product-detaillant.jpg";

const products = [
  {
    title: "Paniers",
    text: "Abonnement hebdomadaire, disponible en 3 formats.",
    image: paniersImg,
  },
  {
    title: "Marché",
    text: "Marché Fermier en tout temps, et Marché public de Rouyn-Noranda les mercredis.",
    image: marcheImg,
  },
  {
    title: "Kiosque",
    text: "Kiosque libre service, situé à côté de notre serre, ouvert tous les jours.",
    image: kiosqueImg,
  },
  {
    title: "Détaillant",
    text: "IGA Extra Marché Éric Lambert\n105 Chem. Sénateur\nRouyn-Noranda, QC",
    image: detaillantImg,
  },
];

const ProductsSection = () => {
  return (
    <section id="produits" className="py-20 md:py-28 bg-muted">
      <div className="container">
        <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground text-center mb-12 md:mb-16">
          Où trouver nos produits
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
