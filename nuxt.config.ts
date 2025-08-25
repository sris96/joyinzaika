// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js'
  },
  nitro: {
    preset: 'static'
  },
  ssr: false,
  app: {
    baseURL: '/',
    head: {
      title: 'JoyInZaika\'s PowerBites - Premium Protein Bars | Pune\'s Best Healthy Snacks',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        
        // Primary Meta Tags
        { name: 'title', content: 'JoyInZaika\'s PowerBites - Premium Protein Bars | Pune\'s Best Healthy Snacks' },
        { name: 'description', content: 'Discover JoyInZaika\'s PowerBites - Pune\'s premium handcrafted protein bars with 20g protein, all-natural ingredients. Made by Chef Srishty with love. Order via WhatsApp!' },
        { name: 'keywords', content: 'PowerBites, protein bars Pune, healthy snacks Pune, natural protein bars, fitness food India, energy bars, JoyInZaika, Chef Srishty, homemade protein bars, gluten-free snacks, vegan protein bars' },
        { name: 'author', content: 'JoyInZaika - Chef Srishty Chandra' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'English' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://joyinzaika.srishtychandra.me/' },
        { property: 'og:title', content: 'JoyInZaika\'s PowerBites - Premium Protein Bars | Pune' },
        { property: 'og:description', content: 'Pune\'s premium handcrafted protein bars with 20g protein & all-natural ingredients. Made with love by Chef Srishty. Order now via WhatsApp!' },
        { property: 'og:image', content: 'https://joyinzaika.srishtychandra.me/power-bite-hero.jpg' },
        { property: 'og:site_name', content: 'JoyInZaika\'s PowerBites' },
        { property: 'og:locale', content: 'en_IN' },
        
        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://joyinzaika.srishtychandra.me/' },
        { property: 'twitter:title', content: 'JoyInZaika\'s PowerBites - Premium Protein Bars' },
        { property: 'twitter:description', content: 'Pune\'s premium handcrafted protein bars with 20g protein. Made with love by Chef Srishty. Order now!' },
        { property: 'twitter:image', content: 'https://joyinzaika.srishtychandra.me/power-bite-hero.jpg' },
        
        // Geo tags for local SEO
        { name: 'geo.region', content: 'IN-MH' },
        { name: 'geo.placename', content: 'Pune' },
        { name: 'geo.position', content: '18.5204;73.8567' },
        { name: 'ICBM', content: '18.5204, 73.8567' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://joyinzaika.srishtychandra.me/' },
        { rel: 'alternate', type: 'application/rss+xml', title: 'JoyInZaika\'s PowerBites', href: '/sitemap.xml' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'JoyInZaika\'s PowerBites',
            'image': 'https://joyinzaika.srishtychandra.me/power-bite-hero.jpg',
            '@id': 'https://joyinzaika.srishtychandra.me',
            'url': 'https://joyinzaika.srishtychandra.me',
            'telephone': '+919876543210',
            'email': 'hello@joyinzaika.com',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Pune',
              'addressRegion': 'MH',
              'addressCountry': 'IN'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': 18.5204,
              'longitude': 73.8567
            },
            'openingHoursSpecification': {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              'opens': '09:00',
              'closes': '21:00'
            },
            'sameAs': [
              'https://www.facebook.com/joyinzaika',
              'https://www.instagram.com/joyinzaika',
              'https://twitter.com/joyinzaika'
            ],
            'priceRange': '₹₹',
            'servesCuisine': 'Healthy Snacks',
            'menu': 'https://joyinzaika.srishtychandra.me/#product',
            'acceptsReservations': 'False',
            'founder': {
              '@type': 'Person',
              'name': 'Chef Srishty Chandra',
              'jobTitle': 'Founder & Chef'
            }
          })
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Product',
            'name': 'PowerBites Protein Bars',
            'image': ['https://joyinzaika.srishtychandra.me/power-bite-hero.jpg'],
            'description': 'Premium handcrafted protein bars with 20g protein, all-natural ingredients, no artificial preservatives.',
            'brand': {
              '@type': 'Brand',
              'name': 'JoyInZaika'
            },
            'nutrition': {
              '@type': 'NutritionInformation',
              'calories': '240 cal',
              'proteinContent': '20 g',
              'fatContent': '9 g',
              'carbohydrateContent': '22 g',
              'fiberContent': '5 g',
              'sugarContent': '12 g',
              'servingSize': '1 bar (60g)'
            },
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '5',
              'reviewCount': '200'
            },
            'offers': {
              '@type': 'Offer',
              'priceCurrency': 'INR',
              'price': '99',
              'availability': 'https://schema.org/InStock',
              'seller': {
                '@type': 'Organization',
                'name': 'JoyInZaika'
              }
            }
          })
        }
      ]
    }
  }
})
