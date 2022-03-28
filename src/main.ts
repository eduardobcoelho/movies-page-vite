import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
// globalComponents
import BaseStructure from './components/BaseStructure.vue'

createApp(App)
  .use(router)
  .use(store)
  .component('base-structure', BaseStructure)
  .mount('#app')
