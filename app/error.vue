<template>
  <div class="min-h-screen bg-black flex items-center justify-center px-4">
    <!-- Dark Background Pattern -->
    <div class="fixed inset-0 -z-10 opacity-5">
      <svg class="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="currentColor" class="text-golden-400"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="max-w-2xl mx-auto text-center">
      <!-- Error Card -->
      <div class="bg-gray-900/60 backdrop-blur-sm border border-golden-400/30 rounded-3xl p-12 shadow-2xl shadow-golden-500/20">
        
        <!-- Header -->
        <div class="mb-8">
          <div class="text-6xl mb-6">😵</div>
          <h1 class="text-4xl sm:text-5xl font-brand text-white mb-4">
            OOPS!
          </h1>
          <h2 class="text-2xl sm:text-3xl font-brand text-golden-400 mb-6">
            {{ error?.statusCode || 'ERROR' }}
          </h2>
          <p class="text-lg text-gray-300 max-w-lg mx-auto leading-relaxed">
            {{ error?.statusMessage || 'Something went wrong. This page is missing from our kitchen!' }}
          </p>
        </div>

        <!-- Error Details -->
        <div class="bg-black/40 border border-golden-400/40 rounded-2xl p-8 mb-8" v-if="error?.statusCode === 404">
          <div class="text-4xl mb-4">🔍</div>
          <h3 class="text-2xl font-brand text-golden-300 mb-4">PAGE NOT FOUND</h3>
          <p class="text-gray-300 mb-6">
            The page you're looking for doesn't exist. Maybe it's still being cooked up in our kitchen!
          </p>
          
          <div class="space-y-4">
            <div class="text-left">
              <h4 class="text-golden-300 font-bold mb-2">Try these instead:</h4>
              <ul class="text-gray-300 space-y-2">
                <li>• Check if the URL is spelled correctly</li>
                <li>• Go back to our homepage</li>
                <li>• Browse our delicious PowerBites</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Generic Error -->
        <div class="bg-black/40 border border-golden-400/40 rounded-2xl p-8 mb-8" v-else>
          <div class="text-4xl mb-4">⚠️</div>
          <h3 class="text-2xl font-brand text-golden-300 mb-4">SOMETHING WENT WRONG</h3>
          <p class="text-gray-300 mb-6">
            We're having technical difficulties. Our chefs are working hard to fix this!
          </p>
        </div>
        
        <!-- Actions -->
        <div class="space-y-4">
          <nuxt-link 
            to="/"
            class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-golden-500 to-golden-600 text-black font-bold text-lg rounded-full hover:from-golden-400 hover:to-golden-500 transform transition-all duration-300 hover:scale-105 shadow-lg shadow-golden-500/30"
          >
            <span>🏠</span>
            <span>Back to Home</span>
          </nuxt-link>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button 
              @click="handleError" 
              class="px-6 py-3 border-2 border-golden-400 text-golden-300 font-bold rounded-full hover:bg-golden-400/10 hover:text-golden-200 transition-all duration-300"
            >
              Try Again
            </button>
            
            <nuxt-link 
              to="/#contact"
              class="px-6 py-3 border-2 border-golden-400 text-golden-300 font-bold rounded-full hover:bg-golden-400/10 hover:text-golden-200 transition-all duration-300"
            >
              Contact Us
            </nuxt-link>
          </div>
          
          <p class="text-sm text-gray-400 mt-8">
            Error Code: {{ error?.statusCode || 'UNKNOWN' }}
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
// Define props for the error
const props = defineProps({
  error: Object
})

// Set page title
useHead({
  title: `Error ${props.error?.statusCode || ''} - JoyNZaika's PowerBites`
})

// Handle error - either clear error or reload
const handleError = () => {
  // In Nuxt 3, we can clear the error
  clearError({ redirect: '/' })
}
</script>