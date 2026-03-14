# Sanity CMS Schema - Ferme des Collines

Based on the landing page requirements, here is the proposed schema for the Sanity CMS.

## Document Types

### 1. `landingPage` (Singleton)
A single document to manage all landing page content. This is the primary source of data for the `useLandingPageData` hook.

| Field Name | Type | Description |
|------------|------|-------------|
| `title` | `string` | Internal name (e.g., "Ferme des Collines Home") |
| `nav` | `object` | Navigation & Logo configuration |
| `hero` | `object` | Hero Section text & image |
| `about` | `object` | About Section text & image |
| `products` | `array` | List of products/services (references or objects) |
| `newsletter` | `object` | Newsletter signup section content |
| `footer` | `object` | Footer links & contact methods |
| `cookieBanner`| `object` | Data for the `CookieBanner.tsx` component |
| `policy` | `object` | Data for the `PolicyModal.tsx` component |

### 2. `product` (Document)
Individual product or service entries, which can be referenced in the landing page array.

| Field Name | Type | Description |
|------------|------|-------------|
| `title` | `string` | e.g. "Paniers", "Marché public" |
| `subtitle` | `string` | Short tagline |
| `image` | `image` | Featured image for the product |
| `description` | `text` | Detailed text (multi-line) |
| `features` | `array` | List of `{ name, desc }` objects |
| `actions` | `object` | Configuration for button (text, href) |
| `vendorInfo` | `object` | Specific info for markets/partners |

### 3. `partner` (Document)
Local partners (IGA, restaurants, etc.) to list under "Près de chez vous".

| Field Name | Type | Description |
|------------|------|-------------|
| `name` | `string` | Partner name |
| `address` | `string` | Physical address |
| `url` | `url` | Optional website link |

---

## Detailed Object Structures

### Navigation Object
- `farmName`: `string`
- `logoWhite`: `image`
- `logoColor`: `image`
- `links`: `array` of `{ label, id }`
- `facebookUrl`: `url`

### Footer Object
- `logo`: `image`
- `copyright`: `string`
- `contactMethods`: `array` of `{ icon, label, value, href }`

### Policy Object
- `title`: `string`
- `lastUpdated`: `string`
- `sections`: `array` of `{ title, content, list: array of strings }`

---

## Implementation Notes
- **Singleton**: The `landingPage` should be restricted to a single instance in the Sanity Studio (via `documentAction` or `singleton` pattern).
- **Images**: All image fields should include `hotspot: true` to allow better cropping for hero and about images.
- **Portability**: For descriptions, consider using `blockContent` instead of plain `text` if rich text (bold, links) is needed in the future. Currently, `src/assets/data.tsx` uses plain strings with `\n`.
