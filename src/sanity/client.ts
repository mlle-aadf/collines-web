import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'g02lhe3y',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_AUTH_TOKEN // Only if you want to update content with the client
})

// Query to fetch the landing page data
export const LANDING_PAGE_QUERY = `
  *[_type == "landingPage"][0] {
    navigation,
    hero,
    about,
    products,
    newsletter,
    footer,
    cookieBanner,
    policy
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
export const getImageUrl = (imageRef) => {
  if (!imageRef) return null
  return sanityClient.image(imageRef).url()
}