import InstantSearch from 'vue-instantsearch/dist/vue3/es'
// import InstantSearch from 'vue-instantsearch'

import App from './App.vue'
import { createSSRApp } from 'vue'
import { createRouter } from './router'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)
  const router = createRouter()
  // app.use(InstantSearch)
  app.use(router)
  return { app, router }
}
