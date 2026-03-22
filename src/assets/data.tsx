import farmImage from "@/assets/farm-about.jpg";
import heroImage from "@/assets/hero-farm.jpg";
import logoColor from "@/assets/logo-color.png";
import logoFull from "@/assets/logo-full.png";
import logoWhite from "@/assets/logo-white.png";
import newsletterImg from "@/assets/newsletter-image.jpg";
import detaillantImg from "@/assets/product-detaillant.jpg";
import kiosqueImg from "@/assets/product-kiosque.jpg";
import marcheImg from "@/assets/product-marche.jpg";
import paniersImg from "@/assets/product-paniers.jpg";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

export const nav = {
  farmName: "FERME DES COLLINES",
  logoAlt: "Ferme des Collines",
  logoWhite,
  logoColor,
  links: [
    { label: "Nos produits", id: "produits" },
    { label: "Abonnement", id: "abonnement" },
    { label: "Infolettre", id: "infolettre" },
    { label: "Nous rejoindre", id: "contact" },
  ],
  facebook: {
    url: "https://www.facebook.com/people/Ferme-des-collines/100069650700211/?sk=about",
    ariaLabel: "Facebook",
    mobileLabel: "Suivez-nous sur Facebook"
  }
};

export const hero = {
  headline: "Bien manger, tout simplement!",
  imageAlt: "Vue aérienne de la ferme maraîchère",
  image: heroImage
};

export const about = {
  title: "Bienvenue à la Ferme des Collines",
  description: "Située au sud de Rouyn-Noranda, la Ferme des Collines est une entreprise familiale née d’un désir simple : cultiver des légumes savoureux pour faciliter la vie des familles d'ici. \n\nCultivés avec respect pour la terre et pour votre santé, nos légumes sont simples, sains et frais. Nous proposons des produits faciles à cuisiner, qui ramènent l'essentiel dans l'assiette.",
  imageAlt: "Récolte de légumes frais de la ferme",
  image: farmImage
};

export const products = {
  title: "Où trouver nos produits",
  items: [
  {
    title: "Paniers",
    subtitle: "Abonnement saisonnier",
    description: `Bénéficiez d'un accès privilégié à nos produits toute la saison et profitez d'un rabais de 5 à 10 % (payable d'avance à l'inscription).

Abonnements disponibles:
- Le mini: 23$/semaine (Total: 345$)
- Le régulier: 35$/semaine (Total: 525$)
- Le grand: 45$/semaine (Total: 675$)`,
    features: [
      "**Quand:** 15 semaines (29 juin au 5 octobre 2026)",
      "**Récupération:** Les lundis entre 15h30 et 18h",
      "**Lieu:** Sous le chapiteau du marché public (222 Av. Dallaire)"
    ],
    actionButton: {
      text: "Réserver mon panier",
      href: "https://forms.gle/5XdKBtnyURd29b3E9"
    },
    image: paniersImg,
  },
  {
    title: "Marché public",
    subtitle: "Directement du producteur",
    description: `Rendez-vous hebdomadaire: [Le Marché public de Rouyn-Noranda](https://www.facebook.com/MPRouynNoranda/?locale=fr_CA)

Retrouvez toute la saveur de nos champs au cœur de la ville ! Tous les mercredis de la saison estivale, nous vous accueillons avec nos plus belles récoltes.`,
    features: [
      "**Découvrez** nos nouveautés et légumes de saison.",
      "**Posez** vos questions sur notre agriculture durable.",
      "**Choisissez** exactement ce dont vous avez besoin.",
      "Argent comptant, cartes de débit et de crédit acceptées."
    ],
    image: marcheImg,
  },
  {
    title: "Kiosque à la ferme",
    subtitle: "Libre-service 7/7",
    description: `[Le Marché de la Ferme](https://maps.app.goo.gl/FDmBtcfHhw9VXSdR8): Fraîcheur en toute liberté

Dès le 1er juillet, nous vous ouvrons les portes de notre kiosque libre-service, situé directement dans notre bâtiment principal. Pensé pour s'adapter à votre horaire, il est ouvert tous les jours de 9h à 18h.

Vous y découvrirez chaque jour une sélection de nos plus belles récoltes. Notre concept repose sur une valeur qui nous tient à cœur: la confiance. Vous choisissez vos légumes et déposez votre paiement en toute simplicité (comptant uniquement). C'est le raccourci idéal entre nos champs et votre cuisine!`,
    image: kiosqueImg,
  },
  {
    title: "Près de chez vous",
    subtitle: "Partenaires locaux",
    description: `Retrouvez La Ferme des Collines chez nos partenaires de confiance.

Parce que nous croyons à la force de notre communauté, nos récoltes voyagent aussi jusqu'à vos adresses préférées de Rouyn-Noranda. Vous pouvez savourer la fraîcheur de nos légumes de saison aux points de vente suivants:`,
    partners: [
      { name: "IGA Extra Marché Éric Lambert", address: "105, chemin Sénateur" },
      { name: "Le Cellier (Resto/Bar à vin)", address: "126, avenue Murdoch", href: "https://lenoranda.com/restaurant/" },
      { name: "Marché du Fermier", address: "167, rue Gamble", href: "https://marche-du-fermier.myshopify.com/" },
    ],
    conclusion: `Un gage de qualité: Repérez notre logo! C'est votre garantie d'un produit local, cueilli avec soin et livré avec toute sa vitalité.`,
    image: detaillantImg,
  },
  ]
};

export const newsletter = {
  subtitle: "Infolettre",
  title: "Restez branchés sur la saison!",
  description: "Inscrivez-vous à l'infolettre de La Ferme des Collines pour recevoir nos actualités, nos calendriers de récoltes et des astuces pour cuisiner vos légumes frais. C'est simple, local et directement dans votre boîte de réception.",
  buttonText: "Je m'inscris",
  buttonLink: "https://preview.mailerlite.io/forms/2129271/181208096676250955/share",
  imageAlt: "S'abonner à notre infolettre",
  image: newsletterImg
};

export const footer = {
  title: "Pour nous rejoindre",
  copyright: `© ${new Date().getFullYear()} FERME DES COLLINES. Tous droits réservés.`,
  policyLinkText: "Politique de confidentialité",
  logo: logoFull,
  contactMethods: [
    {
      id: "address",
      icon: MapPin,
      label: "Adresse",
      value: "2485 Rang Gauvin Nord QC, Canada J9X 5L0",
      href: "https://maps.app.goo.gl/FDmBtcfHhw9VXSdR8",
    },
    {
      id: "email",
      icon: Mail,
      label: "Courriel",
      value: "info@fermedescollines.ca",
      href: "mailto:info@fermedescollines.ca",
    },
    {
      id: "phone",
      icon: Phone,
      label: "Téléphone",
      value: "+1 (819) 277-7446",
      href: "tel:+18192777446",
    },
    {
      id: "facebook",
      icon: Facebook,
      label: "Facebook",
      value: "Rejoignez la communauté",
      href: "https://www.facebook.com/people/Ferme-des-collines/100069650700211/?sk=about",
    },
  ],
};

export const cookieBanner = {
  title: "Témoins et confidentialité",
  description: "Ce site utilise des témoins essentiels uniquement pour assurer son bon fonctionnement.",
  policyLinkText: "Politique de confidentialité",
  acceptButtonText: "Accepter",
};

export const policy = {
  title: "Politique de confidentialité",
  closeAriaLabel: "Fermer",
  lastUpdated: "Dernière mise à jour\u202F: 2026-03-11",
  sections: [
    {
      title: "Engagement Loi 25",
      content: "Conformément à la Loi 25 du Québec, nous protégeons vos données personnelles."
    },
    {
      title: "Témoins essentiels uniquement",
      list: [
        "Fonctionnement technique du site",
        "Sécurité des sessions"
      ],
      footer: "Aucun suivi, analyse ou marketing."
    }
  ],
  technicalNote: {
    title: "Note technique",
    content: "L'état de cette bannière est conservé 6 mois via un témoin essentiel."
  },
  contact: {
    label: "Contact\u202F:",
    email: "info@fermedescollines.ca"
  },
  buttonText: "J'ai compris"
};
