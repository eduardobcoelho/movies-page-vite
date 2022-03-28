import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
// globalComponents
import BaseStructure from './components/BaseStructure.vue'
import ButtonBack from './components/buttons/ButtonBack.vue'

createApp(App)
  .use(router)
  .use(store)
  .component('base-structure', BaseStructure)
  .component('button-back', ButtonBack)
  .mount('#app')
