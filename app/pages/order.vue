<template>
  <div class="min-h-screen bg-black px-4 pt-32 pb-20">
    <!-- Background Pattern -->
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
      <!-- Under Construction Card -->
      <div class="bg-gray-900/60 backdrop-blur-sm border border-golden-400/30 rounded-3xl p-12 shadow-2xl shadow-golden-500/20 mb-12">
        
        <!-- Header -->
        <div class="mb-8">
          <div class="text-6xl mb-6">🚧</div>
          <h1 class="text-4xl sm:text-5xl font-brand text-white mb-4">
            ONLINE ORDERING
          </h1>
          <h2 class="text-2xl sm:text-3xl font-brand text-golden-400 mb-6">
            COMING SOON!
          </h2>
          <p class="text-lg text-gray-300 max-w-lg mx-auto leading-relaxed">
            We're working hard to bring you the best online ordering experience for JoyInZaika's PowerBites.
          </p>
        </div>

        <!-- WhatsApp Ordering Section -->
        <div class="bg-black/40 border border-golden-400/40 rounded-2xl p-8 mb-8">
          <div class="text-4xl mb-4">📱</div>
          <h3 class="text-2xl font-brand text-golden-300 mb-4">ORDER ON WHATSAPP</h3>
          <p class="text-gray-300 mb-6">
            In the meantime, you can place your PowerBites order directly through WhatsApp!
          </p>
          
          <a 
            href="https://wa.me/919876543210?text=Hi! I'd like to order JoyInZaika's PowerBites. Can you please share the available flavors and pricing?"
            target="_blank"
            class="inline-flex items-center gap-3 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-600/30"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span>Order via WhatsApp</span>
          </a>
          
          <p class="text-sm text-gray-400 mt-4">
            Click above to start a WhatsApp chat with us
          </p>
        </div>

        <!-- Progress Indicator -->
        <div class="bg-black/40 border border-golden-400/20 rounded-2xl p-6 mb-8">
          <h3 class="text-xl font-brand text-golden-300 mb-4">DEVELOPMENT PROGRESS</h3>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="text-green-400">✓</span>
              <span class="text-gray-300">Website Design</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-green-400">✓</span>
              <span class="text-gray-300">Product Catalog</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-golden-400">⏳</span>
              <span class="text-gray-300">Payment Integration</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-gray-500">○</span>
              <span class="text-gray-400">Order Management</span>
            </div>
          </div>
        </div>

        <!-- Back to Home -->
        <div class="space-y-4">
          <nuxt-link 
            to="/"
            class="inline-flex items-center gap-2 px-6 py-3 border-2 border-golden-400 text-golden-300 font-bold rounded-full hover:bg-golden-400/10 hover:text-golden-200 transition-all duration-300"
          >
            <span>←</span>
            <span>Back to Home</span>
          </nuxt-link>
          
          <p class="text-sm text-gray-400">
            We'll notify you as soon as online ordering is ready!
          </p>
        </div>

      </div>
      
      <!-- Notify Me Section -->
      <div class="bg-gray-900/60 backdrop-blur-sm border border-golden-400/30 rounded-3xl p-8 shadow-2xl shadow-golden-500/20">
        <h3 class="text-2xl font-brand text-golden-300 mb-4">GET NOTIFIED WHEN WE LAUNCH</h3>
        <p class="text-gray-300 mb-6">
          Be the first to know when our online ordering system goes live!
        </p>
        
        <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="your@email.com" 
            class="flex-1 px-6 py-4 bg-black/50 backdrop-blur-sm border-2 border-golden-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-golden-400 focus:bg-black/70 font-medium rounded-lg transition-all duration-300"
          >
          <button type="submit" class="px-8 py-4 bg-gradient-to-r from-golden-500 to-golden-600 text-black font-bold hover:from-golden-400 hover:to-golden-500 transition-all duration-300 rounded-lg shadow-lg shadow-golden-500/30 hover:shadow-golden-500/50 transform hover:scale-105">
            NOTIFY ME
          </button>
        </form>
        
        <p class="text-sm text-gray-400 mt-6">
          Join hundreds of PowerBites fans waiting for the launch!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Set page title
useHead({
  title: 'Online Ordering Coming Soon - JoyInZaika\'s PowerBites'
})
</script>