import { createStore } from 'vuex'
import movieModule from './movie'

export default createStore({
  modules: {
    movie: movieModule,
  },
})
