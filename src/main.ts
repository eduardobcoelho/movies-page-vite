import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
// globalComponents
import BaseStructure from './components/BaseStructure.vue'
import ButtonBack from './components/buttons/ButtonBack.vue'
import GeneralDescription from './components/GeneralDescription.vue'

createApp(App)
  .use(router)
  .use(store)
  .component('base-structure', BaseStructure)
  .component('button-back', ButtonBack)
  .component('general-description', GeneralDescription)
  .mount('#app')
