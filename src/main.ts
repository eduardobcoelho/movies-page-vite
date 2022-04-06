import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
// globalComponents
import AppScroll from './components/AppScroll.vue'
import BaseStructure from './components/BaseStructure.vue'
import ButtonBack from './components/buttons/ButtonBack.vue'
import GeneralDescription from './components/GeneralDescription.vue'

createApp(App)
  .use(router)
  .use(store)
  .component('app-scroll', AppScroll)
  .component('base-structure', BaseStructure)
  .component('button-back', ButtonBack)
  .component('general-description', GeneralDescription)
  .mount('#app')
