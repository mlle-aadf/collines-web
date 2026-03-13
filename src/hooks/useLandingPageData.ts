import { useQuery } from '@tanstack/react-query'
import { getLandingPageData, getImageUrl } from '@/sanity/client'

// Query key for the landing page data
export const LANDING_PAGE_QUERY_KEY = ['landingPage']

// Hook to fetch landing page data
export const useLandingPageData = () => {
  return useQuery({
    queryKey: LANDING_PAGE_QUERY_KEY,
    queryFn: getLandingPageData,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 30, // 30 minutes
  })
}

// Helper hook to get processed data with image URLs
export const useProcessedLandingPageData = () => {
  const { data, ...queryResult } = useLandingPageData()

  if (!data) return { data: null, ...queryResult }

  // Process the data to convert Sanity image references to URLs
  const processedData = {
    nav: {
      ...data.navigation,
      logoWhite: data.navigation.logoWhite ? getImageUrl(data.navigation.logoWhite) : null,
      logoColor: data.navigation.logoColor ? getImageUrl(data.navigation.logoColor) : null,
    },
    hero: {
      ...data.hero,
      image: data.hero.image ? getImageUrl(data.hero.image) : null,
    },
    about: {
      ...data.about,
      image: data.about.image ? getImageUrl(data.about.image) : null,
    },
    products: {
      ...data.products,
      items: data.products.items.map(item => ({
        ...item,
        image: item.image ? getImageUrl(item.image) : null,
      })),
    },
    newsletter: {
      ...data.newsletter,
      image: data.newsletter.image ? getImageUrl(data.newsletter.image) : null,
    },
    footer: {
      ...data.footer,
      logo: data.footer.logo ? getImageUrl(data.footer.logo) : null,
    },
    cookieBanner: data.cookieBanner,
    policy: data.policy,
  }

  return {
    data: processedData,
    ...queryResult,
  }
}