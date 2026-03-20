import { createClient } from '@sanity/client'
import imageUrlBuilder, { type SanityImageSource } from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'g02lhe3y',
  dataset: 'production',
  useCdn: false, 
  perspective: 'published', // Ensure we only fetch published content
  apiVersion: '2026-03-13', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_AUTH_TOKEN // Only if you want to update content with the client
})

// Create image URL builder instance
const builder = imageUrlBuilder(sanityClient)

// Query to fetch the landing page data
export const LANDING_PAGE_QUERY = `
  *[_type == "landingPage"][0] {
    navigation {
      ...,
    },
    hero {
      ...,
    },
    about {
      ...,
    },
    products {
      title,
      items[] {
        _key,
        title,
        subtitle,
        text,
        image,
        marketInfo {
          prefix,
          linkText,
          suffix,
          href
        },
        features,
        conclusion,
        partners[] {
          _key,
          name,
          address,
          href
        },
        actionButton {
          text,
          href
        }
      }
    },
    newsletter {
      ...,
    },
    footer {
      ...,
    },
    cookieBanner {
      ...,
    },
    policy {
      ...,
    }
  }
`

// Function to fetch landing page data
export const getLandingPageData = async () => {
  try {
    const data = await sanityClient.fetch(LANDING_PAGE_QUERY)
    return data
  } catch (error) {
    console.error('Error fetching landing page data:', error)
    return null
  }
}

// Helper function to get image URL from Sanity image object
export const getImageUrl = (imageRef: SanityImageSource) => {
  if (!imageRef) return null
  return builder.image(imageRef).url()
}