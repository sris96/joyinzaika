<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen overflow-hidden bg-black">
      <!-- Sophisticated Dark Background -->
      <div class="absolute inset-0">
        <!-- Dark Gradient Mesh -->
        <div class="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        <!-- Golden Accent Gradients -->
        <div class="absolute inset-0">
          <div class="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-golden-500/10 via-transparent to-transparent"></div>
          <div class="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-golden-400/8 via-transparent to-transparent"></div>
        </div>
        
        <!-- Animated Geometric Patterns -->
        <div class="absolute inset-0 opacity-30">
          <div class="absolute top-20 left-20 w-40 h-40 border border-golden-400/40 rounded-full animate-spin-slow"></div>
          <div class="absolute bottom-40 right-20 w-32 h-32 border-2 border-golden-300/30 transform rotate-45 animate-pulse-slow"></div>
          <div class="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-golden-300/20 to-transparent rounded-full animate-float"></div>
        </div>

        <!-- Organic Flowing Shapes -->
        <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="flow1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#daa520;stop-opacity:0.08" />
              <stop offset="100%" style="stop-color:#d88954;stop-opacity:0.03" />
            </linearGradient>
            <linearGradient id="flow2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:#daa520;stop-opacity:0.06" />
              <stop offset="100%" style="stop-color:#b8860b;stop-opacity:0.02" />
            </linearGradient>
          </defs>
          <path d="M0,400 C300,200 600,600 900,300 C1050,150 1200,500 1200,400 L1200,800 L0,800 Z" fill="url(#flow1)" class="animate-morph-1"/>
          <path d="M1200,300 C900,100 600,500 300,200 C150,50 0,400 0,300 L0,0 L1200,0 Z" fill="url(#flow2)" class="animate-morph-2"/>
        </svg>

        <!-- Subtle Noise Texture -->
        <div class="absolute inset-0 opacity-[0.02] bg-white" style="background-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><filter id=%22noiseFilter%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/></filter></defs><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.4%22/></svg>');"></div>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="min-h-screen flex items-center">
          <div class="w-full">
            
            <!-- Top Section: Brand Introduction -->
            <div class="text-center mb-16 pt-24">
              <!-- Elegant Badge -->
              <div class="inline-flex items-center mb-8">
                <div class="flex items-center gap-4 bg-black/80 backdrop-blur-sm px-8 py-4 rounded-full border border-golden-400/30 shadow-2xl">
                  <div class="flex items-center gap-2">
                    <div class="relative">
                      <div class="w-3 h-3 bg-golden-500 rounded-full"></div>
                      <div class="absolute inset-0 w-3 h-3 bg-golden-400 rounded-full animate-ping"></div>
                    </div>
                    <span class="text-sm font-semibold text-golden-200">Now Available in Pune</span>
                  </div>
                  <div class="w-px h-6 bg-golden-400/50"></div>
                  <span class="text-sm text-golden-300">Premium Quality Guaranteed</span>
                </div>
              </div>

              <!-- Main Headline with Creative Typography -->
              <div class="mb-8">
                <div class="relative inline-block">
                  <h1 class="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-brand leading-none">
                    <span class="block text-white animate-reveal-up drop-shadow-2xl">POWER</span>
                    <span class="block relative">
                      <span class="text-golden-400 animate-reveal-up-delay drop-shadow-2xl">BITES</span>
                      <!-- Creative underline -->
                      <div class="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-golden-400 via-golden-500 to-golden-600 transform -skew-x-12 animate-expand-x shadow-lg"></div>
                      <div class="absolute -bottom-2 left-2 right-2 h-1 bg-gradient-to-r from-golden-300 to-golden-400 transform -skew-x-12 animate-expand-x-delay"></div>
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <!-- Center Section: Interactive Product Showcase -->
            <div class="grid lg:grid-cols-3 gap-12 items-center mb-20">
              
              <!-- Left: Key Benefits (2 cards) -->
              <div class="space-y-8">
                <div class="group">
                  <div class="flex items-start gap-4 p-6 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-golden-400/30 transition-all duration-300 group-hover:bg-gray-900/80 group-hover:shadow-xl group-hover:shadow-golden-500/20 group-hover:-translate-y-1">
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-golden-400 to-golden-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span class="text-black text-xl font-bold">20g</span>
                    </div>
                    <div>
                      <h3 class="font-brand text-lg mb-2 text-golden-300">Premium Protein</h3>
                      <p class="text-gray-300 text-sm">Plant-based protein blend for optimal muscle recovery and sustained energy</p>
                    </div>
                  </div>
                </div>

                <div class="group">
                  <div class="flex items-start gap-4 p-6 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-golden-400/20 transition-all duration-300 group-hover:bg-gray-900/80 group-hover:shadow-xl group-hover:shadow-golden-500/20 group-hover:-translate-y-1">
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 border border-golden-400/50 rounded-xl flex items-center justify-center shadow-lg">
                      <span class="text-golden-400 text-2xl">🌿</span>
                    </div>
                    <div>
                      <h3 class="font-brand text-lg mb-2 text-golden-300">All Natural</h3>
                      <p class="text-gray-300 text-sm">Zero artificial preservatives, colors, or flavors. Just pure, wholesome ingredients</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Center: Hero Product -->
              <div class="flex justify-center">
                <div class="relative group cursor-pointer max-w-sm p-8">
                  <!-- Main Product Container -->
                  <div class="relative transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
                    <!-- Product Shadow -->
                    <div class="absolute inset-0 bg-golden-500/20 rounded-3xl blur-2xl transform translate-y-8 scale-95"></div>
                    
                    <!-- Product Wrapper with Image - Matching Black Packaging -->
                    <div class="relative bg-gradient-to-br from-black via-gray-900 to-black p-4 rounded-3xl shadow-2xl border border-golden-400/40">
                      <!-- Hero Image Container -->
                      <div class="relative rounded-2xl overflow-hidden shadow-inner bg-gradient-to-br from-gray-900 to-black border border-golden-400/30">
                        <!-- Main Product Image -->
                        <div class="relative aspect-square">
                          <img 
                            :src="heroImage" 
                            alt="PowerBites Premium Protein Bar - 20g Protein | All Natural Ingredients | Pune"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          
                          <!-- Gradient Overlay for premium dark feel -->
                          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
                          
                          <!-- Quality Indicators -->
                          <div class="absolute bottom-6 left-0 right-0">
                            <div class="flex justify-center gap-2">
                              <span class="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium border border-golden-400/40 text-golden-200">Gluten-Free</span>
                              <span class="px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium border border-golden-400/40 text-golden-200">Non-GMO</span>
                            </div>
                          </div>

                          <!-- Ingredient Icons Floating -->
                          <div class="absolute top-4 left-4 bg-black/80 border border-golden-400/50 backdrop-blur-sm rounded-full p-2 shadow-lg animate-float-subtle">
                            <span class="text-xl">🥜</span>
                          </div>
                          <div class="absolute top-4 right-4 bg-black/80 border border-golden-400/50 backdrop-blur-sm rounded-full p-2 shadow-lg animate-float-subtle-delayed">
                            <span class="text-xl">🍫</span>
                          </div>
                          <div class="absolute top-1/2 right-4 bg-black/80 border border-golden-400/50 backdrop-blur-sm rounded-full p-2 shadow-lg animate-bounce-gentle">
                            <span class="text-xl">🍯</span>
                          </div>
                        </div>
                      </div>

                      <!-- Floating Brand Badge - Black with Golden Accents -->
                      <div class="absolute -top-3 -left-3 bg-black border-2 border-golden-400 text-golden-300 px-4 py-2 rounded-full text-xs font-bold transform -rotate-6 shadow-2xl z-10">
                        POWERBITES
                      </div>

                      <!-- Premium Badge -->
                      <div class="absolute -top-3 -right-3 bg-gradient-to-r from-golden-500 to-golden-600 text-black px-3 py-2 rounded-full text-xs font-bold shadow-2xl z-10">
                        PREMIUM
                      </div>
                    </div>

                    <!-- Floating Nutrition Badges -->
                    <div class="absolute -right-6 top-1/4 bg-gradient-to-r from-golden-500 to-golden-600 text-black px-3 py-1 rounded-full text-xs font-bold transform rotate-6 shadow-lg animate-float-subtle z-20">
                      20G PROTEIN
                    </div>
                    <div class="absolute -left-6 bottom-1/3 bg-black border-2 border-golden-400 text-golden-300 px-3 py-1 rounded-full text-xs font-bold transform -rotate-6 shadow-lg animate-float-subtle-delayed z-20">
                      ALL NATURAL
                    </div>
                  </div>

                  <!-- Interactive Elements -->
                  <div class="absolute -bottom-4 -right-4 bg-gradient-to-r from-golden-500 to-golden-600 text-black px-4 py-2 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-110 z-20">
                    <div class="flex items-center gap-2 text-sm font-bold">
                      <span>TASTE LEVEL:</span>
                      <div class="flex gap-0.5">
                        <div class="w-1.5 h-4 bg-black rounded-full animate-pulse"></div>
                        <div class="w-1.5 h-4 bg-black rounded-full animate-pulse delay-75"></div>
                        <div class="w-1.5 h-4 bg-black rounded-full animate-pulse delay-150"></div>
                        <div class="w-1.5 h-4 bg-black rounded-full animate-pulse delay-225"></div>
                        <div class="w-1.5 h-4 bg-black rounded-full animate-pulse delay-300"></div>
                      </div>
                      <span class="text-xs">EPIC</span>
                    </div>
                  </div>

                  <!-- Light Reflection Effect -->
                  <div class="absolute inset-0 bg-gradient-to-br from-golden-400/5 via-transparent to-transparent rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              <!-- Right: Benefits & Trust (2 cards) -->
              <div class="space-y-8">
                <div class="group">
                  <div class="flex items-start gap-4 p-6 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-golden-400/20 transition-all duration-300 group-hover:bg-gray-900/80 group-hover:shadow-xl group-hover:shadow-golden-500/20 group-hover:-translate-y-1">
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 border border-golden-400/50 rounded-xl flex items-center justify-center shadow-lg">
                      <span class="text-golden-400 text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 class="font-brand text-lg mb-2 text-golden-300">Sustained Energy</h3>
                      <p class="text-gray-300 text-sm">Complex carbs and healthy fats for long-lasting fuel without the crash</p>
                    </div>
                  </div>
                </div>

                <div class="group">
                  <div class="flex items-start gap-4 p-6 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-golden-400/20 transition-all duration-300 group-hover:bg-gray-900/80 group-hover:shadow-xl group-hover:shadow-golden-500/20 group-hover:-translate-y-1">
                    <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-golden-400 to-golden-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span class="text-black text-xl font-bold">★</span>
                    </div>
                    <div>
                      <h3 class="font-brand text-lg mb-2 text-golden-300">5★ Rating</h3>
                      <p class="text-gray-300 text-sm">Based on 200+ reviews from satisfied customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Bottom Section: Call to Action -->
            <div class="text-center pb-20">
              <p class="text-xl sm:text-2xl font-comfort font-medium text-golden-200 mb-8 animate-fade-in-up tracking-wide">
                Where Joy Meets Zaika
              </p>
              
              <p class="text-lg text-golden-200 mb-8 max-w-2xl mx-auto">
                Hand-crafted in Pune with premium ingredients. Experience the perfect balance of nutrition and indulgence.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a href="#product" class="group relative px-8 py-4 bg-gradient-to-r from-golden-500 to-golden-600 text-black font-bold text-lg rounded-full overflow-hidden shadow-2xl shadow-golden-500/30 transform transition-all duration-300 hover:scale-105 hover:shadow-golden-500/50">
                  <span class="relative z-10 flex items-center gap-3">
                    <span>Experience PowerBites</span>
                    <div class="w-6 h-6 bg-black/20 rounded-full flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <span class="text-sm">→</span>
                    </div>
                  </span>
                  <div class="absolute inset-0 bg-gradient-to-r from-golden-400 to-golden-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
                
                <a href="#ingredients" class="px-8 py-4 border-2 border-golden-400 text-golden-300 font-bold text-lg rounded-full hover:bg-golden-400/10 hover:text-golden-200 transition-all duration-300 shadow-lg shadow-golden-500/20">
                  View Nutrition Facts
                </a>
              </div>

              <!-- Floating Ingredient Icons -->
              <div class="relative">
                <div class="absolute -top-20 -left-20 animate-float">
                  <div class="bg-black/80 border border-golden-400/50 backdrop-blur-sm rounded-full p-3 shadow-xl shadow-golden-500/20">
                    <span class="text-2xl">🌰</span>
                  </div>
                </div>
                <div class="absolute -top-16 right-16 animate-float-delayed">
                  <div class="bg-black/80 border border-golden-400/50 backdrop-blur-sm rounded-full p-3 shadow-xl shadow-golden-500/20">
                    <span class="text-2xl">🍯</span>
                  </div>
                </div>
                <div class="absolute -bottom-12 -right-24 animate-float delay-700">
                  <div class="bg-black/80 border border-golden-400/50 backdrop-blur-sm rounded-full p-3 shadow-xl shadow-golden-500/20">
                    <span class="text-2xl">⚡</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- Product Features Section -->
    <section id="product" class="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <!-- Dark Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-golden-500/20 to-transparent"></div>
        <div class="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-golden-400/15 to-transparent"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <span class="font-brand text-golden-400 text-xl">WHY CHOOSE</span>
          <h2 class="text-5xl sm:text-6xl font-display mt-2 mb-4 text-white">
            The PowerBites Difference
          </h2>
          <p class="text-xl text-golden-200 max-w-2xl mx-auto font-light">
            We obsess over every detail so you don't have to
          </p>
        </div>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Card 1 -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-golden-500/20 to-golden-600/30 rounded-2xl transform group-hover:rotate-3 transition-transform duration-300 blur-sm"></div>
            <div class="relative bg-gray-900/80 backdrop-blur-sm border border-golden-400/30 p-8 rounded-2xl shadow-2xl shadow-golden-500/10 transition-all duration-300 group-hover:shadow-golden-500/20 group-hover:-translate-y-2">
              <div class="text-5xl mb-4 filter drop-shadow-lg">💪</div>
              <h3 class="text-2xl font-brand mb-2 text-golden-300">POWER PACKED</h3>
              <p class="text-gray-300 font-light">20g of premium plant protein in every single bar</p>
            </div>
          </div>
          
          <!-- Card 2 -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-golden-500/15 to-golden-600/25 rounded-2xl transform group-hover:-rotate-3 transition-transform duration-300 blur-sm"></div>
            <div class="relative bg-gray-900/80 backdrop-blur-sm border border-golden-400/30 p-8 rounded-2xl shadow-2xl shadow-golden-500/10 transition-all duration-300 group-hover:shadow-golden-500/20 group-hover:-translate-y-2">
              <div class="text-5xl mb-4 filter drop-shadow-lg">🌿</div>
              <h3 class="text-2xl font-brand mb-2 text-golden-300">CLEAN LABEL</h3>
              <p class="text-gray-300 font-light">Only ingredients you can pronounce and trust</p>
            </div>
          </div>
          
          <!-- Card 3 -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-golden-500/20 to-golden-600/30 rounded-2xl transform group-hover:rotate-3 transition-transform duration-300 blur-sm"></div>
            <div class="relative bg-gray-900/80 backdrop-blur-sm border border-golden-400/30 p-8 rounded-2xl shadow-2xl shadow-golden-500/10 transition-all duration-300 group-hover:shadow-golden-500/20 group-hover:-translate-y-2">
              <div class="text-5xl mb-4 filter drop-shadow-lg">⚡</div>
              <h3 class="text-2xl font-brand mb-2 text-golden-300">SUSTAINED ENERGY</h3>
              <p class="text-gray-300 font-light">No crash, just consistent fuel for your day</p>
            </div>
          </div>
          
          <!-- Card 4 -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-golden-500/15 to-golden-600/25 rounded-2xl transform group-hover:-rotate-3 transition-transform duration-300 blur-sm"></div>
            <div class="relative bg-gray-900/80 backdrop-blur-sm border border-golden-400/30 p-8 rounded-2xl shadow-2xl shadow-golden-500/10 transition-all duration-300 group-hover:shadow-golden-500/20 group-hover:-translate-y-2">
              <div class="text-5xl mb-4 filter drop-shadow-lg">😋</div>
              <h3 class="text-2xl font-brand mb-2 text-golden-300">ACTUALLY TASTY</h3>
              <p class="text-gray-300 font-light">Dessert-like taste without the guilt trip</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ingredients Section -->
    <section id="ingredients" class="py-20 bg-gray-900 relative overflow-hidden">
      <!-- Dark Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-r from-golden-500/20 to-transparent"></div>
        <div class="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-golden-400/15 to-transparent"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="font-brand text-golden-400 text-xl">TRANSPARENCY FIRST</span>
            <h2 class="text-5xl sm:text-6xl font-display mt-2 mb-8 text-white">
              What's Really<br/>Inside
            </h2>
            
            <!-- Dark themed ingredient cards -->
            <div class="space-y-4">
              <div class="group flex items-center gap-6 p-4 bg-black/40 backdrop-blur-sm border border-golden-400/20 hover:bg-black/60 hover:border-golden-400/40 transition-all duration-300 rounded-xl cursor-pointer shadow-lg shadow-golden-500/5">
                <div class="text-4xl filter drop-shadow-lg">🌴</div>
                <div class="flex-1">
                  <h4 class="font-bold text-lg text-golden-300">Organic Dates</h4>
                  <p class="text-gray-300 text-sm">Nature's candy - sweet, fibrous, and energy-dense</p>
                </div>
                <div class="text-golden-400 font-brand text-2xl drop-shadow-lg">25%</div>
              </div>
              
              <div class="group flex items-center gap-6 p-4 bg-black/40 backdrop-blur-sm border border-golden-400/20 hover:bg-black/60 hover:border-golden-400/40 transition-all duration-300 rounded-xl cursor-pointer shadow-lg shadow-golden-500/5">
                <div class="text-4xl filter drop-shadow-lg">🥜</div>
                <div class="flex-1">
                  <h4 class="font-bold text-lg text-golden-300">Almond Butter</h4>
                  <p class="text-gray-300 text-sm">Creamy texture meets healthy fats</p>
                </div>
                <div class="text-golden-400 font-brand text-2xl drop-shadow-lg">20%</div>
              </div>
              
              <div class="group flex items-center gap-6 p-4 bg-black/40 backdrop-blur-sm border border-golden-400/20 hover:bg-black/60 hover:border-golden-400/40 transition-all duration-300 rounded-xl cursor-pointer shadow-lg shadow-golden-500/5">
                <div class="text-4xl filter drop-shadow-lg">🌱</div>
                <div class="flex-1">
                  <h4 class="font-bold text-lg text-golden-300">Pea Protein Isolate</h4>
                  <p class="text-gray-300 text-sm">Complete amino profile, easy to digest</p>
                </div>
                <div class="text-golden-400 font-brand text-2xl drop-shadow-lg">30%</div>
              </div>
              
              <div class="group flex items-center gap-6 p-4 bg-black/40 backdrop-blur-sm border border-golden-400/20 hover:bg-black/60 hover:border-golden-400/40 transition-all duration-300 rounded-xl cursor-pointer shadow-lg shadow-golden-500/5">
                <div class="text-4xl filter drop-shadow-lg">🌾</div>
                <div class="flex-1">
                  <h4 class="font-bold text-lg text-golden-300">Gluten-Free Oats</h4>
                  <p class="text-gray-300 text-sm">Slow-release carbs for sustained energy</p>
                </div>
                <div class="text-golden-400 font-brand text-2xl drop-shadow-lg">15%</div>
              </div>
              
              <div class="group flex items-center gap-6 p-4 bg-black/40 backdrop-blur-sm border border-golden-400/20 hover:bg-black/60 hover:border-golden-400/40 transition-all duration-300 rounded-xl cursor-pointer shadow-lg shadow-golden-500/5">
                <div class="text-4xl filter drop-shadow-lg">🍫</div>
                <div class="flex-1">
                  <h4 class="font-bold text-lg text-golden-300">Dark Chocolate Chips</h4>
                  <p class="text-gray-300 text-sm">Because life's too short for boring bars</p>
                </div>
                <div class="text-golden-400 font-brand text-2xl drop-shadow-lg">10%</div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <!-- Enhanced nutrition label with dark theme -->
            <div class="bg-black border-2 border-golden-400/50 text-white p-8 rounded-2xl shadow-2xl shadow-golden-500/20 backdrop-blur-sm">
              <h3 class="font-brand text-4xl mb-6 border-b-2 border-golden-400/50 pb-4 text-golden-300">NUTRITION FACTS</h3>
              <div class="space-y-3 font-mono">
                <div class="flex justify-between text-lg">
                  <span class="text-gray-200">Serving Size</span>
                  <span class="font-bold text-white">1 Bar (60g)</span>
                </div>
                <div class="border-t border-golden-400/30 pt-3">
                  <div class="flex justify-between text-2xl font-bold mb-3">
                    <span class="text-gray-200">Calories</span>
                    <span class="text-white">240</span>
                  </div>
                </div>
                <div class="space-y-2 border-t border-golden-400/30 pt-3">
                  <div class="flex justify-between text-gray-200">
                    <span>Total Fat</span>
                    <span>9g</span>
                  </div>
                  <div class="flex justify-between text-gray-200">
                    <span>Total Carbs</span>
                    <span>22g</span>
                  </div>
                  <div class="flex justify-between text-xl font-bold text-golden-400">
                    <span>Protein</span>
                    <span class="drop-shadow-lg">20g</span>
                  </div>
                  <div class="flex justify-between text-gray-200">
                    <span>Fiber</span>
                    <span>5g</span>
                  </div>
                  <div class="flex justify-between text-gray-200">
                    <span>Sugar</span>
                    <span>12g</span>
                  </div>
                </div>
                <div class="border-t border-golden-400/30 pt-3 mt-3">
                  <p class="text-xs uppercase tracking-wider text-golden-400 drop-shadow">No artificial anything</p>
                </div>
              </div>
            </div>
            
            <!-- Enhanced decorative elements -->
            <div class="absolute -z-10 -top-8 -right-8 w-full h-full bg-gradient-to-br from-golden-500/20 to-golden-600/10 rounded-2xl blur-xl"></div>
            <div class="absolute -z-20 -top-4 -right-4 w-full h-full border border-golden-400/30 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-black relative overflow-hidden">
      <!-- Dark Background Elements -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-golden-500/20 to-transparent"></div>
        <div class="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-golden-400/15 to-transparent"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <span class="font-brand text-golden-400 text-xl">REAL PEOPLE</span>
          <h2 class="text-5xl sm:text-6xl font-display mt-2 mb-4 text-white">
            Real Reviews
          </h2>
        </div>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Dark themed testimonial cards -->
          <div class="bg-gray-900/80 backdrop-blur-sm border border-golden-400/30 p-8 shadow-2xl shadow-golden-500/10 relative rounded-2xl">
            <div class="absolute -top-4 left-8 text-6xl text-golden-400/60 font-display">"</div>
            <div class="flex gap-1 mb-4">
              <span v-for="i in 5" :key="i" class="text-2xl text-golden-400 drop-shadow-lg">⭐</span>
            </div>
            <p class="text-gray-300 mb-6 relative z-10 italic font-light">
              Finally! A protein bar that doesn't taste like cardboard. JoyNZaika's PowerBites are my new gym bag essential. The chocolate chips are a game-changer!
            </p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-golden-400 to-golden-600 rounded-full border-2 border-golden-400/50 shadow-lg"></div>
              <div>
                <div class="font-bold text-golden-200">Priya Sharma</div>
                <div class="text-sm text-gray-400">Fitness Coach</div>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-900/80 backdrop-blur-sm border border-golden-400/30 p-8 shadow-2xl shadow-golden-500/10 relative rounded-2xl">
            <div class="absolute -top-4 left-8 text-6xl text-golden-400/60 font-display">"</div>
            <div class="flex gap-1 mb-4">
              <span v-for="i in 5" :key="i" class="text-2xl text-golden-400 drop-shadow-lg">⭐</span>
            </div>
            <p class="text-gray-300 mb-6 relative z-10 italic font-light">
              As a nutritionist, I'm impressed by PowerBites' clean ingredient list. My clients love the taste, and I love the macros. Win-win!
            </p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-golden-400 to-golden-600 rounded-full border-2 border-golden-400/50 shadow-lg"></div>
              <div>
                <div class="font-bold text-golden-200">Dr. Raj Mehta</div>
                <div class="text-sm text-gray-400">Nutritionist</div>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-900/80 backdrop-blur-sm border border-golden-400/30 p-8 shadow-2xl shadow-golden-500/10 relative rounded-2xl sm:col-span-2 lg:col-span-1">
            <div class="absolute -top-4 left-8 text-6xl text-golden-400/60 font-display">"</div>
            <div class="flex gap-1 mb-4">
              <span v-for="i in 5" :key="i" class="text-2xl text-golden-400 drop-shadow-lg">⭐</span>
            </div>
            <p class="text-gray-300 mb-6 relative z-10 italic font-light">
              Perfect for my busy mornings. Keeps me full till lunch and actually tastes like a treat. Already ordered my second box!
            </p>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-gradient-to-br from-golden-400 to-golden-600 rounded-full border-2 border-golden-400/50 shadow-lg"></div>
              <div>
                <div class="font-bold text-golden-200">Ananya Kapoor</div>
                <div class="text-sm text-gray-400">Entrepreneur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet Our Chef Section -->
    <section id="chef" class="py-20 bg-black text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-20 w-96 h-96 bg-golden-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-warm-500 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <span class="font-brand text-golden-400 text-xl">MEET OUR CHEF</span>
          <h2 class="text-5xl sm:text-6xl font-brand mt-2 mb-8 text-white">
            CRAFTED WITH<br/>
            <span class="text-golden-400">LOVE & PASSION</span>
          </h2>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="order-2 lg:order-1">
            <div class="bg-gray-900/60 backdrop-blur-sm border border-golden-400/30 rounded-3xl p-8 shadow-2xl shadow-golden-500/10">
              <div class="flex items-start gap-6 mb-8">
                <div class="flex-shrink-0">
                  <div class="w-20 h-20 bg-gradient-to-br from-golden-400 to-golden-600 rounded-full flex items-center justify-center shadow-lg">
                    <span class="text-3xl">👨‍🍳</span>
                  </div>
                </div>
                <div>
                  <h3 class="text-2xl font-brand text-golden-300 mb-2">Chef Srishty Chandra</h3>
                  <p class="text-golden-200 font-comfort">Passionate Home Cook & Nutrition Enthusiast</p>
                  <p class="text-sm text-gray-400 mt-2">Loved by family & friends for her delicious creations</p>
                </div>
              </div>
              
              <blockquote class="text-lg text-gray-300 mb-6 font-light leading-relaxed italic border-l-4 border-golden-400 pl-6">
                "It all started when I wanted to create healthy treats for my family and friends. When everyone kept asking for more of my protein bars, I realized I had something special. Every PowerBite is made with the same love and care I put into cooking for the people I care about."
              </blockquote>
              
              <p class="text-gray-400 mb-8 leading-relaxed">
                What began as a young chef's passion for creating nutritious treats has blossomed into JoyNZaika's PowerBites. Srishty's journey from her home kitchen in Pune to creating these beloved protein bars is rooted in genuine care and the joy of seeing others enjoy wholesome, delicious food. Each bar carries the warmth and innovation that made her family and friends fall in love with her creations.
              </p>
              
              <div class="grid grid-cols-2 gap-6">
                <div class="text-center p-4 bg-black/40 border border-golden-400/20 rounded-2xl">
                  <div class="text-3xl font-brand text-golden-400">127</div>
                  <div class="text-xs text-golden-200 uppercase tracking-wider">Recipe Iterations</div>
                </div>
                <div class="text-center p-4 bg-black/40 border border-golden-400/20 rounded-2xl">
                  <div class="text-3xl font-brand text-golden-400">ZERO</div>
                  <div class="text-xs text-golden-200 uppercase tracking-wider">Shortcuts Taken</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="order-1 lg:order-2 relative">
            <!-- Family Testimonials -->
            <div class="bg-gray-900/60 backdrop-blur-sm border border-golden-400/30 rounded-3xl p-8 shadow-2xl shadow-golden-500/10">
              <div class="text-center mb-8">
                <div class="text-5xl mb-4">💬</div>
                <h3 class="text-2xl font-brand text-golden-300 mb-2">Family & Friends</h3>
                <p class="text-gray-400 text-sm">What they said before we went public</p>
              </div>
              
              <div class="space-y-6">
                <div class="bg-black/40 border-l-4 border-golden-400 p-5 rounded-r-xl">
                  <p class="text-base text-gray-300 italic mb-3">"Didi, these are better than store-bought!"</p>
                  <p class="text-sm text-golden-200">- Neighbor's daughter</p>
                </div>
                
                <div class="bg-black/40 border-l-4 border-golden-400 p-5 rounded-r-xl">
                  <p class="text-base text-gray-300 italic mb-3">"Can you make a box for my office friends?"</p>
                  <p class="text-sm text-golden-200">- College friend</p>
                </div>
                
                <div class="bg-black/40 border-l-4 border-golden-400 p-5 rounded-r-xl">
                  <p class="text-base text-gray-300 italic mb-3">"Why aren't you selling these?"</p>
                  <p class="text-sm text-golden-200">- Best friend</p>
                </div>
              </div>
              
              <div class="text-center mt-8">
                <div class="inline-flex items-center gap-3 bg-golden-500/20 border border-golden-400/50 rounded-full px-6 py-3">
                  <span class="text-golden-400 text-lg">💡</span>
                  <span class="text-golden-200 text-base font-medium">And that's how it all began!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Chef's Promise -->
        <div class="mt-16 text-center">
          <div class="max-w-3xl mx-auto bg-gray-900/40 backdrop-blur-sm border border-golden-400/30 rounded-2xl p-8">
            <h3 class="text-2xl font-display text-golden-300 mb-4">Chef's Promise</h3>
            <p class="text-lg text-gray-300 font-comfort leading-relaxed">
              "I personally make every batch with the same attention and love I put into cooking for the people I care about. When you taste our bars, you're experiencing homemade goodness, nutritious ingredients, and most importantly – genuine care that comes from cooking with passion and heart."
            </p>
            <div class="mt-6 flex items-center justify-center gap-4">
              <div class="w-16 h-1 bg-gradient-to-r from-golden-400 to-golden-600"></div>
              <span class="font-brand text-golden-400">CHEF SRISHTY</span>
              <div class="w-16 h-1 bg-gradient-to-r from-golden-400 to-golden-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section id="contact" class="py-20 relative bg-gray-900 overflow-hidden">
      <!-- Dark Background Elements -->
      <div class="absolute inset-0 opacity-15">
        <div class="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-golden-500/20 to-transparent"></div>
        <div class="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-golden-400/15 to-transparent"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-5xl sm:text-6xl lg:text-7xl font-display mb-6 text-white">
          Ready to Try<br/>
          <span class="relative">
            <span class="relative z-10 text-golden-400 drop-shadow-lg">PowerBites?</span>
            <svg class="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 15c50-10 200-10 290 0" stroke="#daa520" stroke-width="4" fill="none" stroke-linecap="round"/>
            </svg>
          </span>
        </h2>
        
        <p class="text-xl text-golden-200 mb-8 max-w-2xl mx-auto">
          PowerBites online ordering launches soon. Be the first to know when we go live!
        </p>
        
        <div class="max-w-md mx-auto mb-8">
          <form class="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="your@email.com" 
              class="flex-1 px-6 py-4 bg-black/50 backdrop-blur-sm border-2 border-golden-400/50 text-white placeholder-gray-400 focus:outline-none focus:border-golden-400 focus:bg-black/70 font-medium rounded-lg transition-all duration-300"
            >
            <button type="submit" class="px-8 py-4 bg-gradient-to-r from-golden-500 to-golden-600 text-black font-bold hover:from-golden-400 hover:to-golden-500 transition-all duration-300 rounded-lg shadow-lg shadow-golden-500/30 hover:shadow-golden-500/50 transform hover:scale-105">
              NOTIFY ME
            </button>
          </form>
          
          <div class="mt-4 text-center">
            <nuxt-link 
              to="/order" 
              class="inline-flex items-center gap-2 text-golden-300 hover:text-golden-200 transition-colors text-sm font-medium"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012-2m-2 6h.01M12 13h.01"/>
              </svg>
              <span>Track Online Ordering Progress</span>
            </nuxt-link>
          </div>
        </div>
        
        <!-- WhatsApp Ordering Alternative -->
        <div class="max-w-lg mx-auto mb-12">
          <div class="bg-black/40 backdrop-blur-sm border border-golden-400/30 rounded-2xl p-6">
            <div class="text-center mb-4">
              <div class="text-3xl mb-2">📱</div>
              <h3 class="text-xl font-brand text-golden-300 mb-2">ORDER NOW VIA WHATSAPP</h3>
              <p class="text-gray-300 text-sm mb-4">Can't wait? Order directly through WhatsApp!</p>
            </div>
            
            <a 
              href="https://wa.me/916200104757?text=Hi! I'd like to order JoyNZaika's PowerBites. Can you please share the available flavors and pricing?"
              target="_blank"
              class="flex items-center justify-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-600/30"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>WhatsApp Order</span>
            </a>
          </div>
        </div>
        
        <div class="flex items-center justify-center gap-8 mb-8">
          <a href="mailto:contact@joynzaika.com" class="flex items-center gap-2 text-golden-200 hover:text-golden-400 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span class="font-medium">contact@joynzaika.com</span>
          </a>
          <a href="tel:+916200104757" class="flex items-center gap-2 text-golden-200 hover:text-golden-400 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span class="font-medium">+91 6200104757</span>
          </a>
        </div>
        
        <div class="flex justify-center gap-4">
          <a href="#" class="w-12 h-12 bg-golden-500 text-black rounded-full flex items-center justify-center hover:bg-golden-400 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-golden-500/30">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" class="w-12 h-12 bg-golden-500 text-black rounded-full flex items-center justify-center hover:bg-golden-400 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-golden-500/30">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
            </svg>
          </a>
          <a href="#" class="w-12 h-12 bg-golden-500 text-black rounded-full flex items-center justify-center hover:bg-golden-400 transition-all duration-300 transform hover:scale-110 shadow-lg shadow-golden-500/30">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-white py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center text-center">
          <h3 class="text-4xl font-brand mb-4">
            <span>JOY</span><span class="text-golden-400">IN</span><span>ZAIKA</span>
          </h3>
          <p class="text-gray-400 mb-8 max-w-md">
            Fueling joy, one bite at a time. Made in Pune with love, for India with pride.
          </p>
          <div class="flex gap-8 mb-8">
            <a href="#home" class="text-gray-400 hover:text-golden-400 transition-colors">Home</a>
            <a href="#product" class="text-gray-400 hover:text-golden-400 transition-colors">Product</a>
            <a href="#ingredients" class="text-gray-400 hover:text-golden-400 transition-colors">Ingredients</a>
            <a href="#chef" class="text-gray-400 hover:text-golden-400 transition-colors">Chef</a>
            <a href="#contact" class="text-gray-400 hover:text-golden-400 transition-colors">Contact</a>
          </div>
          <div class="border-t border-gray-800 pt-8 w-full">
            <p class="text-gray-500 text-sm">
              © 2024 JoyNZaika. All rights reserved. | Made with 💛 for health enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Image path for proper Nuxt handling
const heroImage = '/power-bite-hero.jpg'

// Enhanced SEO for homepage
useHead({
  title: 'JoyNZaika\'s PowerBites - Premium Protein Bars Pune | 20g Protein | Order Now',
  meta: [
    { 
      name: 'description', 
      content: 'Order JoyNZaika\'s PowerBites - Pune\'s best handcrafted protein bars with 20g protein, all-natural ingredients. Made fresh by Chef Srishty. WhatsApp ordering available! Free delivery in Pune.' 
    },
    {
      name: 'keywords',
      content: 'PowerBites Pune, protein bars Pune, healthy snacks Pune, natural protein bars India, homemade protein bars, Chef Srishty, gluten-free protein bars, vegan snacks Pune, fitness food Pune, energy bars online'
    },
    { property: 'og:title', content: 'JoyNZaika\'s PowerBites - Premium Handcrafted Protein Bars | Pune' },
    { property: 'og:description', content: 'Get Pune\'s best protein bars! 20g protein, all-natural ingredients, no preservatives. Made with love by Chef Srishty. Order now via WhatsApp!' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://joynzaika.com/' },
    { property: 'twitter:title', content: 'JoyNZaika\'s PowerBites - Premium Protein Bars Pune' },
    { property: 'twitter:description', content: '20g protein power! All-natural, handcrafted protein bars made in Pune. Order now!' }
  ],
  link: [
    { rel: 'canonical', href: 'https://joynzaika.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'JoyNZaika\'s PowerBites - Home',
        'description': 'Premium handcrafted protein bars with 20g protein made in Pune',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [{
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://joynzaika.com/'
          }]
        }
      })
    }
  ]
})

onMounted(() => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
})
</script>

<style scoped>
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes slide-up-1 {
  0% { transform: translateY(100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes slide-up-2 {
  0% { transform: translateY(100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes slide-up-3 {
  0% { transform: translateY(100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes expand-width {
  0% { transform: scaleX(0) skewY(-1deg); }
  100% { transform: scaleX(1) skewY(-1deg); }
}

@keyframes grow-height {
  0% { transform: scaleY(0); }
  100% { transform: scaleY(1); }
}

@keyframes fade-in-delayed {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-delayed-2 {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes fill-bar {
  0% { width: 0%; }
  100% { width: 100%; }
}

@keyframes spin-slow {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

@keyframes morph-1 {
  0%, 100% { d: path("M0,400 C300,200 600,600 900,300 C1050,150 1200,500 1200,400 L1200,800 L0,800 Z"); }
  50% { d: path("M0,300 C400,100 700,700 800,400 C950,250 1200,600 1200,300 L1200,800 L0,800 Z"); }
}

@keyframes morph-2 {
  0%, 100% { d: path("M1200,300 C900,100 600,500 300,200 C150,50 0,400 0,300 L0,0 L1200,0 Z"); }
  50% { d: path("M1200,400 C800,200 500,600 400,300 C250,150 0,500 0,400 L0,0 L1200,0 Z"); }
}

@keyframes reveal-up {
  0% { transform: translateY(100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes reveal-up-delay {
  0% { transform: translateY(100px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes expand-x {
  0% { transform: scaleX(0) skewX(-12deg); }
  100% { transform: scaleX(1) skewX(-12deg); }
}

@keyframes expand-x-delay {
  0% { transform: scaleX(0) skewX(-12deg); }
  100% { transform: scaleX(1) skewX(-12deg); }
}

@keyframes fade-in-up {
  0% { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes bounce-gentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes float-subtle {
  0%, 100% { transform: translateY(0) rotate(6deg); }
  50% { transform: translateY(-3px) rotate(6deg); }
}

@keyframes float-subtle-delayed {
  0%, 100% { transform: translateY(0) rotate(-6deg); }
  50% { transform: translateY(-3px) rotate(-6deg); }
}

.animate-scroll {
  animation: scroll 20s linear infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}

.animate-slide-up-1 {
  animation: slide-up-1 0.8s ease-out 0.2s both;
}

.animate-slide-up-2 {
  animation: slide-up-2 0.8s ease-out 0.4s both;
}

.animate-slide-up-3 {
  animation: slide-up-3 0.8s ease-out 0.6s both;
}

.animate-expand-width {
  animation: expand-width 1s ease-out 0.8s both;
  transform-origin: left;
}

.animate-grow-height {
  animation: grow-height 1s ease-out 1s both;
  transform-origin: top;
}

.animate-fade-in-delayed {
  animation: fade-in-delayed 0.8s ease-out 1.2s both;
}

.animate-fade-in-delayed-2 {
  animation: fade-in-delayed-2 0.8s ease-out 1.4s both;
}

.animate-fill-bar {
  animation: fill-bar 2s ease-out 2s both;
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-morph-1 {
  animation: morph-1 20s ease-in-out infinite;
}

.animate-morph-2 {
  animation: morph-2 25s ease-in-out infinite;
}

.animate-reveal-up {
  animation: reveal-up 0.8s ease-out 0.3s both;
}

.animate-reveal-up-delay {
  animation: reveal-up-delay 0.8s ease-out 0.5s both;
}

.animate-expand-x {
  animation: expand-x 1s ease-out 0.8s both;
  transform-origin: left;
}

.animate-expand-x-delay {
  animation: expand-x-delay 1s ease-out 1s both;
  transform-origin: left;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out 0.7s both;
}

.animate-bounce-gentle {
  animation: bounce-gentle 3s ease-in-out infinite;
}

.animate-float-subtle {
  animation: float-subtle 4s ease-in-out infinite;
}

.animate-float-subtle-delayed {
  animation: float-subtle-delayed 5s ease-in-out infinite;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.delay-75 { animation-delay: 75ms; }
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
.delay-700 { animation-delay: 700ms; }
.delay-1000 { animation-delay: 1000ms; }

/* Custom border width */
.border-3 {
  border-width: 3px;
}
</style>