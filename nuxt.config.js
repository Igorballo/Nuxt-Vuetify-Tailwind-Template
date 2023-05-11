export default {
  // Ajoute un titre pour votre application
  css: [
    '@/assets/css/main.css',
  ],
  head: {
    title: 'Mon application Nuxt.js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },

  // Configure le mode de rendu pour l'application
  ssr: true,

  // Configurer les modules Nuxt.js à utiliser
  modules: [
  
  ],

  // Configuration des plugins pour l'application
  plugins: [
    
  ],

  // Configuration pour les environnements de développement et de production
  env: {
  },

  // Configuration pour le rendu côté client
  build: {
    presets(env, [ preset, options ]) {
      return [
        [ "@nuxt/babel-preset-app", options ]
      ]
    }
  }
}