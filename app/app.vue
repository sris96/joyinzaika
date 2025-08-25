<template>
  <div class="min-h-screen bg-black overflow-x-hidden">
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

    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-golden-400/30">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <div class="flex items-center">
            <nuxt-link to="/" class="text-3xl sm:text-4xl font-brand tracking-wide">
              <span class="text-white">JOY</span><span class="text-golden-500">IN</span><span class="text-white">ZAIKA</span>
            </nuxt-link>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-10">
            <nuxt-link to="/#home" class="text-gray-300 hover:text-golden-500 transition-colors font-medium tracking-wide">Home</nuxt-link>
            <nuxt-link to="/#product" class="text-gray-300 hover:text-golden-500 transition-colors font-medium tracking-wide">Product</nuxt-link>
            <nuxt-link to="/#ingredients" class="text-gray-300 hover:text-golden-500 transition-colors font-medium tracking-wide">Ingredients</nuxt-link>
            <nuxt-link to="/#chef" class="text-gray-300 hover:text-golden-500 transition-colors font-medium tracking-wide">Chef</nuxt-link>
            <nuxt-link to="/#contact" class="px-6 py-2.5 bg-gradient-to-r from-golden-500 to-golden-600 text-black font-bold rounded-full hover:from-golden-400 hover:to-golden-500 transform transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-golden-500/30">
              ORDER NOW
            </nuxt-link>
          </div>
          
          <!-- Mobile menu button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2">
            <div class="w-6 h-5 relative flex flex-col justify-between">
              <span :class="mobileMenuOpen ? 'rotate-45 translate-y-2' : ''" class="w-full h-0.5 bg-white transform transition-all duration-300"></span>
              <span :class="mobileMenuOpen ? 'opacity-0' : ''" class="w-full h-0.5 bg-white transition-all duration-300"></span>
              <span :class="mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''" class="w-full h-0.5 bg-white transform transition-all duration-300"></span>
            </div>
          </button>
        </div>
        
        <!-- Mobile Navigation -->
        <transition name="slide">
          <div v-if="mobileMenuOpen" class="md:hidden py-6 border-t border-golden-400/30 bg-black">
            <div class="flex flex-col space-y-4">
              <nuxt-link to="/#home" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-golden-500 transition-colors font-medium">Home</nuxt-link>
              <nuxt-link to="/#product" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-golden-500 transition-colors font-medium">Product</nuxt-link>
              <nuxt-link to="/#ingredients" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-golden-500 transition-colors font-medium">Ingredients</nuxt-link>
              <nuxt-link to="/#chef" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-golden-500 transition-colors font-medium">Chef</nuxt-link>
              <nuxt-link to="/#contact" class="block px-6 py-3 bg-gradient-to-r from-golden-500 to-golden-600 text-black font-bold w-full rounded-full shadow-lg shadow-golden-500/30 text-center">ORDER NOW</nuxt-link>
            </div>
          </div>
        </transition>
      </div>
    </nav>

    <!-- Main Content Outlet -->
    <NuxtPage />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>