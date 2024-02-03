import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// For google maps
import VueGoogleMaps from "@fawmi/vue-google-maps";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// For google maps
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyApAuWIKnBtpxr-WxgBapzpBpTW0xjF-is',
  },
 })

app.mount('#app')
