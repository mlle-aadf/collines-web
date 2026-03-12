# La Ferme des Collines — Vitrine web 🌿

Site vitrine développé pour **La Ferme des Collines** : présentation de la ferme, mise en valeur des produits et collecte d'abonnés à l'infolettre. Le code source est fourni pour consultation.

## ✨ Points clés
- 🖼️ Logo personnalisé pour **La Ferme des Collines**
- 📱 Navigation simple et design responsive (mobile / tablette / desktop)
- 🪧 Section d'accueil (Hero) avec visuel et message principal
- ℹ️ Section « À propos » — courte présentation de la ferme
- 🛍️ Section Produits — vitrine des produits proposés
- ✉️ Abonnement aux Paniers — bouton **Je m'abonne** redirige vers un Google Form 
- ✉️ Infolettre — bouton **Je m'inscris** redirige vers un formulaire d'inscription MailerLite
- 🔒 Consentement cookies (Loi 25) — bannière minimale, pas d'analytics, stockage local uniquement pour l'essentiel
- ♻️ Composants réutilisables pour faciliter les mises à jour


## 🛠️ Stack
- Vite, React, TypeScript, TailwindCSS

## 📂 Structure (survol)
- `src/` — code source
- `src/components/` — composants (Navbar, Hero, Produits, Infolettre, Footer, etc.) **NE PAS MODIFIER**
- `src/assets/` — logos, images, textes, liens, etc.
- `src/assets/data.tsx` — **tout le contenu modifiable du site**

---

## ✏️ Modifier le contenu du site

> **Un seul fichier à ouvrir : [`src/assets/data.tsx`](https://github.com/mlle-aadf/collines-web/blob/main/src/assets/data.tsx)**
> Tous les textes, liens et images du site s'y trouvent — aucun autre fichier à toucher.

### 🔤 Règle générale
Modifiez uniquement le texte **entre guillemets** `" "`. Ne supprimez pas les guillemets, les virgules ou les points-virgules.

---

### 🧭 Menu de navigation — `nav`
| Quoi changer | Clé à modifier |
|---|---|
| Nom de la ferme dans le menu | `farmName` |
| Texte d'un lien du menu | `label` dans `links` |
| Lien vers la page Facebook | `url` dans `facebook` |

---

### 🖼️ Section d'accueil — `hero`
| Quoi changer | Clé à modifier |
|---|---|
| Titre principal | `title` |
| Accroche sous le titre | `headline` |
| Image de fond | voir **Changer une image** ↓ |

---

### 🌿 Section À propos — `about`
| Quoi changer | Clé à modifier |
|---|---|
| Titre | `title` |
| Texte de présentation | `description` |
| Points forts (Sains / Frais / Simples) | `name` et `desc` dans `features` |
| Image | voir **Changer une image** ↓ |

---

### 🛍️ Section Produits — `products`
Il y a 4 cartes (Paniers, Marché, Kiosque, Détaillants). Pour chacune :

| Quoi changer | Clé à modifier |
|---|---|
| Titre de la carte | `title` |
| Sous-titre | `subtitle` |
| Texte descriptif | `text` |
| Points de liste (dates, horaires, lieux) | `name` et `desc` dans `features` |
| Texte du bouton | `text` dans `actionButton` |
| Lien du bouton (ex. Google Form) | `href` dans `actionButton` |
| Partenaires (nom, adresse, lien) | entrées dans `partners` |
| Image | voir **Changer une image** ↓ |

---

### ✉️ Section Infolettre — `newsletter`
| Quoi changer | Clé à modifier |
|---|---|
| Titre | `title` |
| Sous-titre | `subtitle` |
| Texte descriptif | `description` |
| Texte du bouton | `buttonText` |
| Lien du formulaire MailerLite | `buttonLink` |
| Image | voir **Changer une image** ↓ |

---

### 📍 Pied de page — `footer`
| Quoi changer | Clé à modifier |
|---|---|
| Adresse postale | `value` dans l'entrée `"address"` |
| Lien Google Maps | `href` dans l'entrée `"address"` |
| Courriel affiché | `value` dans l'entrée `"email"` |
| Lien courriel | `href` dans l'entrée `"email"` |
| Numéro de téléphone | `value` dans l'entrée `"phone"` |
| Lien Facebook | `href` dans l'entrée `"facebook"` |

---

### 🍪 Bannière cookies & Politique — `cookieBanner` / `policy`
| Quoi changer | Clé à modifier |
|---|---|
| Texte de la bannière | `description` dans `cookieBanner` |
| Date de mise à jour | `lastUpdated` dans `policy` |
| Courriel de contact | `email` dans `policy` → `contact` |

---

### 🖼️ Changer une image

1. Placez votre nouvelle image dans le dossier `src/assets/`
2. En haut du fichier `data.tsx`, repérez la ligne `import` correspondante, par exemple :
   ```
   import heroImage from "@/assets/hero-farm.jpg";
   ```
3. Remplacez `hero-farm.jpg` par le nom exact de votre nouveau fichier (respectez les majuscules et l'extension).

| Variable | Utilisée pour |
|---|---|
| `heroImage` | Photo de fond — section d'accueil |
| `farmImage` | Photo — section À propos |
| `paniersImg` | Carte Paniers |
| `marcheImg` | Carte Marché public |
| `kiosqueImg` | Carte Kiosque |
| `detaillantImg` | Carte Détaillants |
| `newsletterImg` | Section Infolettre |
| `logoFull` | Logo dans le pied de page |
| `logoWhite` | Logo blanc (menu en haut de page) |
| `logoColor` | Logo couleur (menu après défilement) |

---
Merci de préserver la structure des composants et la nomenclature pour maintenir la cohérence.
